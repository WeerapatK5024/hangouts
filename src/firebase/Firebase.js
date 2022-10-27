// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,getDocs,getDoc,collection } from "firebase/firestore";
import React,{useState,createContext, useEffect} from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_4TmqyGprvgExDL3SVk__DF34hw0Qm_Q",
    authDomain: "calendar-5a669.firebaseapp.com",
    projectId: "calendar-5a669",
    storageBucket: "calendar-5a669.appspot.com",
    messagingSenderId: "964814063322",
    appId: "1:964814063322:web:7cc8920a8ccfcbb1fd07e3",
    measurementId: "G-T448BWXQ7V"
};

export const FirebaseContext = createContext();//<-----------------------------
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export const FirebaseContextProvider = ({children}) => {
    //get database
    const [data,setData] = useState(null);
    const getData = () => {//get data
        getDocs(collection(db,'user')).then(query=>{
            if(!query.empty){
                const new_data = {};
                query.forEach(doc=>{
                    new_data[doc.id] = doc.data();
                });
                console.log(new_data)
                setData(new_data);
            }
        });
    };
    useEffect(()=>{
        getData();
    },[]);
    return (
        <FirebaseContext.Provider value={{data}}>
            {
                children
            }
        </FirebaseContext.Provider>
    )
}

