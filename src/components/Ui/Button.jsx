import React from "react";

const Button = ({name}) => {
  return (
    <div>
      <button className="btn bg-[#176AE5] text-white rounded-4xl py-5 px-7">{name}</button>
    </div>
  );
};

export default Button;
