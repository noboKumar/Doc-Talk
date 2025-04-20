import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../components/Ui/Logo";
import NavLinks from "./NavLinks";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 lg:w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className=" dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow
             text-[#0F0F0FB3]/90 font-semibold space-y-2"
          >
            <NavLinks></NavLinks>
          </ul>
        </div>
        <Link to="/">
          <Logo></Logo>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-12 px-1 text-xl text-[#0F0F0FB3]/90 font-semibold">
          <NavLinks></NavLinks>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#176AE5] text-white rounded-4xl">Emergency</a>
      </div>
    </div>
  );
};

export default NavBar;
