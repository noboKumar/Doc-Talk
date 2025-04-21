import React from "react";
import { PiTrademarkRegisteredBold } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const doctorData = data.find((doctor) => doctor.id === parseInt(id));
  console.log(doctorData);

  const {
    doctor_image,
    education,
    registration_number,
    name,
    speciality,
    current_working_hospital,
    consultant_fees,
    available_weekdays,
  } = doctorData;

  return (
    <div className="bg-[#EFEFEF]">
      <div className="py-5 w-11/12 mx-auto space-y-8">
        <div className="text-center space-y-4 bg-white px-5 py-5 md:py-16 md:px-28 rounded-2xl">
          <h1 className="text-3xl font-bold">
            Doctor’s Profile Details
          </h1>
          <p className="text-xl">
            Meet Our Doctors — "Care Beyond Prescriptions" <br />
            Our team of experienced and compassionate doctors is dedicated to
            providing top-quality healthcare with a personal touch. Each
            physician brings unique expertise <br /> across a wide range of
            specialties, ensuring comprehensive care tailored to your needs.
            From preventive care to complex treatments.
          </p>
        </div>
        <div className="md:flex gap-5 bg-white rounded-2xl p-10">
          <div>
            <img className="w-80 rounded-2xl" src={doctor_image} alt="" />
          </div>
          <div className="space-y-2 flex-1/2">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="md:text-xl font-semibold text-[#0F0F0F99]">
              {education}
            </p>
            <p className="md:text-xl font-semibold text-[#0F0F0F99]">
              {speciality}
            </p>
            <br />
            <p>
              <span className="md:text-xl font-semibold text-[#0F0F0F99]">
                Working at
              </span>
              <br />
              <span className="text-2xl font-semibold">
                {current_working_hospital}
              </span>
            </p>
            <hr className="border-dashed border border-[#0F0F0F99] my-4 w-full" />
            <p className="md:text-xl flex gap-2 font-medium  text-[#0F0F0F99]">
              <span className="flex items-center">
                <PiTrademarkRegisteredBold size={20} /> Reg No:
                <hr />
              </span>
              <span>{registration_number}</span>
            </p>
            <hr className="border-dashed border border-[#0F0F0F99] my-4" />
            <p className="text-xl font-semibold md:flex items-center gap-4">
              Availability
              <span className="md:flex space-y-2 md:space-y-0 gap-4">
                {available_weekdays.map((week) => (
                  <p className="border-2 border-[#ffa200a2] bg-[#FFA0001A] text-[#ffa200] px-4 py-1 rounded-3xl">{week}</p>
                ))}
              </span>
            </p>
            <p className="text-xl font-semibold">
              Consultation Fee:{" "}
              <span className="text-[#176AE5] font-bold">Taka: {consultant_fees}</span>{" "}
              (inc. VAT){" "}
              <span className="text-[#176AE5]">Per consultation</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
