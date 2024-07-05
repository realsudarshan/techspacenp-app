import { ConnectFirbaseDB } from "../db/firebase.js";

const sendinguserData = async () => {
  const Database = await ConnectFirbaseDB();
  try {
    if (Database) {
      const addUser = Database.collection("Users").doc("user");

      await addUser.set({
        name: "Santosh GT",
        age: "20 years old",
        Idendity: "Nepali",
        passion: "Full stack developer",
      });
      console.log("User Data send successfully");
    }
    console.log("Firebase instance is undefined");
  } catch (error) {
    console.log("Failed while adding data " + error);
  }
};

export { sendinguserData };
