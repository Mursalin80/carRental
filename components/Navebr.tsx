"use client";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "@/context/Theme";
import Image from "next/image";

const Navebr = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex items-center justify-center p-2 m-2 shadow-sm border-b-[1px] relative">
      <div className="hover:bg-blue-500 cursor-pointer p-2 hover:text-white px-3 rounded-full">
        Home
      </div>
      <div className="hover:bg-blue-500 cursor-pointer p-2 hover:text-white px-3 rounded-full">
        History
      </div>
      <div className="hover:bg-blue-500 cursor-pointer p-2 hover:text-white px-3 rounded-full">
        Contact Us.
      </div>
      <div className=" absolute end-16 flex">
        <UserButton afterSignOutUrl="/" />
        <div className="mx-2 px-2 py-1 rounded-full bg-slate-100 hover:bg-slate-200">
          {theme === "light" ? (
            <Image
              src="light.svg"
              width={25}
              height={25}
              alt="sun"
              onClick={() => toggleTheme("dark")}
            />
          ) : (
            <Image
              src="dark.svg"
              width={25}
              height={25}
              alt="moon"
              onClick={() => toggleTheme("light")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navebr;
