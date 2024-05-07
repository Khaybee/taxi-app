

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const [activeMenuItem, setActiveMenuItem] = useState('');
//   const [isButtonClicked, setIsButtonClicked] = useState(false);

//   const handleMenuItemClick = (menuItem) => {
//     setActiveMenuItem(menuItem);
//   };

//   const handleButtonClick = () => {
//     setIsButtonClicked(!isButtonClicked);
//   };

//     const [isFixed, setIsFixed] = useState(false);

//   const handleScroll = () => {
    
//     const isScrolled = window.scrollY > 80;
//     setIsFixed(isScrolled);
//   };

//   useEffect(() => {
    
//     window.addEventListener('scroll', handleScroll);

//     return () => {
     
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className='cont-navLogged'>
//     <nav className={`navbar navbar-expand-md navbar-light bg-light ${isFixed ? 'fixed-nav' : ''}`}>
//       <div className="container-fluid">
//         <Link href="/" className="navbar-brand header col-xl-2 d-none d-xl-block z-1">
//           <div className='logos'>
//           <Image
//                 src="/images/logo/SaveDrive_logo.jpg"
//                 alt="icon01"
//                 width={500}
//                 height={500}
//                 style={{ width: "80%", height: "80%" }}
//               />
//           </div>
//         </Link>

//         <button
//           className="navbar-toggler text-right"
//           type="button"
//           aria-controls="navbarSupportedContent"
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className={`collapse col-xl-7 navbar-collapse ${isOpen ? 'show' : ''}`}>
//           <ul className="navbar-nav me-auto">
//             <li className="nav-item nav-logged-li">
//               <Link href="/" className={`nav-link ${activeMenuItem === 'link1' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link1')}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item nav-logged-li">
//               <Link href="#" className={`nav-link ${activeMenuItem === 'link2' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link2')}>
//                 About
//               </Link>
//             </li>
//             <li className="nav-item nav-logged-li">
//               <Link href="/pricing-page" className={`nav-link ${activeMenuItem === 'link3' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link3')}>
//               Services
//               </Link>
//             </li>
//             <li className="nav-item nav-logged-li">
//               <Link href="/pricing-page" className={`nav-link ${activeMenuItem === 'link3' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link3')}>
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           <Link href="/login" className="btn btn-primary ms-0">
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </nav>
//     </div>

//     <div className="container col-xl-10 col-xxl-8 px-4 py-5">
//         <div className="row align-items-center g-lg-5 py-5">
//           <div className="col-lg-7 text-center text-lg-start">
//             <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
//               Leave a Message
//             </h1>
//             <p className="col-lg-12 fs-5">
//               We'd love to hear from you! If you have questions, suggestions, or
//               just want to say hello, feel free to reach out. You can contact us
//               via email or phone, on social media or simply type a message over here. We're here
//               to help and look forward to hearing from you.
//             </p>
            
//           </div>
//           <div className="col-md-10 mx-auto col-lg-5">
//             <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
//               <div className="form-floating mb-3">
//                 <input
//                   type="email"
//                   className=" p-3 w-100"
//                   id="floatingInput"
//                   placeholder="Email address"
//                 />
//                 <label for="floatingInput"></label>
//               </div>
//               <div className="form-floating mb-3">
//                 {/* <input type="text" className="form-control" id="floatingPassword" placeholder="" /> */}
//                 <textarea
//                   textarea
//                   id="w3review"
//                   name="message"
//                   rows="10"
//                   cols="36"
//                   className=" p-3" placeholder="Write message"
//                 >
                
//                 </textarea>
//               </div>

//               <button
//                 className="w-100 btn btn-lg btn-primary mt-10"
//                 type="submit"
//               >
//                 SEND
//               </button>
//               <hr className="my-4" />
//             </form>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>

    
//   );
// };


// "use client"

// import '../styles/navBar.css'
// import Image from 'next/image';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Footer from './footer';


// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const [activeMenuItem, setActiveMenuItem] = useState('');
//   const [isButtonClicked, setIsButtonClicked] = useState(false);

//   const handleMenuItemClick = (menuItem) => {
//     setActiveMenuItem(menuItem);
//   };

//   const handleButtonClick = () => {
//     setIsButtonClicked(!isButtonClicked);
//   };

//     const [isFixed, setIsFixed] = useState(false);

//   const handleScroll = () => {
    
//     const isScrolled = window.scrollY > 80;
//     setIsFixed(isScrolled);
//   };

//   useEffect(() => {
    
//     window.addEventListener('scroll', handleScroll);

//     return () => {
     
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <div className='cont-navLogged'>
//     <nav className={`navbar navbar-expand-md navbar-light bg-light ${isFixed ? 'fixed-nav' : ''}`}>
//       <div className="container-fluid">
//         <Link href="/" className="navbar-brand header col-xl-2 d-none d-xl-block z-1">
//           <div className='logos'>
//           <Image
//                 src="/images/logo/SaveDrive_logo.jpg"
//                 alt="icon01"
//                 width={500}
//                 height={500}
//                 style={{ width: "80%", height: "80%" }}
//               />
//           </div>
//         </Link>

//         <button
//           className="navbar-toggler text-right"
//           type="button"
//           aria-controls="navbarSupportedContent"
//           aria-expanded={isOpen}
//           aria-label="Toggle navigation"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className={`collapse col-xl-7 navbar-collapse ${isOpen ? 'show' : ''}`}>
//           <ul className="navbar-nav me-auto">
//             <li className="nav-item nav-logged-li">
//               <Link href="/" className={`nav-link ${activeMenuItem === 'link1' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link1')}>
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item nav-logged-li">
//               <Link href="/about" className={`nav-link ${activeMenuItem === 'link2' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link2')}>
//                 About
//               </Link>
//             </li>
//             <li className="nav-item nav-logged-li">
//               <Link href="/service" className={`nav-link ${activeMenuItem === 'link3' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link3')}>
//               Services
//               </Link>
//             </li>
//             <li className="nav-item nav-logged-li">
//               <Link href="/contact" className={`nav-link ${activeMenuItem === 'link3' ? 'active' : ''}`} onClick={() => handleMenuItemClick('link3')}>
//                 Contact
//               </Link>
//             </li>
//           </ul>

//           <Link href="/auth" className="btn btn-primary ms-0">
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </nav>
//     </div>
//     </>

    
//   );
// };

// export default Header;

// export default Navbar;

import '../styles/globals.css'
// import Image from 'next/image';
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

                      </ul>
                    </div>
                  </div>



                  <div className="col-12">
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

    </>

  )
}


export default Header;
