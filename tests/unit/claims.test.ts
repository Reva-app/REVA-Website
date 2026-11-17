import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// Claims die REVA (nog) niet kan onderbouwen, mogen nergens op de site staan.
// NEN 7513: REVA heeft een activiteitenlog, maar is niet getoetst aan de norm.
const forbidden = [/NEN\s*7513/i];

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? files(p) : /\.(tsx?|json|txt|md)$/.test(name) ? [p] : [];
  });
}

test("geen niet-onderbouwde claims in de broncode en llms.txt", () => {
  const root = fileURLToPath(new URL("../../", import.meta.url));
  const all = ["app", "components", "lib"].flatMap((d) => files(join(root, d))).concat(join(root, "public/llms.txt"));
  for (const f of all) {
    const text = readFileSync(f, "utf8");
    for (const re of forbidden) assert.ok(!re.test(text), `${f.replace(root, "")} bevat ${re}`);
  }
});
