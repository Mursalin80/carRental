"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import CarFilterOption from "@/components/CarFilterOption";
import CarsList from "@/components/CarsList";

import { getCarList } from "@/services/index";
export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);

  useEffect(() => {
    carList();
  }, []);

  const carList = async () => {
    const result: any = await getCarList();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
  };

  const filterCarList = (brand: string) => {
    const filterList = carsOrgList.filter(
      (item: any) => item.carBrand == brand
    );
    setCarsList(filterList);
  };

  const orderCarList = (order: any) => {
    const sortedData = [...carsOrgList].sort((a, b) =>
      order == -1 ? a.pric - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };
  return (
    <div className="">
      <Hero />
      <SearchInput />
      <CarFilterOption
        carsList={carsList}
        setBrand={(value: string) => filterCarList(value)}
        orderCarList={(value: string) => orderCarList(value)}
      />
      <CarsList carsList={carsList} />
    </div>
  );
}
