import React from "react";
import Button from "./Button";
import { Link } from "react-router";

const EmptyBooking = () => {
  return (
<div className="bg-[#EFEFEF]">
<div className="text-center min-h-[calc(100vh-470px)] space-y-2 py-10 w-11/12 mx-auto">
      <h1 className="text-2xl md:text-4xl font-bold">
        You Have Not Booked Any Appointment Yet
      </h1>
      <p className="md:text-xl">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <Link to="/">
        <Button name={"Book An Appointment"}></Button>
      </Link>
    </div>
</div>
  );
};

export default EmptyBooking;
