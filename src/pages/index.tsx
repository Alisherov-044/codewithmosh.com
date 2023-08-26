import { Layout } from "@/layouts";
import {
  AboutSection,
  CoursesSection,
  FeaturesSection,
  HeroSection,
} from "./home";

export default function Home() {
  return (
    <Layout>
      <div className="p-4">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <CoursesSection />
      </div>
    </Layout>
  );
}
