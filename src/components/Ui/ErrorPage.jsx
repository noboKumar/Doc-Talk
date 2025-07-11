import React from "react";
import { TbMoodSadDizzy } from "react-icons/tb";
import Button from "./Button";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="py-5">
      <TbMoodSadDizzy className="mx-auto" size={350} />
      <div className="space-y-5 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-4xl font-bold">Page Not Found</p>
        <p className="text-xl">
          The resource requested could not be found on this server!
        </p>
        <Link to="/">
          <Button name="Back To Home"></Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
