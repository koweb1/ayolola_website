import NavBar from "../components/navbar" 
import HeroSection from "../components/service/HeroSection";
import ServiceCategories from "../components/service/ServiceCategories";
import WhyChooseUs from "../components/service/WhyChooseUs";
import ServiceProcess from "../components/service/ServiceProcess";
import BeforeAfterSection from "../components/service/BeforeAfterSection";
import Testimonials from "../components/service/Testimonials";
import FAQSection from "../components/service/FAQSection";
import CTASection from "../components/service/CTASection";

export default function ServicesPage() {
  return (
    <div className="services-page">
      <NavBar />
      <HeroSection />
      <ServiceCategories />
      <WhyChooseUs />
      <ServiceProcess />
      <BeforeAfterSection />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </div>
  );
}
