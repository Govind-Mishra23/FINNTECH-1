import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Team from "../components/Team";
import WhyChooseUs from "../components/WhyChooseUs";
import EMICalculator from "../components/EMICalculator";

const Home = ({ onApplyClick, navigateTo }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        onApplyClick={onApplyClick}
        navigateTo={navigateTo}
        currentPage="home"
      />
      <Hero onApplyClick={onApplyClick} />
      <Services onApplyClick={onApplyClick} />
      <EMICalculator />
      <WhyChooseUs />
      <Team />
      <CTA onApplyClick={onApplyClick} />
      <Footer />
    </div>
  );
};

export default Home;
