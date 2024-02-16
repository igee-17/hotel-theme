import React from "react";

const DashboardTop = () => {
  return (
    <div className="bg-white rounded-[30px] flex flex-col gap-4 p-[30px]">
      <div className="grid grid-cols-[50%_1fr_1fr] gap-5">
        <div className="flex gap-8 items-center bg-[#E1ECEBFF] rounded-[30px] px-8 py-2">
          <div className="flex gap-4 items-center">
            <img
              src="/assets/icons/location.jpg"
              alt="location icon"
              className="h-6 w-6 object-contain"
            />
            <p className="text-[12px] font-bold text-[#565D6DFF]">
              NEW YORK (JFK)
            </p>
          </div>
          <img
            src="/assets/icons/direction.png"
            alt="direction icon"
            className="h-10 w-10 cursor-pointer"
          />
          <div className="flex gap-4 items-center">
            <img
              src="/assets/icons/location.jpg"
              alt="location"
              className="h-6 w-6 object-contain"
            />
            <p className="text-[12px] font-bold text-[#565D6DFF]">
              MUMBAI (BOM)
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center bg-[#E1ECEBFF] rounded-[30px] px-5 py-2">
          <div className="flex gap-4 items-center">
            <img
              src="/assets/icons/calendar.jpg"
              alt="location icon"
              className="h-6 w-6 object-contain"
            />
            <p className="text-[12px] font-bold text-[#565D6DFF]">
              16 FEB 2024
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center bg-[#E1ECEBFF] rounded-[30px] px-5 py-2">
          <div className="flex gap-4 items-center">
            <img
              src="/assets/icons/profile.jpg"
              alt="location icon"
              className="h-6 w-6 object-contain"
            />
            <p className="text-[12px] font-bold text-[#565D6DFF]">2 TRAVELER</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[50%_1fr_1fr] gap-5">
        <div className="flex gap-8 items-center bg-[#E1ECEBFF] rounded-[30px] p-1">
          <div className="flex gap-4 items-center bg-[#445C5AFF] py-4 px-5 rounded-[30px] cursor-pointer">
            <p className="text-[12px] text-white font-bold">NEW YORK (JFK)</p>
          </div>
          <div className="flex gap-4 items-center py-4 px-5 ">
            <p className="text-[12px] text-[#565D6DFF] font-bold cursor-pointer">
              ROUND TRIP
            </p>
          </div>
          <div className="flex gap-4 items-center py-4 px-5 ">
            <p className="text-[12px] text-[#565D6DFF] font-bold cursor-pointer">
              MULTI CITY
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center bg-[#E1ECEBFF] rounded-[30px] px-5 py-2">
          <div className="flex gap-4 items-center">
            <img
              src="/assets/icons/chair.jpg"
              alt="location icon"
              className="h-6 w-6 object-contain"
            />
            <p className="text-[12px] font-bold text-[#565D6DFF]">
              FIRST CLASS
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center justify-center bg-[#C99C33FF] rounded-[30px] px-5 py-2 cursor-pointer">
          <p className="text-[12px] text-white font-bold ">SEARCH</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
