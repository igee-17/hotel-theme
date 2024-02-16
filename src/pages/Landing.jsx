import React from "react";
import DashboardBottom from "../components/DashboardBottom";
import DashboardCenter from "../components/DashboardCenter";
import DashboardTop from "../components/DashboardTop";
import Sidebar from "../components/Sidebar";

const Landing = () => {
  return (
    <div className="bg-[#E1ECEBFF] p-14 relative overflow-hidden">
      <div className="bg-[#C99C33FF] h-[25%] w-[25%] absolute top-[-50px] left-[-70px] rounded-full "></div>
      <div className="bg-[rgb(211,226,226)] h-[800px] w-[800px] absolute bottom-[-200px] left-[-70px] rounded-full "></div>
      <div className="bg-[rgb(211,226,226)] h-[800px] w-[100%] absolute bottom-[-200px] right-[-70px] rounded-full "></div>
      <div className="shadow-2xl w-full rounded-[30px] flex max-w-[1400px] mx-auto relative z-10 bg-[#E1ECEBFF]">
        {/* SIDEBAR */}
        <Sidebar />
        <section className="bg-[#E1ECEBFF] w-full h-full p-[37px] tracking-wide rounded-[30px]">
          <DashboardTop />
          <DashboardCenter />
          <DashboardBottom />
        </section>
      </div>
    </div>
  );
};

export default Landing;
