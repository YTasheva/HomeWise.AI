import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 btn rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img className="h-16 w-auto px-10" src="/logo.png" alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-lg font-medium">
              <span className="text-yellow font-bold">|</span>Home
            </Link>
          </li>
          <li>
            <details>
              <summary className="text-lg font-medium">Voice Assistant</summary>
              <ul className="p-2">
                <li>
                  <Link to="/upload">Voice Assistant</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="business-solutions" className="text-lg font-medium">
              Business Solutions
            </Link>
          </li>
          <li>
            <details>
              <summary className="text-lg font-medium">Products</summary>
              <ul className="p-0">
                <li>
                  <a> HomeWise App</a>
                </li>
                <li>
                  <a>HomeWise Touchscreen</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/contact" className="text-lg font-medium">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/upload" className="btn bg-yellow text-white rounded-none">
          GET A QUOTE
        </Link>
        <a className="btn bg-black mx-8 text-white rounded-none">SIGN IN</a>
      </div>
    </div>
  );
}
