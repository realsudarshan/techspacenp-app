import express from "express";
import { AsyncHandler } from "../utils/Asynhandler.js";
import { render } from "@react-email/render";
import { transportor } from "../email/email.js";
import QueryForm from "../emails/QueryForm.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { QueryContactType } from "../models/QueryContactTypes.js";

export const SubmitQueryForm = AsyncHandler(
  async (req: express.Request, res: express.Response) => {
    const responseData = req.body;

    const contactDetails = responseData?.find(
      (contact: QueryContactType) => contact.fullname
    );

    const renderHtml = render(QueryForm(contactDetails, responseData));

    const emailForm = {
      from: process.env.EMAIL,
      to: contactDetails.email,
      subject: "QueryForm of User",
      html: renderHtml,
    };

    transportor.sendMail(emailForm, (err: any, success : any) => {
      if (!success) {
        console.log(`Error occured while sending : ${err}`);
        return res
          .status(400)
          .json(new ApiError("Your message failed", 400, err?.message));
      }
      console.log(`Succesfully : ${success}`);
      return res
        .status(200)
        .json(new ApiResponse(200, "message was sent successfully"));
    });
  }
);
