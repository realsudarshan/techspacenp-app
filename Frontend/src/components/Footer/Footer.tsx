import emailjs from "@emailjs/browser";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FooterData = () => {
  return (
    <div className="flex w-full flex-wrap gap-8 sm:justify-evenly justify-start items-baseline ">
      <div className="flex flex-col gap-[7px] text-[var(--light-text)]">
        <h3 className="text-lg">Social</h3>
        <div className="flex flex-col">
          <a href="#">facebook</a>
          <a href="#">Github</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
          <a href="#">Dribble</a>
        </div>
      </div>
      <div className="flex flex-col gap-[7px] text-[var(--light-text)]">
        <h3 className="text-lg">Services</h3>
        <div className="flex flex-col">
          <a href="#">Website Design</a>
          <a href="#">Full stack development</a>
          <a href="#">Ecommerce development</a>
          <a href="#">Web application security</a>
          <a href="#">SEO optimization</a>
          <a href="#">Web analytic & Tracking</a>
        </div>
      </div>
      <div className="flex flex-col gap-[7px] text-[var(--light-text)] ">
        <h3 className="text-lg">Company</h3>
        <div className="flex flex-col">
          <a href="#">about us</a>
          <a href="#">our works</a>
          <a href="#">blog</a>
          <a href="#">testiminol</a>
          <a href="#">Request a quote</a>
        </div>
      </div>
      <div className="flex flex-col gap-[7px] text-[var(--light-text)]">
        <h3 className="text-lg">payment</h3>
        <div className="flex flex-col">
          <a href="#">Esewa</a>
          <a href="#">Khalti</a>
          <a href="#">Ime Pay</a>
          <a href="#">NIC Asia</a>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  const [Email, setEmail] = useState<string>("");
  const [SuscribingTechspace, setSuscribingTechspace] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setSuscribingTechspace(true);
    if (Email === "") {
      toast.error("email required", {
        position: "top-center",
      });
      setSuscribingTechspace(false);
      return;
    }
    if (form.current === null) {
      return console.error("reference of form is null");
    }

    emailjs
      .sendForm("service_blgqfon", "template_kpkhvvc", form?.current, {
        publicKey: "sD-UiYCl_eZJRRZH8",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("congruatulation, You suscribed techspace", {
            position: "top-center",
          });
          setSuscribingTechspace(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("failed due to connection error", {
            position: "top-center",
          });
        }
      );
  };
  return (
    <div className="flex relative flex-col items-baseline gap-[10px] bg-[var(--dark-background)] mt-20 px-10 py-24 sm:py-16 ">
      <div
        id="Suscribe"
        className="absolute  w-full sm:top-[-15%] top-[-8%] left-0 flex items-center justify-center px-2"
      >
        <div className="  min-w-[300px] max-w-[800px] items-center  rounded-md flex md:flex-row flex-col   md:justify-evenly justify-center md:gap-7 gap-[3px] py-5 sm:py-10 px-[10px]  bg-gradient-to-t from-[var(--primary-color)] to-[var(--primary-bg)]">
          <span className="md:text-xl text-[18px] text-[var(--light-secondary-text)]">
            Join us today for exclusive member discount
          </span>
          <form action="" ref={form} onSubmit={sendEmail}>
            <input
              type="email"
              placeholder="email"
              name="from_suscribe"
              value={Email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              className="py-[4px] px-[7px] outline-none rounded-tl-md rounded-bl-md"
            />
            <button
              type="submit"
              value="Send"
              className="bg-[var(--dark-background)] rounded-tr-md rounded-br-md py-[5px] text-[var(--light-text)] px-3 "
            >
              {SuscribingTechspace ? "loading..." : "suscribe"}
            </button>
          </form>
        </div>
      </div>
      <img src="https://res.cloudinary.com/dhnvpzxt6/image/upload/v1708875424/techspacelogo_ewufvo.png" className="w-[50px] h-[50px] rounded-full"/>
      <div className="w-full">
        <FooterData />
      </div>

      <ToastContainer />
    </div>
  );
};
