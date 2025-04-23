import { PiTrademarkRegisteredBold } from "react-icons/pi";
import { useLoaderData, useNavigate, useParams } from "react-router";
import { bookAppointment, getAppointments } from "../utilities/localStorage";
import { Bounce, toast } from "react-toastify";
import InvalidDoctorId from "../components/InvalidDoctorId";

const DoctorDetails = () => {
  const { regNo } = useParams();
  const data = useLoaderData();
  const doctorData = data.find(
    (doctor) => doctor.registration_number === regNo
  );
  const navigate = useNavigate();

  const {
    doctor_image,
    education,
    registration_number,
    name,
    speciality,
    current_working_hospital,
    consultant_fees,
    available_weekdays,
    available,
    designation,
  } = doctorData || {};

  const handleBookAppointment = () => {
    const appointments = getAppointments();
    const isExist = appointments.find((doctor) => doctor.id === doctorData.id);

    if (!isExist) {
      bookAppointment(doctorData);
      navigate("/my-bookings");
      toast.success(
        `Appointment Scheduled for ${doctorData.name} Successfully`,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    } else {
      return toast.error("Appointment Already Scheduled for Today", {
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
    }
  };

  const allRegNo = data.map((doctor) => doctor.registration_number);

  const isValidRegNo = allRegNo.includes(regNo);

  if (!isValidRegNo) {
    return <InvalidDoctorId regNo={regNo}></InvalidDoctorId>;
  }

  return (
    <div className="bg-[#EFEFEF]">
      <div className="py-5 w-11/12 mx-auto space-y-8">
        <div className="text-center space-y-4 bg-white px-5 py-5 md:py-16 md:px-28 rounded-2xl">
          <h1 className="text-3xl font-bold">Doctor’s Profile Details</h1>
          <p className="text-xl">
            Meet Our Doctors — "Care Beyond Prescriptions" <br />
            Our team of experienced and compassionate doctors is dedicated to
            providing top-quality healthcare with a personal touch. Each
            physician brings unique expertise <br /> across a wide range of
            specialties, ensuring comprehensive care tailored to your needs.
            From preventive care to complex treatments.
          </p>
        </div>
        <div className="md:flex md:space-y-0 space-y-5 gap-5 bg-white rounded-2xl p-10">
          <div>
            <img className="w-80 rounded-2xl" src={doctor_image} alt="doctor-image" />
          </div>
          <div className="space-y-2 flex-1/2">
            <h1 className="text-3xl font-semibold">{name}</h1>
            <p className="md:text-xl font-semibold text-[#0F0F0F99]">
              {education}, <span>{speciality}</span>
            </p>
            <p className="md:text-xl font-semibold text-[#0F0F0F99]">
              {designation}
            </p>
            <br />
            <p>
              <span className="md:text-xl font-semibold text-[#0F0F0F99]">
                Working at
              </span>
              <br />
              <span className="text-2xl font-semibold">
                {current_working_hospital}
              </span>
            </p>
            <hr className="border-dashed border border-[#0F0F0F99] my-4 w-full" />
            <div className="md:text-xl flex gap-2 font-semibold  text-[#0F0F0F99]">
              <span className="flex items-center">
                <PiTrademarkRegisteredBold size={25} /> Reg No:
                <hr />
              </span>
              <span>{registration_number}</span>
            </div>
            <hr className="border-dashed border border-[#0F0F0F99] my-4" />
            <div className="text-xl font-semibold md:flex items-center gap-4">
              Availability
              <span className="md:flex space-y-2 md:space-y-0 gap-4">
                {available_weekdays.map((week, index) => (
                  <p
                    key={index}
                    className="border-2 border-[#ffa200a2] bg-[#FFA0001A] text-[#ffa200] px-4 py-1 rounded-3xl"
                  >
                    {week}
                  </p>
                ))}
              </span>
            </div>
            <p className="text-xl font-semibold">
              Consultation Fee:{" "}
              <span className="text-[#176AE5] font-bold">
                Taka: {consultant_fees}
              </span>{" "}
              (inc. VAT){" "}
              <span className="text-[#176AE5]">Per consultation</span>
            </p>
          </div>
        </div>
        <div className="bg-white space-y-5 p-8 rounded-2xl">
          <h1 className="text-3xl font-bold text-center">
            Book an Appointment
          </h1>
          <hr className="border border-dashed" />
          <div className="md:flex items-center justify-between">
            <p className="text-xl font-semibold">Availability</p>
            <p
              className={`border rounded-4xl px-3 py-2 md:px-3.5 md:py-1.5 text-xl ${
                available
                  ? "bg-[#09982f31] border-[#09982F] text-[#09982F]"
                  : "bg-[#eb51593b] border-[#ff1b1b] text-[#ff1b1b]"
              }`}
            >
              {available
                ? "Doctor Available Today"
                : "Doctor Not Available Today"}
            </p>
          </div>
          <hr />
          <p
            className={`text-xl px-5 py-2 rounded-2xl ${
              available
                ? "bg-[#FFA0001A] text-[#FFA000]"
                : "bg-[#eb51593b] text-[#ff1b1b]"
            }`}
          >
            {available
              ? "Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation."
              : "Doctor is Not Available Today, Check Again Later."}
          </p>
          <button
            onClick={handleBookAppointment}
            disabled={!available}
            className="btn bg-[#176AE5] text-white rounded-4xl py-6 px-7 w-full text-xl"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
