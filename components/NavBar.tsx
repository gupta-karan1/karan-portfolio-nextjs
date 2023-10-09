"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import LinkArrow from "./LinkArrow";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(
        prevScrollPos > currentScrollPos ||
          currentScrollPos < 10 ||
          currentScrollPos === 0
      );
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);
  return (
    <div
      className={`navbar z-50 fixed bg-base-100 bg-opacity-60 ${
        visible ? "" : "hidden"
      }`}
    >
      {/* Menu on Small Screens */}
      <div className="navbar-start">
        <div className="drawer drawer-end lg:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-outline btn-circle "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-9/12 min-h-full bg-neutral text-base-content gap-5  ">
              {/* Sidebar content here */}
              <li className="self-end ">
                {/* Close Icon */}
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-14 h-14 "
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </label>
              </li>

              <li className="text-4xl">
                <Link href="/">Home</Link>
              </li>
              <li className="text-4xl">
                <Link href="/about">About</Link>
              </li>
              <li className="text-4xl">
                <Link href="/work">Work</Link>
              </li>
              <li className="text-4xl">
                <Link href="mailto:karang6@gmail.com">
                  Contact <LinkArrow size="w-10 h-10" />
                </Link>
              </li>
              <li className="text-4xl">
                <Link href="https://www.designerkaran.com/">
                  Blog <LinkArrow size="w-10 h-10" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Link href="/" className="btn btn-ghost normal-case text-xl">
          Karan
        </Link>
      </div>

      {/* Menu on large screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-outline" href="https://www.designerkaran.com/">
          Blog
          <LinkArrow />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
