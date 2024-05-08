"use client";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import LoggedInBanner from "../components/loggedInHero";
import AvailableDrivers from "./components/taxiBrands";
import Footer from "../components/footer";


const ComparePrices = () => {

  return (
    <>
    <div className=" bg-body-secondary">
    <LoggedInBanner question="Ready for your ride?" command="Choose the most affordable price" />
   <AvailableDrivers />

   <Footer />
    </div>
  
    </>
  );
};

export default ComparePrices;
