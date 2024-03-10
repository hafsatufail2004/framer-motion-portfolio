"use client";

import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavigationMenuDemo } from "./Navlinks";
import logo from "../public/logo.webp";
import Image from "next/image";
import { useAppSelector } from "@/app/store/hooks";

const Navbar = () => {
  const cart = useAppSelector((state) => state.cart);
  return (
    <section>
      {/* destop menu */}
      <div className="navbar bg-myWhite">
        <div className="navbar-start">
          {/* mobile dropdown start */}
          <div className="dropdown text-xl">
            <label tabIndex={0} className="p-0 text-2xl lg:hidden">
              <GiHamburgerMenu />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-myWhite mt-3 z-[1] p-2 shadow rounded-box w-40"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Women</summary>
                  <ul className="p-2 ">
                    <li>
                      <Link href="/tops">Tops</Link>
                    </li>
                    <li>
                      <Link href="/pants">Pants</Link>
                    </li>
                    <li>
                      <Link href="/shoes">Shoes</Link>
                    </li>
                    <li>
                      <Link href="/accessories">Accessories</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/contact">Contacts</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
          {/* mobile dropdown end */}

          {/* image logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="hidden lg:block "
            />
          </Link>
        </div>
        <div className="navbar-center ">
          <Image
            src={logo}
            alt="logo"
            width={65}
            height={65}
            className="block lg:hidden"
          />

          {/* option menu navbar */}
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
          {/* option menu navbar end */}
        </div>
        <div className="navbar-end">
          {/* cart */}
          <Link href={"/cart"}>
            <label
              tabIndex={0}
              className="cursor-pointer group group-hover:text-myOrange duration-300"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-7 md:w-7 group-hover:text-myOrange duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>

                {cart.length > 0 && (
                  <span className="badge badge-sm indicator-item text-myBlackHead font-semibold group-hover:text-myWhite group-hover:bg-myBlackPara duration-300">
                    {cart.length}
                  </span>
                )}
              </div>
            </label>
          </Link>
          {/* cart end */}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
