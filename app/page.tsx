"use client";
// export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import CarFilterOption from "@/components/CarFilterOption";
import CarsList from "@/components/CarsList";

import { carQuery } from "@/services/apolloQuerys";

// Page
export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);

  const { data }: any = useSuspenseQuery(carQuery);

  // let carsList = data?.carLists;
  useEffect(() => {
    setCarsList(data.carLists);
    setCarsOrgList(data.carLists);
  }, [data]);

  const filterCarList = (brand: string) => {
    if (brand === "All Brands") {
      setCarsList(carsOrgList);
      return;
    }
    let filter = carsOrgList.filter((item: any) => item.carBrand == brand);
    setCarsList(filter);
  };

  const orderCarList = (order: any) => {
    const sortedData = [...carsList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };
  return (
    <div className="">
      <Hero />
      <SearchInput />
      <CarFilterOption
        setBrand={(value: string) => filterCarList(value)}
        orderCarList={(value: string) => orderCarList(value)}
      />
      <CarsList carsList={carsList} />
    </div>
  );
}
