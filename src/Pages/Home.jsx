import React from "react";
import HeroSection from "../components/HeroSection";
import DoctorsSection from "../components/DoctorsSection";
import { useLoaderData } from "react-router";
import CountUpCards from "../components/Ui/CountUpCards";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="bg-[#EFEFEF]">
      <HeroSection></HeroSection>
      <DoctorsSection data={data}></DoctorsSection>
      <CountUpCards></CountUpCards>
    </div>
  );
};

export default Home;
