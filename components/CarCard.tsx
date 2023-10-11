import Image from "next/image";
import { FaGasPump, FaArrowCircleRight } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

const CarCard = (props: any) => {
  return (
    <div className="group bg-gray-50 sm:p-5 rounded-3xl m-1 sm:m-5 hover:bg-white hover:border-[1px] cursor-pointer duration-75 border-blue-500">
      <h2 className="text-[20px] font-medium mb-2">{props.car?.name}</h2>
      <h2 className="text-[28px] font-bold mb-2">
        <span className="text-[12px] font-light">$</span>
        {props.car?.price}
      </h2>
      <div className="flex justify-center">
        <Image
          src={props.car?.image?.url}
          alt={props.car?.name}
          width={220}
          height={200}
          className="w-[250px] h-[150px] mb-3 object-contain"
        />
      </div>
      <div className="flex justify-around group-hover:hidden">
        <div className="text-center text-gray-500">
          <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {props.car?.carType}
          </h2>
        </div>
        <div className="text-center text-gray-500">
          <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">4 Seat</h2>
        </div>
        <div className="text-center text-gray-500">
          <FaGasPump className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">
            {props.car?.carAvg}
          </h2>
        </div>
      </div>
      <button className="relative hidden group-hover:flex bg-gradient-to-r from-blue-400 to-blue-700 p-2 rounded-lg text-white w-full px-5 justify-center">
        Rent Now
        <span className="bg-blue-400 p-1 rounded-md absolute right-2">
          <FaArrowCircleRight className="w-4 h-4 text-white" />
        </span>
      </button>
    </div>
  );
};

export default CarCard;
