import { Body, Head, Html, Tailwind } from "@react-email/components";
import * as React from "react";
import { QueryContactType, QueryFormType } from "../models/QueryContactTypes";

const QueryForm = (
  contactdetails: QueryContactType,
  responseData: QueryFormType[]
) => {
  return (
    <Tailwind
      config={{
        content: ["./index.css", "./*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {},
        },
        plugins: [
          {
            tailwindcss: {},
            autoprefixer: {},
          },
        ],
      }}
    >
      <Html>
        <Head></Head>

        <Body>
          <div className=" flex flex-col items-center w-full ">
            <div className="bg-[var(--primary-color)] flex flex-col w-full mx-5 p-2  bg-slate-400 ">
              <h3 className="text-center">Techspace Customer Query services</h3>
              <div>
                <div className="flex flex-col items-baseline justify-center">
                  <h3>Conctact Details</h3>

                  <div className="flex flex-col items-start justify-center gap-0">
                    <h3 className="text-[15px] font-serif">
                      Name: {contactdetails.fullname}
                    </h3>
                    <h3 className="text-[15px] font-serif">
                      {" "}
                      email : {contactdetails.email}
                    </h3>
                    <h3 className="text-[15px] font-serif">
                      contact no: {contactdetails.phone}
                    </h3>
                    <h3 className="text-[15px] font-serif">
                      message : {contactdetails.message}
                    </h3>
                  </div>
                </div>

                <div>
                  <h3>QueryData of User</h3>
                  <div>
                    {responseData?.map((item: QueryFormType, index: number) => (
                      <div key={index}>
                        <div>{item.questions}</div>
                        <div>{item.answer}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Body>
      </Html>
    </Tailwind>
  );
};

export default QueryForm;
