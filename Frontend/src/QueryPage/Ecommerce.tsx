import React, {
  FormEvent,
  useRef,
  useEffect,
  useState,
  ChangeEvent,
} from "react";
import "./StepWise.css";
import { EcommerceQueryData, QueryDataType } from "../Model/QueryDataType";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ContactFormType } from "../Model/ContactFormTypes";
import axios from "axios";
import ReactLoading from 'react-loading';

interface SelectedQueryType {
  questions?: string;
  answer?: string;
}

const Ecommerce: React.FC = () => {
  const submitbuttonref = useRef<HTMLButtonElement | null>(null);

  const navigate = useNavigate();

  const [ActiveStep, setActiveStep] = useState<number | 0>(0);
  const [StoreQueryData, SetStoreQueryData] = useState<QueryDataType>();
  const [QuerySelectedData, SetQuerySelectedData] = useState<string | "">("");
  const [StoreObjectInLocalStorage, SetStoreObjectInLocalStorage] = useState<
    SelectedQueryType[]
  >([]);
  const [QueryContactForm, setQueryContactForm] = useState<ContactFormType>({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [SendingData, SetSendingData] = useState<boolean>(false);
  useEffect(() => {
    SetStoreObjectInLocalStorage((prev: SelectedQueryType[]) => [
      ...prev,
      {
        questions: StoreQueryData?.question,
        answer: QuerySelectedData,
      },
    ]);
  }, [QuerySelectedData]);

  const FormDataChange = (
    event: ChangeEvent<HTMLInputElement>,
    fields: string
  ) => {
    setQueryContactForm((prev) => ({
      ...prev,
      [fields]: event.target.value,
    }));
  };

  const PassingRef = () => {
    submitbuttonref.current?.click();
  };
  const TakingRef = () => {
    const checkQuerySelection = StoreQueryData?.options?.find(
      (singleoption) => singleoption === QuerySelectedData
    );

    if (checkQuerySelection !== QuerySelectedData && ActiveStep < 6) {
      return toast.error("choose given options", {
        position: "top-center",
      });
    }

    setActiveStep((prev) => (prev >= 6 ? 6 : prev + 1));

    if (ActiveStep >= 6) {
      return PassingRef();
    }
  };

  const QueryDataSelection = (event: ChangeEvent<HTMLInputElement>) => {
    SetQuerySelectedData(event.target.value);
  };

  useEffect(() => {
    const questionAndoption = EcommerceQueryData.find(
      (singlequery) => singlequery.id == ActiveStep
    );
    SetStoreQueryData(questionAndoption);
  }, [ActiveStep]);

  const HandleSubmitData = async (event: FormEvent) => {
    event.preventDefault();
    if (
      (QueryContactForm["email"] &&
        QueryContactForm["fullname"] &&
        QueryContactForm["message"] &&
        QueryContactForm["phone"]) === ""
    ) {
      return toast.error("All fields are required", {
        position: "top-center",
      });
    }

    SetSendingData(true);
    await axios
      .post(`/api/v1/user/contact/submit-queryform`, [
        QueryContactForm,
        ...StoreObjectInLocalStorage,
      ])
      .then(() => {
        toast.success(`we will contact soon`);
        SetSendingData(false);
      })
      .then(() => {
       setTimeout(() => {
        navigate("/")
       }, 3000);
      })
      .catch(() => {
        toast.error(`failed while sending data`);
      });
  };
  return (
    <div className=" h-[100vh] w-full flex  flex-col gap-10 justify-start py-10 items-center">
      <div className=" sm:px-10 px-2 flex w-full flex-col justify-between sm:gap-10 gap-4 items-stretch">
        <div className="flex w-full  sm:gap-10 gap-2  justify-center  py-5 px-6 bg-slate-400 items-center">
          {EcommerceQueryData?.map((singleItem) => (
            <div key={singleItem.id} className="step-item z-0">
              <div
                className={` ${
                  ActiveStep === singleItem.id ? "active" : "step"
                }`}
              >
                {singleItem.id}
              </div>
            </div>
          ))}
        </div>

        <form
          action=""
          key={StoreQueryData?.id}
          className="flex flex-col gap-[25px] items-start w-full"
          onSubmit={HandleSubmitData}
        >
          <label htmlFor="" className=" text-[17px] sm:text-[30px]">
            {StoreQueryData?.question}
          </label>
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="flex flex-col sm:items-center items-stretch gap-3 w-full">
              {ActiveStep > 5 ? (
                <div className=" gap-4 flex flex-col items-start w-full  sm:w-[50%] bg-gradient-to-t from-[var(--primary-color)] to-[var(--primary-bg)]  py-10 rounded-md px-2 sm:px-8">
                  {StoreQueryData?.ContactFormType?.map((singleform) => (
                    <div className="flex flex-col w-full  ">
                      <label htmlFor="" className="text-[var(--light-text)]">
                        {singleform.name}{" "}
                      </label>
                      <input
                        type={singleform.type}
                        className="w-full py-1 px-3 rounded-md outline-none"
                        value={
                          QueryContactForm[
                            singleform.name as keyof ContactFormType
                          ]
                        }
                        onChange={(event) =>
                          FormDataChange(event, singleform.name)
                        }
                      />
                    </div>
                  ))}
                </div>
              ) : (
                StoreQueryData?.options?.map((singleoption) => (
                  <div className="flex items-start w-full justify-start gap-2">
                    <input
                      type={StoreQueryData.type}
                      name="answer1"
                      id="name1"
                      value={singleoption}
                      onChange={(event) => QueryDataSelection(event)}
                      className="w-5 h-5 p-3 cursor-pointer"
                    />
                    <label id="name1">{singleoption}</label>
                  </div>
                ))
              )}
            </div>
          </div>
          <button
            className="hidden"
            ref={submitbuttonref}
            type="submit"
            value={"Send"}
          >
            submit
          </button>
        </form>
      </div>

      <div className="w-full  flex justify-center gap-20 items-center">
        <button
          className="bg-[var(--primary-color)] w-[100px] text-center py-2 px-4 rounded-md text-[var(--light-text)]"
          onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          back
        </button>
        <button
          className=" flex justify-center items-center bg-[var(--primary-color)] w-[100px] text-center py-2 px-4 rounded-md text-[var(--light-text)]"
          onClick={() => TakingRef()}
        >
          {ActiveStep >= 6 ? (SendingData ? <ReactLoading className="flex items-center justify-center" type="spinningBubbles" height={"20px"} width={"20px"}/> : "send") : "next"}
        </button>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Ecommerce