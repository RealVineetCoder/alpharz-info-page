import React from "react";
import Image from "next/image";

const Creator = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 font-Primary">
      <div className="order-2 lg:order-1 grid grid-rows-4 grid-cols-4">
        <div className="col-start-1 col-span-2 relative row-start-1 row-span-2 h-64 md:h-auto">
          <Image
            src="/tumblr_nkkdxkuzdm1u3805so1_500-1.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-32 md:h-auto">
          <Image
            src="/tumblr_ni6kpqywoq1tsnmkoo1_500-1.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-32 md:h-auto">
          <Image
            src="/tumblr_no978vujtk1urfvlqo1_500-1.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-32 md:h-auto">
          <Image
            src="/tumblr_o28s7gmpl91up9ckeo1_540-1.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-32 md:h-auto">
          <Image
            src="/tumblr_okpp64xquq1vwrnt0o1_500-1.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative row-start-3 row-span-2 h-64 md:h-auto">
          <Image
            src="/tumblr_oet60hyzg21vwr5kso1_500-1.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-32 md:h-auto">
          <Image
            src="/tumblr_oe6stulbuu1qhp4u1o1_540-1.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative row-start-3 row-span-2 col-start-3 col-span-2 h-64 md:h-auto">
          <Image
            src="/tumblr_nklirvu0gp1u3805so1_1280-1.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative h-32 md:h-auto">
          <Image
            src="/tumblr_nf7gfqqwjy1qz7r02o1_1280-1.png"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="bg-[#070f5e] order-1 lg:order-2 p-8 lg:p-28">
        <h3 className="text-2xl lg:text-4xl font-light text-[#FFFFFF] mb-8 leading-tight">
          the most passionate
          <br />
          brand studio on the internet,
          <br />
          <strong className="text-4xl lg:text-6xl font-extrabold">
            the Tumblr Creator Network
          </strong>
        </h3>
        <div>
          <button className="bg-[#ff8a00] rounded-md font-medium py-2 px-5 text-[#FFFFFF] text-lg lg:text-xl mb-6">
            see our creators
          </button>
        </div>
        <div className="flex items-center mb-4">
          <Image
            src="/icon_org_handshake-1.png"
            alt="Logo"
            width={53}
            height={53}
          />
          <p className="text-lg lg:text-2xl font-light text-[#FFFFFF] leading-tight ml-5">
            <strong className="text-4xl lg:text-6xl font-bold text-[#FFFFFF]">
              100s
            </strong>
            <br />
            of partners
          </p>
        </div>
        <div className="flex items-center mb-4">
          <Image
            src="/icon_org_paint-1.png"
            alt="Logo"
            width={53}
            height={53}
          />
          <p className="text-lg lg:text-2xl font-light text-[#FFFFFF] leading-tight ml-5">
            <strong className="text-4xl lg:text-6xl font-bold text-[#FFFFFF]">
              1,000s
            </strong>
            <br />
            of commissioned artworks
          </p>
        </div>
        <div className="flex items-center">
          <Image src="/icon_org_eye-1.png" alt="Logo" width={53} height={53} />
          <p className="text-lg lg:text-2xl font-light text-[#FFFFFF] leading-tight ml-5">
            <strong className="text-4xl lg:text-6xl font-bold text-[#FFFFFF]">
              1,000,000s
            </strong>
            <br />
            of impressions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Creator;


