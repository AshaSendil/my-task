import React from "react";
import { AiFillThunderbolt, AiFillGift } from "react-icons/ai";
import { GiLoincloth, GiRunningShoe } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import { GrDiamond } from "react-icons/gr";
import { BsFillChatFill } from "react-icons/bs";

import Logo from "../assets/images/logo.png";

function Sidemenu() {
  return (
    <div id="sidebar" className="col-span-1 ml-12 max-h-screen">
      <div className="flex flex-col place-items-start min-h-screen">
        <div id="logo" className="w-full mt-4 mb-12">
          <img src={Logo} alt="logo" className="w-36" />
        </div>
        <div id="nav" className="flex-auto">
          <h1 className="text-3xl font-semibold text-gray-700">Explore</h1>
          <nav className="mt-6 text-left">
            <ul>
              <li className="flex gap-3 mb-6">
                <AiFillThunderbolt size="20" color="#ffcc00" /> New In
              </li>
              <li className="flex gap-3 mb-6">
                <GiLoincloth size="20" color="#fa7500" /> Clothing
              </li>
              <li className="flex gap-3 mb-6">
                <GiRunningShoe size="20" color="#707070" /> Shoes
              </li>
              <li className="flex gap-3 mb-6">
                <FaShoppingBag size="20" color="#3b0101" /> Accessories
              </li>
              <li className="flex gap-3 mb-6">
                <FcSportsMode size="20" color="#024a00" /> Activewear
              </li>
              <li className="flex gap-3 mb-6">
                <AiFillGift size="20" color="#fc4800" /> Gifts & Living
              </li>
              <li className="flex gap-3 mb-6">
                <GrDiamond size="20" /> Inspiration
              </li>
            </ul>
          </nav>
        </div>
        <div className="mb-4 flex gap-6 items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex place-items-center justify-center">
            <BsFillChatFill size="20" />
          </div>
          Help Center
        </div>
      </div>
    </div>
  );
}
export default Sidemenu;
