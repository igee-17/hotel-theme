import React from "react";

const DashboardItem = ({ image, price, text, limit }) => {
  return (
    <div className="relative grid grid-cols-5">
      {/* CIRCLE */}
      {limit && (
        <>
          <div className="bg-[#E1ECEBFF] h-8 w-8 absolute bottom-[-55px] left-[-40px] rounded-full"></div>
          <div className="bg-[#E1ECEBFF] h-8 w-8 absolute bottom-[-55px] right-[-40px] rounded-full"></div>
        </>
      )}
      <div className="flex items-center justify-center">
        <img
          src={`/assets/images/${image}.png`}
          alt="emirates"
          className="h-[65px] w-[75px] object-contain"
        />
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-[20px] text-[#565D6DFF] font-bold">JFK</h1>
        <p className="text-[12px]">13:00</p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center">
        <h3 className="text-[7px] text-[#171A1FFF]">{text}</h3>
        <p className="text-[#CDA444FF] text-[12px]">11H 20M</p>
        <p className="text-[#565D6DF] text-[12px]">NON-STOP</p>
      </div>
      <div className="flex h-full flex-col items-center justify-center">
        <h3 className="text-[20px] text-right w-[50%]">BOM</h3>
        <p className="text-[12px] text-right w-[50%]">14:20</p>
      </div>
      <div className="flex flex-col justify-center items-end  gap-4">
        <p className="font-bold">${price}</p>
        <span className="px-6 py-3 bg-[#C99C33FF] rounded-[17px] text-white text-[7px] cursor-pointer">
          BOOK NOW
        </span>
      </div>
    </div>
  );
};

export default DashboardItem;
