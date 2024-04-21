import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseApp } from "./context/Firebase";
import { useFirebase } from "./context/Firebase";
import { useEffect, useState } from "react";

import "./App.css";

const firebaseAuth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [collectionName, setCollectionName] = useState("");
  const { postUsersData, getUsersData } = useFirebase();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // user is logged in
        // console.log("Hello ", user);
        setUser(user);
      } else {
        // console.log("User is logged out");
        // user is logged out
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <>
        <h1>Firebase React App</h1>
        <SignupPage />
        <SigninPage />
      </>
    );
  } else {
    return (
      <>
        <h1>{user.email}</h1>
        <label> Enter Collection Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setCollectionName(e.target.value);
          }}
          value={collectionName}
        />
        <label> Enter Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
        <label> Enter Your Age:</label>
        <input
          type="number"
          placeholder="Enter your age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age}
        />
        <button
          onClick={() => {
            const data = {
              name: name,
              age: age,
            };
            postUsersData(collectionName, data);
          }}
        >
          Submit form
        </button>
        <button
          onClick={() => {
            getUsersData();
          }}
        >
          Get Data
        </button>
        <button
          onClick={() => {
            signOut(firebaseAuth);
          }}
        >
          Log Out
        </button>
      </>
    );
  }
}

export default App;
