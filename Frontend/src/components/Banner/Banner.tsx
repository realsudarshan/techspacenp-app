import React from "react";
import { useNavigate } from "react-router-dom";
import { Animation } from "../Animation/Animation";
import MovingComponent from "react-moving-text";
import Modal from "../Common/Popup/Popup";

const Banner: React.FC = () => {
  const navigate = useNavigate();
  const whatpshappLink = "https://api.whatsapp.com/send?phone=+977-9848255044";
  return (
    <div className='w-full flex relative flex-col gap-16 justify-center items-baseline pl-10 bg-[var(--primary-bg)] bg-[url("/photos/622.png")] bg-no-repeat bg-contain bg-right sm:h-[70vh] h-[50vh]'>
      <div className="flex flex-col items-start justify-center gap-6">
        <h3 className="text-[var(--light-text)] font-[500] text-5xl">
          Wecome to <span>Techspace</span>
        </h3>
        <h3 className="text-[17px] font-[450] brightness-100 flex items-center justify-center gap-2 pl-2 text-[var(--light-text)]">
          We provide{" "}
          <span className="border-[1px] w-52 p-2 rounded">
            {" "}
            <MovingComponent
              type="typewriter"
              duration="1500ms"
              delay="index * 100ms"
              direction="normal"
              timing="ease"
              dataText={["Web Development", "SEO", "Maintenance & Support","CMS","Devops","Api integration"]}
              iteration="infinite"
              fillMode="none"
            >
            
            </MovingComponent>
          </span>{" "}
          services.
        </h3>
      </div>
      <div className=" z-[2] flex  items-center justify-start gap-6">
        <a href={whatpshappLink}>
          {" "}
          <button className="w-[100px]  text-[var(--light-background)] sm:py-[7px] py-[4px] sm:text-[16px] text-[16px] font-[500] brightness-100 duration-200 hover:ring-[var(--button-color)] rounded-sm ring-[var(--primary-green)] ring-[2px]">
            Join Us
          </button>
        </a>
        <a onClick={() => navigate("/contact")}>
          {" "}
          <button className="w-[100px]  text-[var(--light-background)] sm:py-[7px] py-[4px] sm:text-[16px] text-[16px] font-[500] brightness-100 duration-200 hover:ring-[var(--button-color)] rounded-sm  ring-[var(--primary-green)] ring-[2px]">
            Contact Us
          </button>
        </a>{" "}
      </div>
      {/* <div className="absolute z-[1] left-0 top-0 w-full  ">
        <Animation/>
      </div> */}
    </div>
  );
};

export default Banner;
