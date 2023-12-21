import Link from "next/link";

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
          Copyright © 2023 - All right reserved. Built with NextJS, TypeScript,
          TailwindCSS & DaisyUI.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
