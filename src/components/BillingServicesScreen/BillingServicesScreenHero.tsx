import HeroSection from "@/components/PagesHero";

export default function BillingServicesHeroPage() {
  return (
    <main>
      <HeroSection
        breadcrumb="Billing Services"
        title="Reliable Billing & Practice Support"
        subtitle="Efficient, accurate, and tailored billing solutions designed to strengthen your operations."
        backgroundImage="/billing-services-bg.jpg" 
        // 👉 replace this with your billing hero image path
      />
    </main>
  );
}
