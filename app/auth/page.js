"use client";

import Head from "next/head";
import Link from "next/link";
import "../styles/auth.css";
import Form from "./components/form";
import sendData from "./components/requestAPI"




const Signup = async () => {

  const handleFormSubmit = (formData) => {
    const result = sendData(formData); 

    return result;
  };

  // const data = await signUp()
  // const signUpData = data.

  return (
    <>
      <Form onSubmit={handleFormSubmit} />
    </>
  );
}

export default Signup;