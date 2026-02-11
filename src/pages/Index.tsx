import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import OriginSection from "@/components/OriginSection";
import DonationSection from "@/components/DonationSection";
import GratitudeSection from "@/components/GratitudeSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ArchitectureSection />
      <OriginSection />
      <DonationSection />
      <GratitudeSection />
      <Footer />
    </div>
  );
};

export default Index;
