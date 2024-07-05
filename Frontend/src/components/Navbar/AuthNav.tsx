import React from "react";
import {
  MessageCircleCodeIcon,
  PhoneCallIcon,
  Facebook,
  XIcon,
  LinkedinIcon,
} from "lucide-react";
import Navbar, { Suscribe } from "./Navbar";

const AuthNav: React.FC = () => {
  const [IsSticky, setIsSticky] = React.useState<boolean>(false);

  React.useEffect(() => {
    const scrollation = () => {
      if (window.scrollY > 0) {
        setIsSticky(!IsSticky);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", scrollation);

    return () => {
      window.removeEventListener("scroll", scrollation);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={`flex ${
          IsSticky
            ? "opacity-0 duration-150 transition-all   translate-y-[-100px]"
            : "opacity-[1]  translate-y-[0px]  "
        } duration-150 transition-all z-30  w-full gap-3  items-center justify-between sm:px-5 px-[4px]  bg-[var(--dark-background)] py-1`}
      >
        <div className="flex sm:gap-1 gap-[4px]">
          <div className="flex items-center justify-center gap-[0px]">
            <MessageCircleCodeIcon className=" sm:w-8 sm:h-5  w-[18px] text-[var(--light-text)]" />
            <p className="text-[11px] sm:text-[14x] t text-[var(--light-text)] ">
              sarojgt326@gmail.com
            </p>
          </div>
          <div className="flex items-center justify-center gap-[0px]">
            <PhoneCallIcon className=" sm:w-8 sm:h-5  w-[18px] text-[var(--light-text)]" />
            <p className=" text-[11px] sm:text-[14x] text-[var(--light-text)] ">
              +977-9825506216
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/profile.php?id=61556366108784" target="_blank">
            {" "}
            <Facebook className=" sm:w-8 sm:h-5  w-[18px] text-[var(--light-text)]   " />
          </a>
          <a href="https://www.instagram.com " target="_blank">
            
            <XIcon className=" sm:w-8 sm:h-5  w-[18px] text-[var(--light-text)]  " />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <LinkedinIcon className=" sm:w-8 sm:h-5  w-[18px] text-[var(--light-text)]  " />
          </a>
        </div>
      </div>
      <div
        className={`  flex z-[2]   justify-between  px-2 transition-all duration-150 ${
          IsSticky ? "fixed shadow-xl top-[0px]" : "sticky top-[25px]"
        }  z-[+1]    w-full   justify-center items-center bg-slate-100`}
      >
        <Navbar />
        <Suscribe />
      </div>
    </div>
  );
};

export default AuthNav;
