import React from "react";

import { AiFillThunderbolt } from "react-icons/ai";
import { FaMale, FaFemale } from "react-icons/fa";
import { BsFilterRight } from "react-icons/bs";

function Filter() {
  return (
    <div className="h-28 flex items-center gap-2 ">
      <div id="pageName" className="flex-auto ml-3 text-left">
        <div className="flex items-center gap-2">
          <AiFillThunderbolt size="30" color="#ffcc00" />
          <div className="text-3xl font-semibold text-gray-700">New In</div>
        </div>
      </div>
      <div id="gender" className="cursor-pointer">
        <div className="w-56 h-14 border border-gray-300 rounded-lg flex">
          <div className="w-1/2 rounded-lg bg-gray-100 flex items-center place-items-center justify-center gap-1">
            <FaFemale size="20" color="d10092" />
            <div className="font-medium text-gray-700">Women</div>
          </div>
          <div className="w-1/2 h-14 rounded-tr-lg rounded-br-lg flex items-center place-items-center justify-center gap-1">
            <FaMale size="20" color="021463" />
            <div className="font-medium text-gray-700">Men</div>
          </div>
        </div>
      </div>
      <div id="sort" className="cursor-pointer">
        <div className="w-32 h-14 border border-gray-300 rounded-lg flex place-items-center gap-4 ">
          <BsFilterRight size="28" className="ml-4" />
          <div className="font-medium text-gray-700">Sort</div>
        </div>
      </div>
      <div id="filter" className="cursor-pointer">
        <div className="w-32 h-14 border border-gray-300 rounded-lg flex place-items-center gap-4 ">
          <div className="ml-4 w-8 h-8 rounded-full bg-black flex place-items-center justify-center">
            <span className="text-white">5</span>
          </div>
          <div className="font-medium text-gray-700">Filter</div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
