import React from "react";
import Button from "./Ui/Button";
import doctorGroup1 from "../assets/doctor-group-1.jpg"
import doctorGroup2 from "../assets/doctor-group-2.jpg"

const HeroSection = () => {
  return (
    <div className="text-center space-y-6 py-16 w-11/12 mx-auto border-2 border-white rounded-xl bg-linear-to-b from-[#EFEFEF] to-[#FFFFFF] px-5">
      <h1 className="text-4xl md:text-5xl font-semibold">
        Dependable Care, Backed by Trusted <br /> Professionals.
      </h1>
      <p className="md:text-xl">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br />{" "}
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>
      <div className="md:flex items-center justify-center gap-4 space-y-5 md:space-y-0">
        <input
          className="border-2 border-[#9CA3AF] md:w-2/6 px-4 py-2 rounded-4xl text-[#9CA3AF] text-xl shadow-sm"
          type="text"
          placeholder="Search any doctor..."
        />
        <Button name="Search Now"></Button>
      </div>
      <div className="lg:flex justify-center gap-6 space-y-5 lg:space-y-0">
        <img className="rounded-xl" width={740} src={doctorGroup1} alt="" />
        <img className="rounded-xl" src={doctorGroup2} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
