import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "#f8f7f4" }}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
