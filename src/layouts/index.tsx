import { Header } from "./header";
import { Footer } from "./footer";
import { Inter } from "next/font/google";
import { LayoutInterface } from "@/interface";
import { Section, SectionTitle } from "./section";
import { LoadingWrapper } from "./loading";
import { useLoadingContext } from "@/context";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export function Layout({ children }: LayoutInterface) {
  const { isLoading } = useLoadingContext();

  return (
    <div id="root" className={inter.className}>
      <Header />
      <main className="main flex-auto">
        <LoadingWrapper loading={isLoading}>{children}</LoadingWrapper>
      </main>
      <Footer />
    </div>
  );
}

export { Section, SectionTitle, LoadingWrapper };
