import React from "react";

const BookingCard = ({ booking, handleCancel }) => {
  const { name, consultant_fees, education, speciality, id } = booking;
  return (
    <div className="space-y-3 bg-white p-8 rounded-2xl">
      <h1 className="text-2xl font-semibold">{name}</h1>
      <div className="flex items-center justify-between text-xl text-[#0F0F0F99]">
        <div>
          {education}, {speciality}
        </div>
        <p>Appointment Fee : {consultant_fees} Taka + Vat</p>
      </div>
      <hr className="border-dashed border border-[#0F0F0F99]/80 my-5" />
      <button
        onClick={() => handleCancel(id)}
        className="btn text-[#FF0000] border-[#FF0000] text-xl border-2 rounded-4xl w-full py-5 hover:bg-[#FF0000] hover:text-white cursor-pointer"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default BookingCard;
