import { Layout } from "@/layouts";
import { AboutSection, FeaturesSection, HeroSection } from "./Home";

export default function Home() {
  return (
    <Layout>
      <div className="p-4">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
      </div>
    </Layout>
  );
}
