import express from "express";
import cors from "cors";
import path from "path";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.static("client"));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/dist/", express.static(path.join(process.cwd(), "public")))

import queryform from "./routes/querycontact.routes.js";

app.use("/api/v1/user", queryform);

export { app };
  
  

  
  
