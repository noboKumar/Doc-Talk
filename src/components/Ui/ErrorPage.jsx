import React from "react";
import { PiSmileySadLight } from "react-icons/pi";
import { TbMoodSadDizzy } from "react-icons/tb";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <TbMoodSadDizzy className="mx-auto" size={400} />
      <div className="space-y-5">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-4xl font-bold">Page Not Found</p>
        <p className="text-xl">
          The resource requested could not be found on this server!
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
