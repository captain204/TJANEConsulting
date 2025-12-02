import HowHISCanHelp from "@/components/Services/HowHISCanHelp";
import ServiceHeroPage from "./Hero";
import PartnerForSuccess from "@/components/PartnerSection";
import ServicesSection from "@/components/Services";
import Banner from "@/components/Banner";

const page = () => {
  return (
    <div>
      <ServiceHeroPage />
      {/* <PracticeServices /> */}
      <ServicesSection />
      <HowHISCanHelp />
      <Banner />
      <PartnerForSuccess />

      {/* <HISPromoSection /> */}
    </div>
  );
};

export default page;
