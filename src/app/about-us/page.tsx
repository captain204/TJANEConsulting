import MissionSection from "@/components/About/About";
import AboutHeroPage from "@/components/About/AboutHero";
import Banner from "@/components/Banner";
import PartnerForSuccess from "@/components/PartnerSection";

const page = () => {
  return (
    <div>
      <AboutHeroPage />
      <MissionSection />
      <Banner />
      <PartnerForSuccess />
    </div>
  );
};

export default page;
