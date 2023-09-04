import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs  } from "firebase/firestore/lite";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId:  process.env.REACT_APP_PROJECT_ID,
  storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:  process.env.REACT_APP_APP_ID
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export async function getCities(db: any) {
  const citiesCol = collection(db, 'test');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;

}
export { db };
