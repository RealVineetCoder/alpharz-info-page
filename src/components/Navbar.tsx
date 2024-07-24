import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
      <div className="h-[115px]  bg-[#001935] flex items-center justify-between">

        <Image
          src="/logo_ads-sized-1.png"
          alt="Logo"
          width={174}
          height={42}
          className="ml-10"
        />
        <div className="gap-[25px] pr-[30%] hidden lg:block">
          <a
            href="#"
            className="text-[#FFFFFF] text-[20px] font-medium  ml-[16px] hover:text-[#ff492f] mr-10"
          >
            Why Tumblr?
          </a>
          <a
            href="#"
            className="text-[#FFFFFF] font-medium text-[20px] ml-[16px] hover:text-[#ff492f] mr-10"
          >
            adversite on Tumblr
          </a>
          <a
            href="#"
            className="text-[#FFFFFF] font-medium text-[20px] ml-[16px] hover:text-[#ff492f] mr-10"
          >
            get Started
          </a>
          <a
            href="#"
            className="text-[#FFFFFF] font-medium text-[20px] ml-[16px] hover:text-[#ff492f] mr-10"
          >
            Tumblr primer
          </a>
        </div>
        <Image
          src="/logo_blog-sized-1.png"
          alt="Logo"
          width={79}
          height={56}
          className="mr-10"
        />
      </div>
  );
};

export default Navbar;