import React from "react";
import Icon1 from "../../assets/Group@1x.png";
import Icon2 from "../../assets/Group.png";
import Icon3 from "../../assets/fi_7804340.png";
import Icon4 from "../../assets/Crowd Patient.png";
import CountUp from "react-countup";

const CountUpCards = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
      <div className="space-y-2 bg-white rounded-2xl px-12 py-10">
        <img className="mx-auto" src={Icon1} alt="" />
        <h1 className="text-6xl font-bold">
            <CountUp start={0} end={199} suffix="+" duration={5}></CountUp>
        </h1>
        <p className="text-2xl text-[#0F0F0F99] font-semibold">Total Doctors</p>
      </div>
      <div className="space-y-2 bg-white rounded-2xl px-12 py-10">
        <img className="mx-auto" src={Icon2} alt="" />
        <h1 className="text-6xl font-bold">
        <CountUp start={0} end={467} suffix="+" duration={5}></CountUp>
        </h1>
        <p className="text-2xl text-[#0F0F0F99] font-semibold">Total Reviews</p>
      </div>
      <div className="space-y-2 bg-white rounded-2xl px-12 py-10">
        <img className="mx-auto" src={Icon3} alt="" />
        <h1 className="text-6xl font-bold">
        <CountUp start={0} end={1900} suffix="+" duration={5}></CountUp>
        </h1>
        <p className="text-2xl text-[#0F0F0F99] font-semibold">Patients</p>
      </div>
      <div className="space-y-2 bg-white rounded-2xl px-12 py-10">
        <img className="mx-auto" src={Icon4} alt="" />
        <h1 className="text-6xl font-bold">
        <CountUp start={0} end={300} suffix="+" duration={5}></CountUp>
        </h1>
        <p className="text-2xl text-[#0F0F0F99] font-semibold">Total Stuffs</p>
      </div>
    </div>
  );
};

export default CountUpCards;
