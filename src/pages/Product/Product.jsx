import React from "react";

import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
const Product = () => {
  return (
    <>
      <div>
        <div className="-mt-6 flex flex-col items-center">
          {/* 1 */}

          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path
              d="M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z"
              class="shape-fill"
              className="fill-[#1E1E1E]"
            ></path>
          </svg>

          {/* 2 */}

          <>
            <div
              className=" grid grid-cols-3 gap-20 px-20   bg-[#1E1E1E] w-full pb-20 "
            >
              <div className="flex flex-col items-center">
                <img src={p1} alt="p1" className="w-36" />
                <p className="text-[19px] font-[700] text-center text-[#DBDBDB]">Advanced<br />workstation protection</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={p2} alt="p2" className="w-36" />
                <p className="text-[19px] font-[700] text-center text-[#DBDBDB]">Two antivirus engines</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={p3} alt="p3" className="w-36" />
                <p className="text-[19px] font-[700] text-center text-[#DBDBDB]">SafeStorage mechanism</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={p4} alt="p4" className="w-36" />
                <p className="text-[19px] font-[700] text-center text-[#DBDBDB]">Access control</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={p5} alt="p5" className="w-36" />
                <p className="text-[19px] font-[700] text-center text-[#DBDBDB]">Two-way<br />firewall</p>
              </div>
              <div className="flex flex-col items-center">
                <img src={p6} alt="p6" className="w-36" />
                <p className="text-[19px] font-[700] text-center text-[#DBDBDB]">Security management</p>
              </div>
            </div>
          </>

          {/* 3 */}
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <rect x="1200" height="3.6"></rect>
            <rect height="3.6"></rect>
            <path
              d="M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"
              class="shape-fill"
              className="fill-[#1E1E1E]"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Product;
