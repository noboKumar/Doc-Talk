import React from "react";
import { PiTrademarkRegisteredBold } from "react-icons/pi";

const DoctorCard = ({ doctor }) => {
  const {
    doctor_image,
    available,
    education,
    experience,
    registration_number,
    name,
    speciality,
  } = doctor;
  return (
    <div className="space-y-1 rounded-2xl p-4 md:p-8 bg-white grid">
      <div className="bg-gray-300 rounded-2xl">
        <img
          className="max-w-80 max-h-72 rounded-4xl mx-auto py-5 px-5"
          src={doctor_image}
          alt="doctor-image"
        />
      </div>
      <div className="md:flex md:space-y-0 space-y-2 items-center gap-2 text-xl my-5">
        <p className={`border rounded-4xl px-3 py-2 md:px-3.5 md:py-1.5 ${available? "bg-[#09982f31] border-[#09982F] text-[#09982F]" : "bg-[#eb51593b] border-[#ff1b1b] text-[#ff1b1b]"}`}>
          {available ? "Available" : "Not Available"}
        </p>
        <p className="border rounded-4xl px-3 py-2 md:px-3.5 md:py-1.5 border-[#176AE5] text-[#176AE5] bg-[#176AE5]/20">
          {experience} experience
        </p>
      </div>
      <h1 className="md:text-2xl text-xl font-semibold">{name}</h1>
      <p className="md:text-xl font-semibold text-[#0F0F0F99]/80">{education}</p>
      <p className="md:text-xl font-semibold text-[#0F0F0F99]/80">{speciality}</p>
      <hr className="border-dashed border-2 border-[#0F0F0F99] my-4" />
      <p className="md:text-xl flex font-semibold text-[#0F0F0F99]/90">
        <span className="flex items-center">
          <PiTrademarkRegisteredBold size={20} /> Reg No:
        </span>
        {registration_number}
      </p>
      <button className="border px-5 py-2 border-[#176AE5] text-[#176AE5] rounded-4xl w-full my-3 cursor-pointer text-xl font-bold">
        View Details
      </button>
    </div>
  );
};

export default DoctorCard;
