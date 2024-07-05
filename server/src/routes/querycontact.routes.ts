import { Router } from "express";
import { SubmitQueryForm } from "../controllers/QueryForm.js";

 const router = Router();

router.route("/contact/submit-queryform").post(SubmitQueryForm);


export default router