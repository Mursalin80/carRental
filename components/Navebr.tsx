import { UserButton } from "@clerk/nextjs";

const Navebr = () => {
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
      <div className=" absolute end-16">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navebr;
