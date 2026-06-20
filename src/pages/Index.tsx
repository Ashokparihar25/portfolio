import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import CaseStudies from "@/components/CaseStudies";
import CaseStudyEvidence from "@/components/CaseStudyEvidence";
import DataPipeline from "@/components/DataPipeline";
import Skills from "@/components/Skills";
import DashboardMockups from "@/components/DashboardMockups";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background mobile-app-shell">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <BusinessOutcomes />
      <CaseStudies />
      <CaseStudyEvidence />
      <DataPipeline />
      <Skills />
      <DashboardMockups />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
