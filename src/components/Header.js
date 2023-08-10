"use client";

import React from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div
          className="flex items-center space-x-2 font-semibold cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <img
            src="https://cdn4.iconfinder.com/data/icons/real-estate-179/50/Real_Estate_Outline-28-512.png"
            alt="logo"
            className="h-7 "
          />
          <p>Live Housing</p>
        </div>

        <div>
          <ul className="flex space-x-10">
            <li className="cursor-pointer py-3 text-sm font-semibold  border-b-[3px] border-b-transparent">
              Research
            </li>
            <li className="cursor-pointer py-3 text-sm font-semibold  border-b-[3px] border-b-transparent">
              Evaluate
            </li>
            <li
              className="cursor-pointer py-3 text-sm font-semibold  border-b-[3px] border-b-transparent"
              onClick={() => {
                router.push("/auth");
              }}
            >
              Login
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
