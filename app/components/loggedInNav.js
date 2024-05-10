"use client";
// import '../styles/globals.css'
import "../styles/navBar.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const LoggedInNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 80;
    setIsFixed(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`px-3 border-bottom ${isFixed ? "fixed-nav" : ""}`}
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
            <a
              href="/"
              className="  d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            >
              <div className="logos-nav w-75">
                <Image
                  src="/images/logo/SaveDrive_logo.jpg"
                  alt="icon01"
                  width={200}
                  height={200}
                  style={{ width: "80%", height: "80%" }}
                  className=""
                />
              </div>
            </a>
            <ul className="nav col-0 col-lg-auto me-lg-auto mb-2 justify-content-lg-center mb-md-0 ">
              <li>
                <a
                  href="/"
                  className="nav-link px-2 d-lg-inline-block link-secondary nav-logged-li ms-lg-0"
                >
                  Home
                </a>
              </li>
            </ul>

            <button
              className="navbar-toggler text-right"
              type="button"
              aria-controls="navbarSupportedContent"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="dropdown text-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="/images/team/team01.png"
                  alt="profile picture"
                  width="50"
                  height="50"
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item fs-5 drop-li" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-5 drop-li" href="#">
                    My Rides
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-5 drop-li" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item fs-5 drop-li" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LoggedInNav;
