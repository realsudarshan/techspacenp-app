import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import data from "../../data.json";
import business1Img from "../../../photos/assets/pexels-fauxels-3183197.jpg";
import { EmployeeCard } from "../../components/Team/EmployeeCard";
import { useNavigate } from "react-router-dom";

export const About: React.FC = () => {
  return (
    <div className="w-full 2xl:container flex flex-col lg:px-20 px-10 py-10  gap-10 items-center justify-center">
      <div className="flex  flex-col items-center justify-center gap-2">
        <h1 className="text-5xl contrast-200 font-[550] ">Our Company</h1>
        <p className="text-xl ">
          When you need to improve your company, contact us.
        </p>
      </div>
      <div className="h-[450px] w-full ">
        <img
          className="w-full h-full rounded-tr-3xl object-cover rounded-bl-3xl"
          src={business1Img}
          alt=""
        />
      </div>
      <WorkWithClients />
      <CompanyCultures />
      <EmployeerContainer />
    </div>
  );
};

// How we work with clients
export const WorkWithClients = () => {
  const navigate = useNavigate();
  const [close, setClose] = useState<boolean>(true);
  return (
    <React.Fragment>
      <div className=" flex w-full h-full sm:flex-row flex-col items-stretch  sm:items-start justify-evenly  gap-5">
        <div className=" w-full sm:w-1/2 flex flex-col items-start justify-center gap-10">
          <h1 className="text-4xl flex flex-col gap-1 contrast-150 font-[500] ">
            How we works with our <span>Clients</span>
          </h1>
          <button
            onClick={() => navigate("/contact")}
            className="py-2 hover:bg-[var(--primary-bg)] duration-150 px-5 rounded bg-[var(--primary-color)] text-[18px] font-[600] contrast-100 brightness-100 text-[var(--light-text)] flex items-center justify-start gap-1 hover:gap-2   "
          >
            Contact Us <ArrowRight className="size-5 " />
          </button>
        </div>
        <div className="flex w-full sm:w-1/2 flex-col justify-center gap-10 items-start">
          <p className="text-[14px] brightness-200 contrast-150 font-[500] text-[var(--dark-text)] ">
            At our web development company, we start by understanding our
            clients' needs through an initial consultation. We then create a
            tailored strategy and detailed plan.{" "}
          </p>
          <p className="text-[14px] brightness-200 contrast-150 font-[500] text-[var(--dark-text)] ">
            Our expert team develops the website with regular client updates and
            feedback. After completion, we offer ongoing support and maintenance
            to ensure top performance. Our focus on transparency, quality, and
            client satisfaction defines our service.
          </p>
        </div>
      </div>
      {/* <Modal close={close} closeModal={() => setClose(!close)}>
        <ValidationContactForm />
      </Modal> */}
    </React.Fragment>
  );
};

// Company Cultures
export const CompanyCultures = () => {
  const { trustyData } = data;
  const data1 = trustyData.slice(0, 2);

  const data2 = trustyData.slice(2, 4);
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl font-[600] contrast-150 brightness-100 ">
          Our Core Values
        </h1>
        <p className="text-[17px] font-[500] contrast-150 brightness-100 text-[var(--dark-text)]  ">
          Our values shape the cultures of our organization and define the
          character of our company
        </p>
      </div>
      <div className="flex flex-col gap-8 items-center justify-center w-full">
        <div className="w-full flex sm:flex-row flex-col gap-8 sm:gap-4  justify-evenly items-center">
          {data1?.map((item, index) => (
            <CultureCard prop={item} key={index} />
          ))}
        </div>
        <div className="w-full flex sm:flex-row flex-col  gap-8 sm:gap-4 justify-evenly items-center">
          {data2?.map((item, index) => (
            <CultureCard prop={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Culture Cards
interface CultureCardProp {
  prop: { title: string; description: string };
}

const CultureCard: React.FC<CultureCardProp> = ({ prop }) => {
  return (
    <div className=" border-[var(--light-secondary-text)]  sm:w-[400px] w-full px-8  h-[170px] flex flex-col items-center justify-center gap-7 bg-[var(--light-foreground)] rounded-tr-3xl rounded-bl-3xl ">
      <h1 className="text-xl font-[500] contrast-125 brightness-100 ">
        {" "}
        {prop.title}{" "}
      </h1>
      <p className="text-[var(--dark-text)] font-[500] contrast-125 brightness-100 text-sm ">
        {" "}
        {prop.description}{" "}
      </p>
    </div>
  );
};
//--------------------------------*******************-----------------------------

// Employeer Container
export const EmployeerContainer = () => {
  const { Employee } = data;
  console.log(Employee);
  return (
    <div className="w-full flex flex-col gap-10 items-center justify-center">
      <div className="w-full flex md:flex-row flex-col items-center justify-evenly gap-4">
        <h1 className="sm:text-4xl text-3xl md:w-1/2 w-full flex flex-col gap-1 contrast-150 font-[500] ">
          Experience and integrity by our team
        </h1>
        <p className="text-[14px] w-full md:w-1/2 brightness-200 contrast-150 font-[500] text-[var(--dark-text)]">
          Our experienced team excels in delivering diverse web development
          projects, staying current with the latest technologies. We specialize
          in e-commerce platforms, corporate websites, and custom applications.
        </p>
      </div>
      <div className="w-full flex md:flex-row flex-col items-center  justify-center gap-5">
        {Employee?.map((data, index) => (
          <EmployeeCard prop={data} key={index} />
        ))}
      </div>
    </div>
  );
};
