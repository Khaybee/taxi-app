"use client";
import "./styles/globals.css";
import Header from "./components/header";
import Link from "next/link";
import Hero from "./components/hero";
import AboutUs from "./components/aboutUs";
import Image from "next/image";
import Footer from "./components/footer";
import BlogSection from "./components/blogSection";
import StepSection from "./components/stepsArea";
import BrandsSection from "./components/diffBrands";
import HowItWorks from "./components/howItWorks";
import BookingSection from "./components/bookingSection";
import CallToAction from "./components/callToAction";
import SecondSection from "./components/secondSection";

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        {/* <SecondSection /> */}
        <AboutUs />
        {/* <BookingSection /> */}
        <HowItWorks />
        <BrandsSection />
       <CallToAction />
        <StepSection />
        
        {/* <BlogSection /> */}
       
      </main>
      <Footer />
    </>
  );
};
export default Home;
