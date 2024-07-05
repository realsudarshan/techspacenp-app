import { ConnectFirbaseDB } from "../db/firebase.js";

export const RetrieveData = async() => {
try {
    const Database = await ConnectFirbaseDB();
    const user = await Database?.collection("Users").get();
    user?.forEach((singleUser) => {
        console.log(singleUser.id, '=>', singleUser.data());
 })

} catch (error) {
    console.log(`Error while getting data ${error}`)
}    
}

