import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 2500 2500"
              width="2500" 
              height="2500"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M100 100L50 0L150 0L100 100Z" fill ="#008000"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
        <img className="h-12 w-auto px-10" src="/logo.png" alt="logo" />
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
              <summary className="text-lg font-medium">HomeWise Assistant</summary>
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
            <a className="text-lg font-medium">Business Solutions</a>
          </li>
          <li>
            <details>
              <summary className="text-lg font-medium">Products</summary>
              <ul className="p-2">
                <li>
                  <a> HomeWise App</a>
                </li>
                <li>
                  <a>HomeWise Touchscreen</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <summary className="text-lg font-medium">Contact Us</summary>
            </Link>
            <ul className="p-2">
              <li>
                <a>Get HomeWise</a>
              </li>
              <li>
                <a>Support</a>
              </li>
            </ul>
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
