import {  initializeApp } from "firebase-admin/app";
import admin from "firebase-admin"
import { getFirestore, Firestore } from "firebase-admin/firestore";
import {config} from "./config.js";
import ServiceAccount  from "../techspace-9t9k-firebase-adminsdk-vtagy-708ba868ca.json" assert {type: "json"};


const ConnectFirbaseDB = async (): Promise<Firestore | undefined> => {
  try {
     initializeApp({
      
      ...config.firebaseConfig,
      credential: admin.credential.cert(ServiceAccount as any)
    });
    getFirestore();
    return 
  } catch (error) {
    console.error(`Failed to connect while connecting ${error}`);
  }
};


export { ConnectFirbaseDB };
