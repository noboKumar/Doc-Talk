import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
import Button from "./Ui/Button";

const DoctorsSection = ({ data }) => {
  const [doctorData, setDoctorData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDoctorData(data);
    } else {
      setDoctorData(data.slice(0, 6));
    }
  }, [data, showAll]);

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
        {doctorData.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor}></DoctorCard>
        ))}
      </div>
      <Button
        onClick={() => setShowAll(!showAll)}
        name={showAll ? "Show Less" : "Show All"}
      ></Button>
    </div>
  );
};

export default DoctorsSection;
