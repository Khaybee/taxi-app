"use client";
import Link from "next/link";
import LoggedInNav from "./loggedInNav";
import "../styles/loggedHero.css";
import { useEffect, useState } from "react";

const LoggedInBanner = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <>
      <div className="body">
        <section id="home" className="slider-area fix p-relative ">
          <div className="slider-active" style={{ background: "#141b22" }}>
            <LoggedInNav />

            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
              <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                <p className="lead fw-bold fs-4 hero-question">
                  {props.question}
                </p>
                <span className=" fw-bold lh-1 text-white hero-text">
                  {props.command}
                </span>
                <span className=" ms-4">
                  <img
                    src="/images/banner/swooping-arrow-circle.png"
                    alt=""
                    width="150px"
                  />
                </span>
              </div>
              <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                <img
                  className="rounded-lg-3"
                  src="bootstrap-docs.png"
                  alt=""
                  width="720"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoggedInBanner;
