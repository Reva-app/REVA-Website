#!/usr/bin/env python3
"""
Leest de REVA-herstelplannen uit de database-migraties van de app (reva-app) en
schrijft ze naar lib/herstelplannen-data.json voor /herstelplannen en de
blessurepagina's. Zo loopt de website gelijk met het product.

Gebruik (vanuit de map reva-website):
    python3 -I scripts/sync-herstelplannen.py
    python3 -I scripts/sync-herstelplannen.py "/pad/naar/reva-app/supabase/migrations"

Per herstelplan geldt de laatste migratie waarin het wordt aangemaakt. Criteria die
later via migratie 107 (gevalideerde testen) zijn toegevoegd, worden aan de juiste
fase gekoppeld.
"""
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
DEFAULT = os.path.join(HERE, "..", "..", "..", "REVA App", "reva-app", "supabase", "migrations")
SRC = os.path.abspath(sys.argv[1] if len(sys.argv) > 1 else DEFAULT)
OUT = os.path.join(HERE, "..", "lib", "herstelplannen-data.json")


def strings(sql):
    """Alle SQL-strings ('...', met '' als escape) in volgorde."""
    return [s.replace("''", "'") for s in re.findall(r"'((?:[^']|'')*)'", sql)]


def phase_criteria(segment):
    m = re.search(r"insert into public\.protocol_phase_criteria[^;]*;", segment, flags=re.S)
    if not m:
        return []
    return [c.replace("''", "'") for c in re.findall(r"\(v_phase,\s*'((?:[^']|'')*)'", m.group(0))]


plans = {}
extra = []  # (plannaam, fasenaam, [criteria])
for path in sorted(glob.glob(os.path.join(SRC, "*.sql"))):
    sql = open(path, encoding="utf-8").read()
    for part in re.split(r"insert into public\.protocols\s*\(", sql)[1:]:
        head = part.split("values", 1)
        if len(head) < 2:
            continue
        vals = strings(head[1][:1500])
        if len(vals) < 4 or vals[0] != "reva":
            continue
        category, name, description = vals[1], vals[2], vals[3]
        phases = []
        matches = list(re.finditer(r"insert into public\.protocol_phases\s*\([^)]*\)\s*values\s*\((.*?)\)\s*returning", part, flags=re.S))
        for i, m in enumerate(matches):
            v = strings(m.group(1))
            end = matches[i + 1].start() if i + 1 < len(matches) else len(part)
            phases.append({
                "name": v[0],
                "goal": v[1] if len(v) > 1 else "",
                "weeks": v[2] if len(v) > 2 else "",
                "forbidden": v[3:],
                "criteria": phase_criteria(part[m.end():end]),
            })
        if phases:
            plans[name] = {"name": name, "category": category, "description": description, "phases": phases}
    # Aanvullende criteria op bestaande fases (zoals migratie 107)
    for m in re.finditer(
        r"where p\.name = '((?:[^']|'')*)' and ph\.name = '((?:[^']|'')*)';\s*(insert into public\.protocol_phase_criteria[^;]*;)",
        sql,
        flags=re.S,
    ):
        crit = [c.replace("''", "'") for c in re.findall(r"\(v_phase,\s*'((?:[^']|'')*)'", m.group(3))]
        extra.append((m.group(1).replace("''", "'"), m.group(2).replace("''", "'"), crit))

for plan_name, phase_name, crit in extra:
    plan = plans.get(plan_name)
    if not plan:
        continue
    for phase in plan["phases"]:
        if phase["name"] == phase_name:
            phase["criteria"] += [c for c in crit if c not in phase["criteria"]]

data = sorted(plans.values(), key=lambda p: (p["category"], p["name"]))
with open(OUT, "w", encoding="utf-8") as fh:
    json.dump(data, fh, ensure_ascii=False, indent=1)
    fh.write("\n")
print(f"{len(data)} herstelplannen geschreven naar {os.path.relpath(OUT)}")
