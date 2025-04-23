import React from "react";
import Logo from "./Ui/Logo";
import NavLinks from "./NavLinks";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center p-10 py-20 bg-white">
      <aside>
        <Logo></Logo>
        <ul className="md:flex space-y-2 items-center gap-12 px-1 text-xl text-[#0F0F0FB3]/90 font-semibold py-2">
          <NavLinks></NavLinks>
        </ul>
      </aside>
      <div className="border w-4/5 border-gray-400"></div>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl md:text-3xl">
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://www.facebook.com/crazy.nobo/"
          >
            <FaFacebook />
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://x.com/crazyXnobo"
          >
            <BsTwitterX />
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://www.linkedin.com/in/nobo-kumar/"
          >
            <FaLinkedin />
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://github.com/noboKumar"
          >
            <FaGithub />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
