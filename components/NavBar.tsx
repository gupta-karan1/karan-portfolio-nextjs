"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import LinkArrow from "./LinkArrow";
import {
  ArrowUpRightIcon,
  Bars3CenterLeftIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";

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
      className={`navbar z-50 fixed m-0 bg-base-100   ${
        visible ? "" : "hidden"
      }`}
    >
      <div className="flex-1">
        <Link href="/" className="btn btn-success normal-case text-xl">
          <code>
            <span>{"<"}</span>
            <span>Karan</span>
            <span>{"/>"}</span>
          </code>
        </Link>
      </div>
      <div className="flex-none">
        <div className="drawer drawer-end  ">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-success btn-circle"
            >
              <Bars3CenterLeftIcon className="w-5 h-5 lg:hidden" />
              <span className="hidden lg:block lowercase">menu</span>
            </label>
          </div>

          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu w-9/12 lg:w-4/12 min-h-full bg-gradient-to-tr from-primary to-accent-focus  gap-5 text-primary-content rounded-3xl lg:rounded-b-full  ">
              <li className="self-end ">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay "
                >
                  <XMarkIcon className="w-14 h-14" />
                </label>
              </li>

              <li className="text-4xl">
                <Link href="/">Home</Link>
              </li>
              {/* <li className="text-4xl">
                <Link href="/about">About</Link>
              </li> */}
              <li className="text-4xl">
                <Link href="/work">Work</Link>
              </li>
              <li className="text-4xl">
                <Link href="mailto:karang6@gmail.com">
                  Contact <ArrowUpRightIcon className="w-10 h-10" />
                </Link>
              </li>
              <li className="text-4xl">
                <Link href="https://www.designerkaran.com/">
                  Blog <ArrowUpRightIcon className="w-10 h-10" />
                </Link>
              </li>
              <li className="text-4xl">
                <Link href="https://www.amazon.co.uk/Karan-Gupta/e/B08VF66J7J?ref=sr_ntt_srch_lnk_1&qid=1698246554&sr=8-1">
                  Books <ArrowUpRightIcon className="w-10 h-10" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Menu on Small Screens */}

      {/* Menu on large screens */}
      {/* <div className="navbar-center hidden lg:flex">
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
      </div> */}
      {/* <div className="navbar-start">
        <Link className="btn btn-outline" href="https://www.designerkaran.com/">
          Blog
          <LinkArrow />
        </Link>
      </div> */}
    </div>
  );
};

export default NavBar;
