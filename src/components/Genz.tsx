import React from "react";
import Image from "next/image";

const Genz = () => {
  return (
    <div className="bg-phone-pattern grid sm:grid-cols-12 bg-no-repeat bg-cover h-screen px-4 md:px-8 font-Primary">
      <div className="flex flex-col md:flex-row items-center justify-center sm:col-start-3 sm:col-span-4">
        <div className="flex items-center mb-6 md:mb-0">
          <Image src="/genz_graph-1.png" alt="Gen Z Graph" height={652} width={652} className="w-full md:w-[652px] md:h-[652px]" />
        </div>
        
      </div>
      <div className="z-50 flex-col justify-center text-center flex">
          <p className="text-[16px] md:text-[24px] font-light text-[#FFFFFF]">
            <strong className="text-[32px] md:text-[72px] font-bold text-[#FFFFFF]">
              61%
            </strong>
            <br />
            of new users are gen z
          </p>
          <p className="text-[16px] md:text-[24px] font-light text-[#FFFFFF] mt-4 md:mt-10">
            <strong className="text-[32px] md:text-[72px] font-bold text-[#FFFFFF]">
              48%
            </strong>
            <br />
            of active users are gen z
          </p>
        </div>
      <div className="flex flex-col md:flex-row items-center justify-center w-[300] h-[300] sm:col-span-4 sm:col-start-9">
        <Image src="/genz_brace-1.png" alt="Gen Z Brace" height={425} width={130} className="w-32 md:w-auto" />
        <h3 className="text-[24px] md:text-[48px] text-[#FFFFFF] font-bold max-w-[250px] md:max-w-[none] ml-0 md:ml-10 mt-4 md:mt-0 text-center md:text-left lg:pr-[50%]">
          gen z is kind of obsessed with us
        </h3>
      </div>
    </div>
  );
};

export default Genz;

