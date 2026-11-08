import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Oude blogartikelen uit de periode dat de site op patiënten gericht was. Ze staan nog in
  // de index van Google; een permanente doorverwijzing naar het best passende artikel
  // voorkomt 404-meldingen in Search Console en behoudt de opgebouwde waarde.
  async redirects() {
    return [
      { source: "/blog/medicatie-en-pijnregistratie-bijhouden", destination: "/blog/pijn-na-een-operatie", permanent: true },
      { source: "/blog/herstellen-na-knieoperatie-eerste-weken", destination: "/blog/pijn-na-een-operatie", permanent: true },
      { source: "/blog/wat-noteer-je-tijdens-revalidatie", destination: "/functies/voor-patienten", permanent: true },
      { source: "/blog/grip-op-je-herstel-7-tips", destination: "/blog/therapietrouw-verhogen-patienten-herkennen", permanent: true },
      { source: "/blog/sporthervatting-na-blessure", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
