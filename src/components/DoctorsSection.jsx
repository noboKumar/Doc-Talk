import React from "react";
import DoctorCard from "./DoctorCard";

const DoctorsSection = ({ data }) => {
  return (
    <div className="py-20 space-y-10 w-11/12 mx-auto">
      <div className="text-center space-y-5">
        <h1 className="text-2xl md:text-4xl font-bold">Our Best Doctors</h1>
        <p className="md:text-xl">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a <br />{" "}
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {data.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
        ))}
      </div>
    </div>
  );
};

export default DoctorsSection;
