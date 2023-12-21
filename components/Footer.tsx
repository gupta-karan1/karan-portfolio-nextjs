import Link from "next/link";
import React from "react";
import LinkArrow from "./LinkArrow";
import { AtSymbolIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-base-200">
      <aside className="items-center md:grid-flow-col grid-flow-row gap-5">
        <Link href="/" className="btn btn-ghost btn-sm rounded-full">
          <code>
            <span className="text-2xl">{"<"}</span>
            <span className="text-2xl">Karan</span>
            <span className="text-2xl">{"/>"}</span>
          </code>
        </Link>

        <p className="text-sm">
          Copyright © 2023 - All right reserved. Built using NextJS, Typescript,
          TailwindCSS, FramerMotion & DaisyUI.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
