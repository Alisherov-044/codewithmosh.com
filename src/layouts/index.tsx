import { Header } from "./header";
import { Footer } from "./footer";
import { Inter } from "next/font/google";
import { LayoutInterface } from "@/interface";
import { Section, SectionTitle } from "./section";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export function Layout({ children }: LayoutInterface) {
  return (
    <div id="root" className={inter.className}>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export { Section, SectionTitle };
