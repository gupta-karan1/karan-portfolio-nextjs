"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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
      className={`navbar z-50 fixed m-0 bg-base-100 shadow-sm   ${
        visible ? "" : "hidden"
      }`}
    >
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <code>
            <span>{"<"}</span>
            <span>Karan</span>
            <span>{"/>"}</span>
          </code>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="mailto:karang6@gmail.com">
              Contact <ArrowUpRightIcon className="w-5 h-5" />
            </Link>
          </li>
          <li>
            <details>
              <summary>Links</summary>
              <ul className="p-2">
                <li>
                  <Link
                    href="https://www.designerkaran.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.amazon.co.uk/Karan-Gupta/e/B08VF66J7J?ref=sr_ntt_srch_lnk_1&qid=1698246554&sr=8-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Books
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="flex-none ">
        <div className="drawer drawer-end  ">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn bg-base-300 lg:hidden"
            >
              <Bars3CenterLeftIcon className="w-5 h-5 " />
            </label>
          </div>

          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu w-8/12 min-h-full bg-base-200 gap-2 ">
              <li className="self-end ">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay "
                >
                  <XMarkIcon className="w-10 h-10" />
                </label>
              </li>

              <li className="text-2xl">
                <Link href="/">Home</Link>
              </li>
              <li className="text-2xl">
                <Link href="/about">About</Link>
              </li>
              <li className="text-2xl">
                <Link href="/work">Work</Link>
              </li>
              <li className="text-2xl">
                <Link href="mailto:karang6@gmail.com">
                  Contact <ArrowUpRightIcon className="w-5 h-5" />
                </Link>
              </li>
              <li className="text-2xl">
                <Link
                  href="https://www.designerkaran.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blog <ArrowUpRightIcon className="w-5 h-5" />
                </Link>
              </li>
              <li className="text-2xl">
                <Link
                  href="https://www.amazon.co.uk/Karan-Gupta/e/B08VF66J7J?ref=sr_ntt_srch_lnk_1&qid=1698246554&sr=8-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Books <ArrowUpRightIcon className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
