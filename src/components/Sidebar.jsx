import React from "react";

const Sidebar = () => {
  return (
    <section className="w-[30%] max-w-[266px] text-white flex items-center justify-center flex-col h-full">
      <div className="w-full pt-[61px] pb-[38px] flex flex-col items-center bg-[#3c5654] rounded-t-[30px]">
        <img
          src="/assets/images/profilePic.jpg"
          alt="profile pic"
          className="mb-3"
        />
        <h1 className="mb-1 text-[18px] font-normal leading-6">ALEX JOHNSON</h1>
        <p className="text-[12px] leading-6 font-normal">
          alex.johnson@gmail.com
        </p>
      </div>
      <div className="bg-[#445C5AFF] overflow-hidden w-full py-[35px] flex flex-col rounded-b-[30px]">
        <div className="flex gap-5 items-center px-[35px] py-[15px] cursor-pointer">
          <img src="/assets/icons/home.jpg" alt="home icon" />
          <p className="text-[16px] leading-6 font-normal">DASHBOARD</p>
        </div>
        <div className="relative flex gap-5 items-center px-[35px] py-[15px] bg-[#E1ECEBFF] cursor-pointer">
          <img src="/assets/icons/flight.jpg" alt="home icon" />
          <p className="text-[16px] leading-6 font-normal text-[#565D6DFF]">
            FLIGHTS
          </p>
          {/* EDGES START */}
          <div className="absolute top-[-32px] right-[-30px]">
            <div className="w-[60px] h-[60px] bg-[#E1ECEBFF] relative overflow-hidden">
              <div className="absolute w-[60px] h-[60px] rounded-full bg-[#445C5AFF] top-[-28px] left-[-30px]"></div>
            </div>
          </div>
          <div className="absolute bottom-[-32px] right-[-30px]">
            <div className="w-[60px] h-[60px] bg-[#E1ECEBFF] relative overflow-hidden">
              <div className="absolute w-[60px] h-[60px] rounded-full bg-[#445C5AFF] bottom-[-28px] left-[-30px]"></div>
            </div>
          </div>
          <div className="absolute bottom-[-0px] h-full left-[-30px]">
            <div className="w-[65px] h-full bg-[#445C5AFF] relative overflow-hidden">
              <div className="absolute w-[60px] h-full rounded-full bg-[#E1ECEBFF] bottom-[-0px] right-[-33px]"></div>
            </div>
          </div>
          {/* EDGES END */}
        </div>
        <div className="flex gap-5 items-center px-[35px] py-[15px] cursor-pointer">
          <img src="/assets/icons/wallet.jpg" alt="home icon" />
          <p className="text-[16px] leading-6 font-normal">WALLET</p>
        </div>
        <div className="flex gap-5 items-center px-[35px] py-[15px] cursor-pointer">
          <img src="/assets/icons/report.jpg" alt="reports icon" />
          <p className="text-[16px] leading-6 font-normal">REPORTS</p>
        </div>
        <div className="flex gap-5 items-center px-[35px] py-[15px] cursor-pointer">
          <img src="/assets/icons/statistics.jpg" alt="stat icon" />
          <p className="text-[16px] leading-6 font-normal">STATISTICS</p>
        </div>
        <div className="flex gap-5 items-center px-[35px] py-[15px] cursor-pointer">
          <img src="/assets/icons/settings.jpg" alt="settings icon" />
          <p className="text-[16px] leading-6 font-normal">SETTINGS</p>
        </div>
        <div className="px-[35px] mt-[38px]">
          <p className="text-[#B3903BFF]">ACTIVE USERS</p>

          <div className="flex mt-5 items-center">
            <img
              src="/assets/icons/profiles1.jpg"
              alt="profile1"
              className="h-10 w-10 object-contain"
            />
            <img
              src="/assets/icons/profiles2.jpg"
              alt="profile2"
              className="h-10 w-10 object-contain translate-x-[-5px]"
            />
            <img
              src="/assets/icons/profiles3.jpg"
              alt="profile3"
              className="h-10 w-10 object-contain translate-x-[-11px]"
            />
            <img
              src="/assets/icons/profiles4.jpg"
              alt="profile4"
              className="h-10 w-10 object-contain translate-x-[-19px]"
            />
            <div className="h-10 w-10 object-contain translate-x-[-27px] rounded-full bg-[#C99C33FF] flex items-center justify-center">
              +70
            </div>
          </div>
        </div>
        <img src="/assets/images/map.png" alt="map image" className="my-10" />
      </div>
    </section>
  );
};

export default Sidebar;
