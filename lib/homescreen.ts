// Stappen om REVA als app op het beginscherm te zetten. Gedeeld door de animatie
// (components/HomescreenGuide.tsx) en het HowTo-schema op /documentatie.

export type Platform = "ios" | "android";

export const homescreenSteps: Record<Platform, { title: string; text: string }[]> = {
  ios: [
    { title: "Open REVA in Safari", text: "Ga in Safari naar dashboard.reva-app.nl en log in." },
    { title: "Tik op het deelicoon", text: "Onderin het scherm: het vierkantje met de pijl omhoog. Zie je het niet, tik dan eerst op de drie puntjes." },
    { title: "Kies Zet op beginscherm", text: "Scrol in het menu naar beneden en tik op Zet op beginscherm." },
    { title: "Tik op Voeg toe", text: "Rechtsboven bevestig je met Voeg toe. De naam REVA staat al ingevuld." },
    { title: "Klaar", text: "REVA staat nu als app op je beginscherm en opent met één tik." },
  ],
  android: [
    { title: "Open REVA in Chrome", text: "Ga in Chrome naar dashboard.reva-app.nl en log in." },
    { title: "Tik op de drie puntjes", text: "Rechtsboven in Chrome staat het menu met de drie puntjes." },
    { title: "Kies Toevoegen aan startscherm", text: "Tik op Toevoegen aan startscherm. Op sommige telefoons heet dit App installeren." },
    { title: "Tik op Installeren", text: "Bevestig met Installeren of Toevoegen." },
    { title: "Klaar", text: "REVA staat nu als app op je startscherm en opent met één tik." },
  ],
};
