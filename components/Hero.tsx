import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-50 p-5 ms:p-10 md:p-20 rounded">
      <div className="">
        <h2 className="text-[40px] md:text-[60px] font-bold">
          Luxary Cars <span className="text-red-600">Rental</span> in your city.
        </h2>
        <button className="p-2 bg-red-500 text-white mt-5 px-4 rounded-full hover:scale-105 transition-all">
          Explore More...
        </button>
      </div>
      <div className="">
        <Image
          src="/hero-car-1.jpg"
          width={400}
          height={500}
          alt="hero"
          className="w-full object-cover align-middle"
        />
      </div>
    </div>
  );
};

export default Hero;
