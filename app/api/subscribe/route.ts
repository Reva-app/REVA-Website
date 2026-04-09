import { NextRequest, NextResponse } from "next/server";

const KLAVIYO_PRIVATE_KEY = process.env.KLAVIYO_PRIVATE_KEY;
const KLAVIYO_LIST_ID = process.env.KLAVIYO_LIST_ID;
const KLAVIYO_REVISION = "2024-10-15";

export async function POST(request: NextRequest) {
  if (!KLAVIYO_PRIVATE_KEY || !KLAVIYO_LIST_ID) {
    console.error("Klaviyo env vars niet geconfigureerd.");
    return NextResponse.json(
      { error: "Server configuratiefout." },
      { status: 500 }
    );
  }

  let email: string;
  try {
    const body = await request.json();
    email = (body.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Ongeldig verzoek." }, { status: 400 });
  }

  // Basisvalidatie server-side
  if (!email || !email.includes("@") || !email.includes(".")) {
    return NextResponse.json(
      { error: "Voer een geldig e-mailadres in." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/",
      {
        method: "POST",
        headers: {
          Authorization: `Klaviyo-API-Key ${KLAVIYO_PRIVATE_KEY}`,
          revision: KLAVIYO_REVISION,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              profiles: {
                data: [
                  {
                    type: "profile",
                    attributes: {
                      email,
                      subscriptions: {
                        email: {
                          marketing: {
                            consent: "SUBSCRIBED",
                          },
                        },
                      },
                    },
                  },
                ],
              },
            },
            relationships: {
              list: {
                data: {
                  type: "list",
                  id: KLAVIYO_LIST_ID,
                },
              },
            },
          },
        }),
      }
    );

    // Klaviyo geeft 202 Accepted terug bij succes (async verwerking)
    if (response.status === 202) {
      return NextResponse.json({ success: true });
    }

    // Fout van Klaviyo — log details server-side, stuur generieke melding
    const errorBody = await response.json().catch(() => null);
    console.error("Klaviyo fout:", response.status, errorBody);

    return NextResponse.json(
      { error: "Er ging iets mis. Probeer het later opnieuw." },
      { status: 502 }
    );
  } catch (err) {
    console.error("Klaviyo fetch fout:", err);
    return NextResponse.json(
      { error: "Geen verbinding mogelijk. Probeer het later opnieuw." },
      { status: 503 }
    );
  }
}
