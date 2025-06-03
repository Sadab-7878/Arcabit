import React from "react";
import Header from "../../components/Header/Header";
import hero from "../../assets/Internet_Security_box.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <>
      <div>
        <div className="bg-[#151515]">
          <Header />

          <div className="flex items-center font-semibold -ml-20">
            <div>
              <img src={hero} alt="hero" className="w-[900px]" />
            </div>

            <div className="flex flex-col gap-10">
              <div className="space-y-3">
                <p className="text-white haha text-[40px]">Arcabit Internet Security</p>
                <p className="text-[19px] text-[#939393] haha">Protection against viruses and network threats</p>
              </div>
              <div >
                <button className="flex justify-center items-center w-[400px] h-[60px] rounded-full gap-5 text-white haha2   bg-gradient-to-r from-[#920E11] to-[#D41C21] tracking-widest cursor-pointer hover:from-[#D41C21] hover:to-[#D41C21]">Arcabit Packages Specification<div className="bg-[#E25756] rounded-full w-10 h-10 flex justify-center items-center "><IoIosArrowRoundForward className="text-[40px]"/></div></button>
              </div>
              <div className="space-y-4 ">
                 <button className="flex justify-center items-center w-[350px] h-[60px] rounded-full gap-5 text-white haha2   bg-gradient-to-r from-[#920E11] to-[#D41C21] tracking-widest cursor-pointer hover:from-[#D41C21] hover:to-[#D41C21]">I am buying this version<div className="bg-[#E25756] rounded-full w-10 h-10 flex justify-center items-center "><IoIosArrowRoundForward className="text-[40px]"/></div></button>

                 <p className="text-[#636363] text-[13px] haha font-[400]">30 day trial version</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
