import Header from "./Header";
import Hero from "./Hero";
import IntroSection from "./IntroSection";
import AdvantagesSection from "./AdvantagesSection";
import MenuExampleSection from "./MenuExampleSection";
import ReviewsSection from "./ReviewsSection";
import PriceDeliverySection from "./PriceDeliverySection";
import FactsSection from "./FactsSection";
import HowItWorksSection from "./HowItWorksSection";
import Footer from "./Footer";
import ActionButtonsSection from "./ActionButtonsSection";

export default function Desktop() {
  return (
    <div className="bg-[#fffefb] relative min-h-screen w-full font-sans">
      <Header />
      <Hero />
      <IntroSection />
      <ActionButtonsSection />
      <FactsSection />
      <HowItWorksSection />
      <ActionButtonsSection />
      <AdvantagesSection />
      <MenuExampleSection />
      <ActionButtonsSection />
      <ReviewsSection />
      <PriceDeliverySection />
      <ActionButtonsSection />
      <Footer />
    </div>
  );
} 