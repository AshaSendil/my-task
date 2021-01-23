import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";

function Header() {
  return (
    <div className="h-14 flex items-center place-items-start gap-2">
      <div id="search" className="flex-auto text-left ml-3">
        <div className="flex items-center gap-3">
          <RiSearchLine color="#787878" size="20" />
          <input
            type="text"
            placeholder="Search for items, brands and Inspiration ..."
            className="w-full placeholder-gray-400 text-gray-600 bg-white outline-none focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div
        id="cart"
        className="mr-8 flex items-center gap-2 text-left text-sm font-medium cursor-pointer"
      >
        <FiShoppingCart color="#333333" size="20" />
        <span>Cart: </span>
        <span>2 </span>
      </div>
      <div id="profile" className="ml-4 w-52 flex items-center gap-2 cursor-pointer">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            className="object-cover"
            alt="profile"
          />
        </div>
        <div className="flex items-center text-sm font-medium gap-2">
          <span className="font-semibold">Hello</span>
          <span>Mr. Coleman</span>
        </div>
        <BiChevronDown />
      </div>
    </div>
  );
}

export default Header;
