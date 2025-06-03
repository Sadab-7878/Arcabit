import React from "react";
import biznes from "../../assets/biznes.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";

const Footerup = () => {
  return (
    <>
      <div
        className="w-full bg-red-500 bg-blend-overlay bg-cover bg-center bg-no-repeat flex flex-col justify-center px-40 "
        style={{
          backgroundImage: `url(${biznes})`,
          height: "auto",
          minHeight: "700px",
        }}
      >
        <div className="space-y-12">
          <div className="space-y-1">
            <p className="haha text-[40px] font-[600] text-[#FFFFFF]">Arcabit Internet Security</p>
            <p className="haha text-[19px] font-[600] text-[#FFFFFF]">Protection against viruses and network threats</p>
          </div>
          <div>
            <button className=" px-8 py-3 haha2 tracking-widest text-[14px]font-[600] text-[#E21E23] flex justify-center items-center gap-4 rounded-4xl bg-[#000000]">I'm buying<div className="  w-8 h-8 flex justify-center items-center rounded-full bg-[#383838]"><IoIosArrowRoundForward className="text-[25px] text-[#E21E23]"/></div></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footerup;
