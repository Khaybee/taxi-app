"use client";
import '../styles/globals.css'
import Image from 'next/image';
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const Header = () => {

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
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <a href="/">
                        <Image
                          src="/images/logo/SaveDrive_logo.jpg"
                          alt="icon01"
                          width={500}
                          height={500}
                          style={{ width: "80%", height: "80%" }}
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-7 col-lg-7">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-sub">
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/about">About</a>
                          </li>

                         
                          <li className="has-sub">
                            <a href="/service">Services</a>
                          </li>

                          <li className="has-sub">
                            <a href="/blog">Blog</a>
                          </li>

                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block text-right text-xl-right">
                    <div className="login mt-15 mb-15">
                      <ul>

                        <li>
                          <div className="second-header-btn">
                            <a href="/auth" className="btn ">
                              Book A Ride <i className="fa-sharp fa-light fa-arrow-up" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <a href="#" className="menu-tigger">
                            <i className="fa-sharp fa-regular fa-bars" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mobile-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="offcanvas-menu">
          <span className="menu-close">
            <i className="fas fa-times"></i>
          </span>

          <form
            role="search"
            method="get"
            id="searchform"
            className="searchform"
            action="http://wordpress.zcube.in/xconsulta/"
          >
            <input type="text" name="s" id="search" placeholder="Search" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="offcanvas-overlay"></div>
      </div>


      

      
      {/* <div className="body">
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
                <div className="row align-items-center">
                  <div className="col-xl-2 col-lg-2">
                    <div className="logo">
                      <a href="/">
                        <Image
                          src="/images/logo/SaveDrive_logo.jpg"
                          alt="icon01"
                          width={500}
                          height={500}
                          style={{ width: "80%", height: "80%" }}
                        />
                      </a>
                    </div>
                  </div>

                  <div className="col-xl-7 col-lg-7">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-sub">
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/about">About</a>
                          </li>

                         
                          <li className="has-sub">
                            <a href="/service">Services</a>
                          </li>

                          <li className="has-sub">
                            <a href="/blog">Blog</a>
                          </li>

                          <li>
                            <a href="/contact">Contact</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className="col-xl-3 col-lg-3 text-right d-none d-lg-block text-right text-xl-right">
                    <div className="login mt-15 mb-15">
                      <ul>

                        <li>
                          <div className="second-header-btn">
                            <a href="/auth" className="btn ">
                              Book A Ride <i className="fa-sharp fa-light fa-arrow-up" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <a href="#" className="menu-tigger">
                            <i className="fa-sharp fa-regular fa-bars" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="mobile-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="offcanvas-menu">
          <span className="menu-close">
            <i className="fas fa-times"></i>
          </span>

          <form
            role="search"
            method="get"
            id="searchform"
            className="searchform"
            action="http://wordpress.zcube.in/xconsulta/"
          >
            <input type="text" name="s" id="search" placeholder="Search" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>

          <div id="cssmenu3" className="menu-one-page-menu-container">
            <ul className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/auth">Home</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/auth">About Us</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/auth">Our Taxi</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/auth">Pricing</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/auth">Our Drivers</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/auth">Gallery</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/auth">Blog</a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/auth">Contact</a>
              </li>
            </ul>
          </div>

          <div id="cssmenu2" className="menu-one-page-menu-container">
            <ul className="menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/auth">
                  <span>+8 12 3456897</span>
                </a>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom">
                <a href="/auth">
                  <span>info@example.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="offcanvas-overlay"></div>
      </div> */}
    </>

  )
}


export default Header;