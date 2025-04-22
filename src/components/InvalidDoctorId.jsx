import React from "react";
import Button from "./Ui/Button";
import { Link } from "react-router";
import { FaRegRegistered } from "react-icons/fa";

const InvalidDoctorId = ({regNo}) => {
  return (
    <div className="text-center space-y-4 py-8">
      <h1 className="text-3xl font-bold">No Doctor Found!!!</h1>
      <p className="text-xl">No Doctor Found With This Registration Number:</p>
      <div className="flex items-center gap-2 justify-center">
      <FaRegRegistered size={25}/>
        <p className="text-xl">{regNo}</p>
      </div>
      <Link to="/">
        <Button name={"View All Doctor"}></Button>
      </Link>
    </div>
  );
};

export default InvalidDoctorId;
