import React from "react";
import Image from "next/image";

const Adversite = () => {
  return (
    <div className="bg-orange-pattern min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-white">
          advertise on Tumblr
        </h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white flex flex-col items-center justify-center my-6 sm:my-8 lg:my-12">
          explore our products <br />
          and imagine the possibilities.
        </h3>
        <button className="bg-[#001935] py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 text-white rounded-lg font-medium">
          get Started
        </button>
        <div className="flex flex-wrap justify-center mt-8 sm:mt-10 lg:mt-12">
          <div className="w-full sm:w-1/2 lg:w-1/4 flex items-center my-4">
            <Image
              src="/icon_wht_mobile-1.png"
              alt="Native Ad Experiences"
              height={80}
              width={80}
            />
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium ml-4">
              native ad experiences
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 flex items-center my-4">
            <Image
              src="/icon_wht_lightbulb-1.png"
              alt="Custom Opportunities"
              height={80}
              width={80}
            />
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium ml-4">
              custom opportunities
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 flex items-center my-4">
            <Image
              src="/icon_wht_paint-bucket-1.png"
              alt="Access to Tumblr Creators"
              height={80}
              width={80}
            />
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium ml-4">
              access to tumblr creators
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 flex items-center my-4">
            <Image
              src="/icon_wht_chart-1.png"
              alt="Optimization Solutions"
              height={80}
              width={80}
            />
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium ml-4">
              optimization solutions
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl mt-12 sm:mt-16 lg:mt-24">
        <div className="relative col-span-1">
          <Image
            src="/phone-ks-final-1.png"
            alt="Phone"
            height={400}
            width={400}
          />
        </div>
        <div className="relative col-span-1">
          <Image
            src="/phone-2-new-1-1.png"
            alt="Phone"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative col-span-1">
          <Image
            src="/tablet-1.png"
            alt="Tablet"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative col-span-1">
          <Image
            src="/laptop-1.png"
            alt="Laptop"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Adversite;

