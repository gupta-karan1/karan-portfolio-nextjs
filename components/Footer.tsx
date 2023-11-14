import Link from "next/link";
import React from "react";
import LinkArrow from "./LinkArrow";
import { AtSymbolIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <div className="px-5 pb-5 pt-5  bg-base-300">
      <footer className="footer items-center p-4 bg-secondary text-secondary-content rounded-3xl lg:rounded-full ">
        <aside className="items-center md:grid-flow-col grid-flow-row gap-5">
          <Link href="/" className="btn btn-ghost btn-sm rounded-full">
            <code>
              <span className="text-2xl">{"<"}</span>
              <span className="text-2xl">Karan</span>
              <span className="text-2xl">{"/>"}</span>
            </code>
          </Link>

          <p className="text-sm">
            Copyright © 2023 - All right reserved. Built using NextJS,
            Typescript, TailwindCSS, FramerMotion & DaisyUI.
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 place-self-center justify-self-end">
          <Link
            className="flex btn btn-outline text-secondary-content"
            href="https://www.linkedin.com/in/karan-gupta-designer/"
          >
            {" "}
            LinkedIn
            <LinkArrow />
          </Link>

          <Link
            className="flex btn btn-outline text-secondary-content"
            href="mailto:karang6@gmail.com"
          >
            {" "}
            Email
            <LinkArrow />
          </Link>
          {/* <Link
          className="flex btn btn-outline"
          href="https://docs.google.com/document/d/1gp24cahwdxeoQ-kwxT3xTuC7HXd_OnaZffihJaNckaM/edit?usp=sharing"
        >
          {" "}
          Resume
          <LinkArrow />
        </Link> */}
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
