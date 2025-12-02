import HeroSection from "@/components/PagesHero";

export default function CredentialingHeroPage() {
  return (
    <main>
      <HeroSection
        breadcrumb="Credentialing Services"
        title="Professional Credentialing Support"
        subtitle="Streamlined, Reliable, and Compliance-Ready Credentialing Solutions for Healthcare Providers"
        backgroundImage="/credentialing-bg.jpg" 
        // 👉 replace with your actual hero image path
      />
    </main>
  );
}
