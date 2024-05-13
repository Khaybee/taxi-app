"use client";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import InputAddress from "./component/inputAdd";
import Footer from "../components/footer";
import LoggedInNav from "../components/loggedInNav";

const AddressPage = () => {

  return (
    <>
         <LoggedInNav />

        <InputAddress />
    </>
);
};

export default AddressPage;
