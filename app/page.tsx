import { HomePage } from "@/components/HomePage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { homeFaq } from "@/lib/home-faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.reva-app.nl/#faq",
  mainEntity: homeFaq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <SiteLayout>
        <HomePage />
      </SiteLayout>
    </>
  );
}
