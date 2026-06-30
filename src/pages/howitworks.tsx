import NavBar from "../components/navbar";
import Footer from "../components/footer/footer";
import HowItWorksHero from "../components/HowItWorks/HowItWorksHero";
import ProcessSteps from "../components/HowItWorks/ProcessSteps";
import TrustHighlights from "../components/HowItWorks/TrustHighlights";
import HowItWorksCTA from "../components/HowItWorks/HowItWorksCTA";
import  "./howitworks.css";

export default function HowItWorks() {
  return (
    <div className="page">
      <NavBar />
      <main>
        <HowItWorksHero />
        <ProcessSteps />
        <TrustHighlights />
        <HowItWorksCTA />
      </main>
      <Footer />
    </div>
  );
}