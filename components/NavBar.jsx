"use client";

import "@styles/nav-bar.css";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useFixedNavbar from "@hooks/useFixedNavbar";
import { useActivePath } from "@hooks/useActivePath";

const NavBar = () => {
  const [openNav, setOpenNav] = useState(true);
  const [openSub, setOpenSub] = useState(true);

  const isFixed = useFixedNavbar(
    typeof window !== "undefined" ? window.innerHeight * 0.06 : 0
  );

  const handleClick = (event) => {
    setOpenSub((current) => !current);
  };

  const navLinks = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT US",
      link: "/about-us",
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ];

  return (
    <div className={`nav-bar-ctn ${isFixed ? "fixedPosition" : ""}`}>
      <div className={`nav-bar-up ${isFixed ? "hideNav" : ""}`}>
        <ul className="contact-activity-ctn">
          <li>+(234) 0700 257 4233</li>
          <li> info@alphadenholding.com</li>
          <li> Mon - Sat 8:00 - 17:30, Sunday - CLOSED</li>
        </ul>
        <ul className="social-media-ctn">
          <li className="social-media-list">
            <Link className="social-media-link" href="twitter.com/">
              <Image
                src="/assets/icons/facebook.svg"
                width={20}
                height={12}
                alt="Alphaden facebook"
              />
            </Link>
          </li>
          <li className="social-media-list">
            <Link className="social-media-link" href="twitter.com/">
              <Image
                src="/assets/icons/twitter.svg"
                width={20}
                height={12}
                alt="Alphaden twitter"
              />
            </Link>
          </li>
          <li className="social-media-list">
            <Link className="social-media-link" href="twitter.com/">
              <Image
                src="/assets/icons/instagram.svg"
                width={20}
                height={12}
                alt="alphaden intagram"
              />
            </Link>
          </li>
          <li className="social-media-list">
            <Link className="social-media-link" href="twitter.com/">
              <Image
                src="/assets/icons/linkedin.svg"
                width={20}
                height={12}
                alt="alphaden linkedin"
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-bar-down">
        <div className="home-icon-ctn">
          <Link href="/">
            <Image
              src="/assets/images/alphaden.png"
              alt="Alphaden group"
              width={100}
              height={30}
              className="logo"
            />
          </Link>
        </div>
        <div className="pages-ctn">
          {navLinks.map(({ name, link }) => {
            const isActive = useActivePath(link);
            return (
              <Link
                key={name}
                href={link}
                className={isActive ? "active nav-link" : "nav-link"}
              >
                {name}
              </Link>
            );
          })}
          <div className="subsidaries-ctn">
            <p>
              INVESTMENTS{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </p>
            <ul className="group-ctn">
              <li>
                <a
                  href="https://alphadenenergy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alphaden Energy
                </a>
              </li>
              <li>
                <a
                  href="https://alphadenenergy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alphaden Gas
                </a>
              </li>

              <li>
                <a
                  href="https://alphadenenergy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Alphaden Technologies
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pages-ctn-mobile">
          {openNav && (
            <div className="menu-icon-ctn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
                onClick={(e) => setOpenNav(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          )}
        </div>
        <div className={openNav ? "pages-wrapper" : "pages-wrapper activated"}>
          <div className="menu-icon-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
              onClick={(e) => setOpenNav(true)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          {navLinks.map(({ name, link }) => {
            const isActive = useActivePath(link);
            return (
              <Link
                key={name}
                href={link}
                className={isActive ? "active nav-link" : "nav-link"}
              >
                {name}
              </Link>
            );
          })}
          <div className="mobile-sub-ctn">
            <p onClick={handleClick}>
              INVESTMENTS{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </p>
            <ul
              className={
                openSub ? "mobile-subsidaries" : "mobile-subsidaries open-subs"
              }
            >
              <li>
                <a
                  href="https://alphadenenergy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alphaden Energy
                </a>
              </li>
              <li>
                <a
                  href="https://alphadenenergy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alphaden Gas
                </a>
              </li>
              <li>
                <a
                  href="https://alphadenenergy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Alphaden Technologies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
