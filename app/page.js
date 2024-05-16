import "./styles/globals.css";
import Header from "./components/header";
import Hero from "./components/hero";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";
import StepSection from "./components/stepsArea";
import BrandsSection from "./components/diffBrands";
import HowItWorks from "./components/howItWorks";
import CallToAction from "./components/callToAction";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <AboutUs />
        <HowItWorks />
        <BrandsSection />
        <CallToAction />
        <StepSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
