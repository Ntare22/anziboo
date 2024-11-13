import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductsSection";
import ProjectSection from "./components/ProjectSection";
import WhoWeAreSection from "./components/WhoWeAreSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import PartnersSection from "./components/PartnersSection";
import HappyClients from "./components/HappyClients";

export default function Home() {
  return (
    <div>
      <main className="h-full flex flex-col">
        <NavBar />
        <HeroSection />
        <PartnersSection />
        <ProductsSection />
        <ProjectSection />
        <HappyClients />
        <WhoWeAreSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
