import React from "react";
import logo from "../../assets/logoflat_whiteC.png";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const Header = () => {
  return (
    <>
      <nav className="">
        <div className="flex justify-center items-center gap-40">
          <div>
            <img src={logo} alt="logo" className="w-72" />
          </div>

          <div>
            <ul className="flex gap-5 items-center ">
              <li className="relative group  ">
                <div className="my-10">
                  <div className="text-white haha border border-2 px-5 py-1 rounded-full flex items-center gap-1  cursor-pointer transition-all duration-300">
                    Products
                    <MdOutlineKeyboardArrowDown className="text-2xl cursor-pointer" />
                  </div>
                </div>

                {/* dropdown menu  */}

                <div className="">
                  <ul className="absolute left-0  w-80   bg-white text-black p-8 space-y-4 z-50   hidden group-hover:block duration-700 ">
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px] ">
                      Arcabit Home Security
                    </li>
                    <li className="haha text-red-500 font-[700] text-[15px] cursor-pointer">
                      Arcabit Internet Security
                    </li>
                    <li className="hover:text-red-500 haha font-[700] cursor-pointer text-[15px]">
                      Arcabit Endpoint Security
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      Arcabit Small Office Security
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      Arcabit Server
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      Arcabit Android Antivirus
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      OEM versions
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      Arcabit Scanner Online
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      Arcabit Specification
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      Product comparison
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-[#C4C4C4] haha cursor-pointer">Downloads</li>
              <li className="text-[#C4C4C4] haha cursor-pointer">Business</li>
              <li className="text-[#C4C4C4] haha cursor-pointer">
                Home and small business
              </li>
              <li className="text-[#C4C4C4] haha cursor-pointer">Education</li>
              <li className="text-[#C4C4C4] haha cursor-pointer">Offices</li>
              <li className="relative group">
                <div className="my-10">
                  <div className="text-[#C4C4C4] haha flex items-center gap-1 cursor-pointer">
                    Contact
                    <MdOutlineKeyboardArrowDown className="text-2xl" />
                  </div>
                </div>

                {/* dropdown menu  */}

                <div className="">
                  <ul className="absolute -left-10  w-80   bg-white text-black p-8 space-y-4 z-50   hidden group-hover:block duration-700">
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px] ">
                      All contacts
                    </li>
                    <li className="haha hover:text-red-500 font-[700] text-[15px] cursor-pointer">
                      Support and guides
                    </li>
                    <li className="hover:text-red-500 haha font-[700] cursor-pointer text-[15px]">
                      Partners
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      Career
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      About the company
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      Blog
                    </li>
                    <li className="hover:text-red-500 cursor-pointer haha font-[700] text-[15px]">
                      Contact form
                    </li>
                  </ul>
                </div>
              </li>
              <li className="text-[#C4C4C4] haha cursor-pointer">Store</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
