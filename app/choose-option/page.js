"use client";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import LoggedInBanner from "../components/loggedInHero";
import AvailableDrivers from "./components/available-drivers";
import Footer from "../components/footer";


const RideOptions = () => {

  return (
    <>
    <div className=" bg-body-secondary">
    <LoggedInBanner question="Ready for your ride?" command="Choose the best option for you" />
   <AvailableDrivers />

   <Footer />
    </div>
  
    </>
  );
};

export default RideOptions;
