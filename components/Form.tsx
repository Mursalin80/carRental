import { useState } from "react";

const Form = ({ car }: any) => {
  const [formValue, setFormValue] = useState({
    location: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNo: "",
  });

  const handleChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log({ formValue });
  };

  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label htmlFor="" className="text-gray-400 ">
          PickUp Location
        </label>
        <select
          name="location"
          className="select select-bordered w-full max-w-lg"
          onChange={handleChange}
        >
          <option disabled selected>
            PickUp Location
          </option>
          <option>MP Nagar Bhopal</option>
          <option> Lokmanya Nagar, Indore</option>
        </select>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-gray-400 ">
            PickUp Date
          </label>
          <input
            type="date"
            onChange={handleChange}
            name="pickupDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-gray-400 ">
            DropOff Date
          </label>
          <input
            type="date"
            onChange={handleChange}
            name="dropOffDate"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-gray-400 ">
            PickUp Time
          </label>
          <input
            type="time"
            onChange={handleChange}
            name="pickupTime"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="" className="text-gray-400 ">
            DropOff Time
          </label>
          <input
            type="time"
            onChange={handleChange}
            name="dropOffTime"
            className="input input-bordered w-full max-w-lg"
          />
        </div>
      </div>
      <div className="modal-action">
        <button className="btn">Close</button>
        <button
          className="btn bg-blue-500 text-white hover::bg-blue-800"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Form;
