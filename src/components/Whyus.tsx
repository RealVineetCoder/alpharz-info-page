import React from "react";
import Image from "next/image";

const Whyus = () => {
  return (
    <div className="bg-hero-pattern  min-h-screen flex flex-col items-center justify-center py-10 lg:pr-20 lg:py-20">
      <h2 className="text-4xl lg:text-6xl font-extrabold text-white text-center mb-10 lg:mb-20">
        why Tumblr?
      </h2>
      <div className="grid grid-cols-1 lg:[grid-template-columns:1fr_2fr] gap-10 px-4  w-full max-w-screen-lg">
        <div className="order-2 lg:order-1 flex flex-col justify-center text-white text-center lg:text-right">
          <h3 className="text-3xl lg:text-5xl font-bold mb-6">
            it's all about the fans
          </h3>
          <p className="text-lg lg:text-2xl font-light">
            Tumblr is a fan-first platform where people come to create, curate,
            and celebrate the things they love most.
          </p>
        </div>
        <div className="order-1 lg:order-2 flex items-center justify-center relative h-60 lg:h-auto">
          <div className="relative w-full h-full lg:w-[1000px] lg:h-[700px]">
            <Image
              src="/img_main-pg_fans_devices_01-1.png"
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

export default Whyus;
