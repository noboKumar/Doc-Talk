export const getAppointments = () => {
  const appointments = localStorage.getItem("appointments");

  if (appointments) return JSON.parse(appointments);
  return [];
};

export const bookAppointment = (doctorData) => {
  const appointments = getAppointments();
  const isExist = appointments.find((doctor) => doctor.id === doctorData.id);

  if (isExist) return console.log("already added");

  appointments.push(doctorData);
  localStorage.setItem("appointments", JSON.stringify(appointments));
};
