import React from "react";
import data from "../../data.json"
import "./PlanPackage.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { PackageCard } from "../Cards/PlanPackageCard";





const PlanPackage: React.FC = () => {
  const {PlanPackages} = data
  return (
    <div className=" w-full flex flex-col items-center sm:items-baseline gap-10 py-[100px] ">
      <h3 className="md:text-2xl text-lg">
        We've got a plan that's perfect for you
      </h3>
      <div className=" w-[300px] sm:w-full   gap-9 flex flex-col items-center justify-center">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="sm:hidden mx-4  z-[1] flex  w-[270px] px-0 items-center justify-center"
        >
          {PlanPackages?.map((SingleItem, index) => (
            <SwiperSlide
              key={index}
              className="w-full  right-1 z-[1]  px-5  rounded-2xl  bg-white flex flex-col items-center gap-3 border-[1px] border-[var(--dark-secondary-text)] transition-all duration-400"
            >
           <PackageCard prop={SingleItem} key={index}/>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className=" hidden sm:flex  w-full items-center justify-center gap-10 flex-wrap">
          {PlanPackages?.map((SingleItem) => {
            return <PackageCard prop={SingleItem} key={SingleItem.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlanPackage;
