import { BadgeCheck } from "lucide-react";
import React from "react";
import { PlanPackageTypes } from "../../Model/ServiceTypes";

interface PackageCardProp {
  prop: PlanPackageTypes;
}

export const PackageCard: React.FC<PackageCardProp> = ({ prop }) => {
  const whatpshappLink = "https://api.whatsapp.com/send?phone=+977-9848255044";
  return (
    <div className=" w-[300px] px-8 py-3 sm:py-4 rounded-2xl  bg-white flex flex-col items-center gap-3 border-[1px] border-[var(--dark-secondary-text)] transform sm:hover:scale-[1.1] transition-all duration-400">
      <h3 className="text-xl">{prop.plan}</h3>
      <h3 className="text-[15px] font-semibold">
        Rs {prop.PackagePrice}
        <span></span>
      </h3>
      <p className="text-sm text-[var(--dark-secondary-text)]">
        {prop.plan} Features upto {prop.totalPage} pages
      </p>
      <a
        className="w-full"
        href={`${whatpshappLink}&text=${encodeURIComponent(
          `Welcome to techspace \n You have selected ${prop.plan} package \n can you provide what type of project you wanna build?`
        )}`}
        target="_blank"
      >
        <button className="w-full bg-[var(--dark-background)] duration-150  text-[var(--light-text)] hover:bg-[var(--primary-green)] py-[5px] px-[10px]  rounded-md">
          Get Started
        </button>
      </a>

      <a className="w-full " href={whatpshappLink}>
        <button className="w-full bg-[(--light-background)] hover:shadow-lg  duration-200 border-[1px] border-[var(--dark-secondary-text)] py-[5px] px-[10px]  rounded-md">

          Chat To sales
        </button>
      </a>
      <div className="flex flex-col items-start justify-center">
        <h3 className="text-lg font-semibold">Features</h3>
        <p className="text-sm text-[var(--dark-secondary-text)]">
          Everything in our {prop.plan === "Basic" ? "Normal" : prop.plan === "Standard" ? "Basic" : prop.plan === "Premium" ? "Standard": "" } plan plus
        </p>
        <div className="flex pt-2 flex-col items-start justify-center gap-1.5 py-1">
          {prop?.features.map((feature: string, index: number) => (
            <div key={index} className="flex gap-1 justify-start ">
              <BadgeCheck />
            <span className="text-[15px] ">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
