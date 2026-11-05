// HTML-opmaak voor de interne notificatiemail van de contact- en demoformulieren.
// E-mailclients ondersteunen geen moderne CSS: daarom tabellen en inline styles.

import { EMAIL_LOGO_CID } from "@/lib/email-logo";

export type ContactEmailRow = { label: string; value: string; href?: string };
export type ContactEmailSection = { title: string; rows: ContactEmailRow[] };

type ContactEmailOptions = {
  badge: string;
  title: string;
  intro: string;
  sections: ContactEmailSection[];
  message?: { title: string; value: string };
  replyEmail: string;
  phone?: string;
  source: string;
};

// Geist laadt in Apple Mail en iOS; overal anders valt het terug op de systeemletter
const FONT =
  "Geist, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif";

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("nl-NL", {
    timeZone: "Europe/Amsterdam",
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function button(href: string, label: string, variant: "primary" | "secondary") {
  const styles =
    variant === "primary"
      ? "background:#e8632a;color:#ffffff;border:1px solid #e8632a;"
      : "background:#ffffff;color:#374151;border:1px solid #e8e5df;";
  return `<a href="${href}" style="${styles}display:inline-block;padding:12px 22px;border-radius:8px;font-family:${FONT};font-size:14px;font-weight:600;line-height:1;text-decoration:none;">${label}</a>`;
}

function sectionTitle(title: string) {
  return `<div style="font-family:${FONT};font-size:11px;line-height:16px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#9ca3af;padding:0 0 10px 2px;">${escapeHtml(title)}</div>`;
}

function renderSection({ title, rows }: ContactEmailSection) {
  if (rows.length === 0) return "";
  const body = rows
    .map(({ label, value, href }, i) => {
      const pad = i === rows.length - 1 ? "0" : "0 0 12px 0";
      const content = href
        ? `<a href="${href}" style="color:#e8632a;text-decoration:none;">${escapeHtml(value)}</a>`
        : escapeHtml(value);
      return `<tr>
                      <td width="38%" valign="top" style="padding:${pad};font-family:${FONT};font-size:13px;line-height:21px;color:#6b7280;">${escapeHtml(label)}</td>
                      <td valign="top" style="padding:${pad};font-family:${FONT};font-size:14px;line-height:21px;color:#1a1a1a;font-weight:500;">${content}</td>
                    </tr>`;
    })
    .join("");

  return `
          <tr>
            <td style="padding:0 32px 24px 32px;">
              ${sectionTitle(title)}
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8f7f4;border-radius:12px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                    ${body}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`;
}

export function renderContactEmail({
  badge,
  title,
  intro,
  sections,
  message,
  replyEmail,
  phone,
  source,
}: ContactEmailOptions) {
  const receivedAt = formatDate(new Date());

  const messageBlock = message
    ? `
          <tr>
            <td style="padding:0 32px 24px 32px;">
              ${sectionTitle(message.title)}
              <div style="border:1px solid #e8e5df;border-radius:12px;padding:16px 18px;font-family:${FONT};font-size:15px;line-height:24px;color:#1a1a1a;white-space:pre-wrap;">${escapeHtml(message.value)}</div>
            </td>
          </tr>`
    : "";

  const buttons = [
    button(`mailto:${encodeURIComponent(replyEmail)}`, "Beantwoorden", "primary"),
    phone ? button(telHref(phone), `Bel ${escapeHtml(phone)}`, "secondary") : "",
  ]
    .filter(Boolean)
    .map((b) => `<td style="padding:0 8px 8px 0;">${b}</td>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>${escapeHtml(title)}</title>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:0;background:#f8f7f4;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(intro)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f8f7f4;">
    <tr>
      <td align="center" style="padding:40px 16px 48px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;">

          <!-- Logo -->
          <tr>
            <td style="padding:0 4px 28px 4px;">
              <img src="cid:${EMAIL_LOGO_CID}" width="94" height="32" alt="REVA" style="display:block;width:94px;height:32px;border:0;outline:none;font-family:${FONT};font-size:18px;font-weight:700;color:#1a1a1a;">
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#ffffff;border:1px solid #e8e5df;border-radius:16px;box-shadow:0 1px 3px rgba(0,0,0,0.04);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding:32px 32px 0 32px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td valign="middle">
                          <span style="display:inline-block;background:#fff3ee;color:#e8632a;border-radius:9999px;padding:5px 12px;font-family:${FONT};font-size:12px;line-height:14px;font-weight:600;">${escapeHtml(badge)}</span>
                        </td>
                        <td valign="middle" align="right" style="font-family:${FONT};font-size:12px;line-height:14px;color:#9ca3af;">${escapeHtml(receivedAt)}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 32px 6px 32px;font-family:${FONT};font-size:26px;line-height:32px;font-weight:600;color:#1a1a1a;letter-spacing:-0.5px;">${escapeHtml(title)}</td>
                </tr>
                <tr>
                  <td style="padding:0 32px 28px 32px;font-family:${FONT};font-size:15px;line-height:23px;color:#6b7280;">${escapeHtml(intro)}</td>
                </tr>
                ${sections.map(renderSection).join("")}${messageBlock}
                <tr>
                  <td style="padding:4px 32px 28px 32px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>${buttons}</tr></table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 4px 0 4px;font-family:${FONT};font-size:12px;line-height:19px;color:#9ca3af;">
              Verstuurd via ${escapeHtml(source)} op www.reva-app.nl.<br>
              Beantwoord je deze mail, dan gaat je reactie direct naar ${escapeHtml(replyEmail)}.
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
