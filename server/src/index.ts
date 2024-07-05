import { app } from "./app.js";
import { firebaseConfig } from "firebase-functions/v1";
import functions from "firebase-functions"



firebaseConfig();
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("port started at " + PORT);
});

export function DeployApp() {
  functions.https.onRequest(app)
}


app.get("/", (req, res) => {
  res.redirect("index.html")
})


