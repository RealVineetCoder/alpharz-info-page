import React from "react";
import Image from "next/image";


const HeroSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 lg:px-[10%] py-20 h-auto lg:h-[700px] bg-[#347cce]">
        <div className="order-2 lg:order-1 flex flex-col justify-center mb-20 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight tracking-tighter">
            where fan love drives brand love
          </h1>
          <div>
            <button className="bg-[#ff492f] px-6 py-4 rounded-lg text-white mt-5">
              get in touch
            </button>
          </div>
        </div>
        <div className="order-1 lg:order-2 flex items-center justify-center relative h-60 lg:h-auto">
          <div className="relative w-full h-full">
            <Image
              src="/img_carousel_square_loki_03-1.png"
              alt="Cat Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
