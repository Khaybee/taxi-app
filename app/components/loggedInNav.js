"use client";
// import '../styles/globals.css'
import "../styles/navBar.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'
import { signOut } from "next-auth/react";

const LoggedInNav = () => {
  const router = useRouter();

  const logout = () => {
    signOut()
  }

  const handleHomeClick = (event) => {
    event.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: "This action will log you out",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
      if (result.isConfirmed) {
        logout();
        window.location.href = '/'; // Navigate to Home after logout
        
      }
    });
  };

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

  return (
    <>
      <header
        className={`px-3 border-bottom fixed-nav mb-5`}
      >
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start">
            <a
              href="#"
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
              <li >
                <a
                  href="#"
                  className="nav-link px-2 d-lg-inline-block link-secondary nav-logged-li ms-lg-0"
                  onClick={handleHomeClick}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dash/enter-address"
                  className="nav-link px-2 d-lg-inline-block link-secondary nav-logged-li ms-lg-3"
                >
                  Book Ride
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
                  <a className="dropdown-item fs-5 drop-li" href="/dash/my-profile">
                    My profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item fs-5 drop-li" href="/dash/my-rides">
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
                  <a className="dropdown-item fs-5 drop-li" onClick={logout}>
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
