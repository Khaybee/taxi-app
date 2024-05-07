"use client";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import LoggedInBanner from "../components/loggedInHero";
import InputAddress from "./component/inputAdd";

const AddressForm = () => {

  return (
    <>
    <LoggedInBanner question="Ready for your ride?" command="Enter your destination below"/>
    <InputAddress />
    
  
    </>
  );
};

export default AddressForm;
