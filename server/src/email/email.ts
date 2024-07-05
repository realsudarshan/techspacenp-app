import nodemailer from "nodemailer";
import { ApiResponse } from "./../utils/ApiResponse.js";
import { ApiError } from "./../utils/ApiError.js";

const transportor = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    type: "oauth2",
    user: process.env.EMAIL,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});
transportor.verify((error, sucess) => {
  if (!sucess) {
    console.log(`Error found : ${error}`);
    return new ApiError(
      "Your gmail connection withn nodemailer was failed",
      200,
      error?.message
    );
  }
  new ApiResponse(200, "message sent successfully");
  console.log(sucess);
});

export { transportor };
