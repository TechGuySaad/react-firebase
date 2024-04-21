import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCnMpnn8cUhvgKWvdZWT9JU0wPdLxpec3c",
  authDomain: "app-83d70.firebaseapp.com",
  projectId: "app-83d70",
  storageBucket: "app-83d70.appspot.com",
  messagingSenderId: "865000836606",
  appId: "1:865000836606:web:ce446724435098ed9f44af",
  databaseUrl: "https://app-83d70-default-rtdb.firebaseio.com",
};
export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
const FirebaseContext = createContext(null);

const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase();
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const signupUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password);
  };
  const signinUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(firebaseAuth, email, password).then((val) =>
      console.log("Success login")
    );
  };
  const putData = (key, data) => {
    set(ref(database, "users/saad"), data);
  };

  const postUsersData = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(firestore, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getUsersData = async () => {
    const querySnapshot = await getDocs(collection(firestore, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        putData,
        signinUserWithEmailAndPassword,
        postUsersData,
        getUsersData,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
