import React, { useEffect, useState } from "react";
import { getAppointments, removeAppointment } from "../utilities/localStorage";
import BookingCard from "../components/BookingCard";
import EmptyBooking from "../components/Ui/EmptyBooking";
import Chart from "../components/Ui/Chart";

const MyBookings = () => {
  const [displayBookings, setDisplayBookings] = useState([]);
  
  useEffect(() => {
    const bookingsList = getAppointments();
    setDisplayBookings(bookingsList);
  }, []);

  const handleCancel = (id) => {
    removeAppointment(id);
    setDisplayBookings(getAppointments());
  };

  if (displayBookings.length < 1) return <EmptyBooking />;

  return (
    <div className="bg-[#EFEFEF] py-10">
      <div className="w-11/12 mx-auto">
      <Chart displayBookings={displayBookings}></Chart>
        <div className="text-center py-5 space-y-2">
          <h1 className="md:text-3xl text-2xl font-bold">
            My Today Appointments
          </h1>
          <p className="text-xl">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience.
          </p>
        </div>
        <div className="space-y-5">
          {displayBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              handleCancel={handleCancel}
            ></BookingCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
