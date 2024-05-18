"use client";
// import '../styles/globals.css'
import '../styles/navBar.css'
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { getServerSession } from 'next-auth/next';

const Header = () => {


  const [isOpen, setIsOpen] = useState(false);

  const [activeMenuItem, setActiveMenuItem] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

const checkState = async () => {
  const session = await getServerSession()

  if (session.accessToken !== null && session.accessToken !== 0){
    setIsLoggedIn(true)
    console.log(session);
    
  }
}

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

    window.addEventListener('scroll', handleScroll);

    return () => {

      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="body">
        <header className="header-area header">
          <div className="header-top-two d-none d-md-block">
            <div className="container-fluid">
              <div className="second-header">
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2" />
                </div>
              </div>
            </div>
          </div>
          <div id="header-sticky" className="menu-area mt-5">
            <div className="container-fluid">
              <div className="second-menu">
                <nav className={`navbar navbar-expand-md navbar-light bg-light ${isFixed ? 'fixed-nav' : ''}`}>
                  <div className="container-fluid justify-content-end ms-md-5">
                    <Link href="/" className="navbar-brand header col-xl-2 d-none d-xl-block z-1">
                      <div className='logos'>
                        <Image
                          src="/images/logo/SaveDrive_logo.jpg"
                          alt="icon01"
                          width={500}
                          height={500}
                          style={{ width: "80%", height: "80%" }}
                        />
                      </div>
                    </Link>

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

                    <div className={`collapse col-xl-7 navbar-collapse ${isOpen ? 'show' : ''}`}>
                      <ul className="navbar-nav me-auto">
                        <li className="nav-item nav-logged-li">
                          <Link href="/" className={`nav-link ${activeMenuItem === 'link1' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link1')}>
                            Home
                          </Link>
                        </li>
                        <li className="nav-item nav-logged-li">
                          <Link href="/about" className={`nav-link ${activeMenuItem === 'link2' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link2')}>
                            About
                          </Link>
                        </li>
                        <li className="nav-item nav-logged-li">
                          <Link href="/service" className={`nav-link ${activeMenuItem === 'link3' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link3')}>
                            Services
                          </Link>
                        </li>
                        <li className="nav-item nav-logged-li">
                          <Link href="/contact" className={`nav-link ${activeMenuItem === 'link3' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link3')}>
                            Contact
                          </Link>
                        </li>
                      </ul>

                      <Link href="/auth" className="btn login-btn btn-primary ms-0 fs-5">
                      {isLoggedIn ? "Log Out" : "Login"}
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>





    </>

  )
}


export default Header;