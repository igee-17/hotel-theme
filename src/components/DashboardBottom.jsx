import React from "react";
import { dashboardData } from "../utils/dashboardData";
import DashboardItem from "../components/DashboardItem";
import DottedLine from "../components/DottedLine";

const DashboardBottom = () => {
  return (
    <div className="mt-[35px] flex gap-5 ">
      {/* LEFT */}
      <div className="bg-white py-[45px] px-[23px] w-full rounded-[30px]">
        {dashboardData.map((item, index) => {
          let limit = index + 1 !== dashboardData.length;
          return (
            <React.Fragment key={index}>
              <DashboardItem
                image={item.image}
                price={item.price}
                text={item.text}
                limit={limit}
              />
              {limit && <DottedLine />}
            </React.Fragment>
          );
        })}
      </div>
      {/* RIGHT */}
      <div className="bg-[#445C5AFF] w-[55%] text-white py-[35px] px-[22px] pb-[150px] rounded-[30px] flex flex-col gap-[40px] justify-between">
        <div className="flex gap-[60px]">
          <div className="flex gap-1 flex-col">
            <p className="text-[12px]">FROM</p>
            <h4 className="text-[18px]">JFK</h4>
          </div>
          <div className="flex items-end">
            <p>NON-STOP</p>
          </div>
          <div className="flex items-end flex-col gap-1">
            <p className="text-[12px]">TO</p>
            <h4 className="text-[18px]">BOM</h4>
          </div>
        </div>
        <img src="/assets/images/route.png" alt="route" />
        <div className="flex gap-[15px] items-center">
          <span className="px-6 py-3 bg-[#C99C33FF] rounded-[16px] text-white text-[10px] text-nowrap cursor-pointer">
            NON STOP
          </span>
          <span className="px-5 py-2  text-white text-[10px] text-nowrap cursor-pointer">
            ONE STOP
          </span>
          <span className="px-6 py-3  text-white text-[10px] text-nowrap cursor-pointer">
            MORE STOP
          </span>
        </div>
        <div>
          <p className="text-[12px]">PRICE</p>
          <div className="relative mt-[40px]">
            <div className="border border-[#a9aea8]"></div>
            <div className="h-8 w-8 bg-[#C99C33FF] rounded-full absolute top-[-16px] left-[10%] cursor-pointer">
              <div className="relative">
                <div className="absolute bottom-[-90px] left-[-57%]">
                  <div className="relative">
                    <div className="h-0 w-0 border-[15px] border-[#C99C33FF] border-t-transparent border-l-transparent border-r-transparent  bottom-0 translate-x-[67%]"></div>
                    <div className="bg-[#C99C33FF] px-5 py-1 rounded-[12px] text-[12px]">
                      $500
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-8 w-8 bg-[#C99C33FF] rounded-full absolute top-[-16px] left-[70%] cursor-pointer">
              <div className="relative">
                <div className="absolute bottom-[-90px] left-[-75%]">
                  <div className="relative">
                    <div className="h-0 w-0 border-[15px] border-[#C99C33FF] border-t-transparent border-l-transparent border-r-transparent  bottom-0 translate-x-[85%]"></div>
                    <div className="bg-[#C99C33FF] px-5 py-1 rounded-[12px] text-[12px]">
                      $2500
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBottom;
