"use client";
import { useState } from "react";

const CarFilterOption = ({ setBrand, orderCarList }: any) => {
  const [brandList] = useState([
    "Honda",
    "Kia",
    "Toyota",
    "Mazda",
    "BMW",
    "All Brands",
  ]);

  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="">
        <h2 className="text-[30px] font-bold">Cat Catalog</h2>
        <h2>Explore your cars.</h2>
      </div>
      <div className="flex gap-5 mx-2">
        <select
          name=""
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => orderCarList(e.target.value)}
        >
          <option value="Price" disabled selected>
            Price
          </option>
          <option value={1}>Max to Min</option>
          <option value={-1}>Min to Max</option>
        </select>
        <select
          onChange={(e) => setBrand(e.target.value)}
          className="select select-bordered w-full md:block max-w-xs hidden"
        >
          <option value="Manufacturer" disabled selected>
            Manufacturer
          </option>
          {brandList.map((brand: string, i: number) => {
            return <option key={i}>{brand}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default CarFilterOption;
