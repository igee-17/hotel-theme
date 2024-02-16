import React from "react";

const DashboardCenter = () => {
  return (
    <div className="flex justify-between mt-10 items-center">
      <h3 className="text-[18px] text-[#171A1FFF] font-bold">RESULT (25)</h3>
      <div className="flex gap-8 items-center bg-[#E1ECEBFF] rounded-[30px] px-5 py-2">
        <div className="flex gap-8 items-center justify-center bg-white rounded-[30px] px-10 py-3 cursor-pointer">
          <p className="text-[12px] text-[ #565D6DFF] font-bold">FILTER</p>
        </div>
        <div className="flex gap-4 items-center bg-white rounded-[30px] px-10 py-3 cursor-pointer">
          <p className="text-[12px] font-bold text-[#565D6DFF]">
            TICKET OF CLASS
          </p>
          <img
            src="/assets/icons/arrowDown.jpg"
            alt="location icon"
            className="h-6 w-6 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardCenter;
