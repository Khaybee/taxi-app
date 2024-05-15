"use client";
import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import InputAddress from "./component/inputAdd";

import LoggedInNav from "../components/loggedInNav";

const AddressPage = (props) => {

 

  return (
    <>
         <LoggedInNav />

        <InputAddress  />
    </>
);
};

export default AddressPage;
