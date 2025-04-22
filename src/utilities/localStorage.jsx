import { Bounce, toast } from "react-toastify";

export const getAppointments = () => {
  const appointments = localStorage.getItem("appointments");

  if (appointments) return JSON.parse(appointments);
  return [];
};

export const bookAppointment = (doctorData) => {
  const appointments = getAppointments();
  appointments.push(doctorData);
  localStorage.setItem("appointments", JSON.stringify(appointments));
};

export const removeAppointment = (id) => {
  const appointments = getAppointments();
  const remainingAppointments = appointments.filter(
    (appointment) => appointment.id !== id
  );
  localStorage.setItem("appointments", JSON.stringify(remainingAppointments));

  toast.error("Appointment Canceled", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};
