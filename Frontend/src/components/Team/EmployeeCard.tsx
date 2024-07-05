import React from "react";
interface EmployeeCardProp {
  prop: { title: string; profession: string; image_url: string };
}
export const EmployeeCard : React.FC<EmployeeCardProp> = ({prop}) => {
 console.log("The base url is",prop.image_url);
  return (
    <div className="md:w-[300px] sm:w-[380px]  cursor-pointer rounded-tr-3xl rounded-bl-3xl  sm:hover:w-[400px] duration-500 group/info relative h-[400px] bg-[var(--light-background)] overflow-hidden">
      <div className="w-full backdrop:brightness-50 h-full   duration-150 ">
        console.log(prop.image_url);
        <img
          className="w-full object-cover relative h-full "
          src={prop.image_url}
          alt=""
        />
         <div className="w-full bottom-0 h-[70px] rounded-lg shadow-lg shadow-black blur-xl bg-[#0000009f] absolute"></div>
      </div>
      <div className=" left-5  duration-1000 px-2 right-0    opacity-0 group-hover/info:opacity-100 absolute bottom-10 group-hover/info:visible invisible">
        <h1 className="text-[20px] text-[var(--light-text)]  contrast-200 font-[550] ">
          {prop.title}
        </h1>
        <p className="text-[var(--light-secondary-text)] font-[450] contrast-100 ">{prop.profession }</p>
      </div>
    </div>
  );
};
