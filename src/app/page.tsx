import FAQAccordion from "@/components/Faq";
import Footer from "@/components/Footer";
import HISPromoSection from "@/components/HISPromoSection";
// import NewsletterSubscribe from "@/components/NewsletterSubscribe";
import PartnerSection from "@/components/PartnerSection";
import ServicesSection from "@/components/Services";
// import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BottomTabs from "@/components/BottomTabs";

const page = () => {
  return (
    <main className="overflow-hidden">
      {/* <Navbar/> */}
      <HeroSection />
      <ServicesSection />
      <HISPromoSection />
      <FAQAccordion />
      <PartnerSection />
      {/* <NewsletterSubscribe /> */}
      {/* <Footer /> */}
      {/* <BottomTabs /> */}
    </main>
  );
};

export default page;
