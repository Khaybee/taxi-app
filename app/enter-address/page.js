"use client";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import LoggedInBanner from "../components/loggedInHero";
import InputAddress from "./component/inputAdd";
import Footer from "../components/footer";

const AddressForm = () => {

  return (
    <>
    <div className=" bg-body-secondary">

  
    <LoggedInBanner question="Ready for your ride?" command="Enter your destination below"/>
    <InputAddress />

    <Footer />
    
    </div>
    </>
  );
};

export default AddressForm;
