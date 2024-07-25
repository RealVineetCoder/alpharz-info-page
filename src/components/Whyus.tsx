import React from "react";
import Image from "next/image";

const Whyus = () => {
  return (
    <div className="bg-hero-pattern bg-no-repeat bg-cover  min-h-screen sm:gap-[24px] flex flex-col items-center justify-center py-10 px-[30px] lg:py-20">
      <h2 className="text-4xl lg:text-6xl font-extrabold text-white text-center mb-10 lg:mb-20">
        why Tumblr?
      </h2>
      <div className="grid sm:grid-cols-12 gap-10 px-4 sm:col-start-2 sm:col-span-3  w-full">
        <div className="order-2 lg:order-1 sm:col-span-3 sm:p-[24px] flex sm:col-start-2 flex-col justify-center text-white text-center lg:text-right">
          <h3 className="text-3xl lg:text-[48px] font-bold mb-6">
            it's all about the fans
          </h3>
          <p className="text-lg lg:text-[24px] font-light">
            Tumblr is a fan-first platform where people come to create, curate,
            and celebrate the things they love most.
          </p>
        </div>
        <div className="order-1 lg:order-2 sm:cols-span-9 sm:pr-[32px] sm:pb-[16px] sm:mb-[18px] flex items-center justify-center relative h-60 lg:h-auto sm:col-span-8">
          <div className="relative w-full h-full lg:h-[700px]">
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
