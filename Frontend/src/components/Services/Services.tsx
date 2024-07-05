import { ArrowRightCircleIcon } from "lucide-react";
import { ServiceTypes } from "../../Model/ServiceTypes";
import data from "../../data.json"
import React from "react";
import { useNavigate } from "react-router-dom";

interface PropType {
  prop: ServiceTypes;
}

const ListOfServices: React.FC<PropType> = ({ prop }: PropType) => {
  const navigate = useNavigate();

  const HandleToRender = () => {
    navigate("/services");
  };

  return (
    <div
      className="grid grid-cols-6 duration-200 rounded-l-md hover:ring-[4px] pr-8 group/service gap-3 cursor-pointer bg-white w-[350px]  items-center -md"
      onClick={HandleToRender}
    >
      <div className="w-[130px] h-[90px] col-span-3">
        <img src={prop.image} alt="" className=" w-full h-full rounded-l-md " />
      </div>
      <div className="flex  flex-col justify-center col-span-1 items-baseline w-[160px]">
        <h3 className="text-[16px] font-[500] contrast-75 brightness-75">{prop.title}</h3>
        <h3 className="text-sm brightness-100 font-[500] text-[var(--dark-secondary-text)] ">
          {prop.completedProject}
        </h3>
      </div>
      <button className=" flex justify-end items-center group-hover/service:text-[var(--primary-color)]  tranistion-all duration-150 col-span-2">
        {" "}
        <ArrowRightCircleIcon />
      </button>
    </div>
  );
};

const Services = () => {
  const {ServicesData} = data
  return (
    <div className="w-full flex md:flex-row flex-col justify-around items-center py-10 pb-[100px] gap-10  ">
      <div className="flex flex-col items-baseline gap-10">
        <div className="flex flex-col gap-2 items-baseline flex-wrap min-w-[100px] max-w-[400px]">
          <h3 className="text-3xl font-[500] contrast-75 ">What can i do for your needs</h3>
          <p className="text-[15px] pl-2 font-[500]  text-[var(--dark-background)] contrast-75 ">
            Our team is dedicated to understanding your needs & providing modern
            customized sulution as demand of our customers. weather you require
            a customize website, ecommerce website, or a complex web
            application, we are here to bring your digital vision into reality. select the plan & collabrate with us
            to bring your vision into reality.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-7">
          <div className="flex flex-col items-baseline gap-[0px]">
            <span className="text-[18px] font-[500] contrast-75 brightness-75">+6</span>
            <span className="text-sm brightness-100 font-[450] text-[var(--dark-secondary-text)] ">
              project completed
            </span>
          </div>
          <div className="flex flex-col items-baseline gap-[0px]">
            <span className="text-[18px] font-[500] contrast-75 brightness-75">+6</span>
            <span className="text-sm brightness-100 font-[450] text-[var(--dark-secondary-text)] ">
              contract network
            </span>
          </div>
          <div className="flex flex-col items-baseline gap-[0px]">
            <span className="text-[18px] font-[500] contrast-75 brightness-75">+6</span>
            <span className="text-sm brightness-100 font-[450] text-[var(--dark-secondary-text)] ">
              community network
            </span>
          </div>
          <div className="flex flex-col items-baseline gap-[0px]">
            <span className="text-[18px] font-[500] contrast-75 brightness-75">
              1 year
            </span>
            <span className="text-sm brightness-100 font-[450] text-[var(--dark-secondary-text)] ">
              experience
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-5 ">
        {ServicesData?.map((SingleService, index) => (
          <ListOfServices prop={SingleService} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
