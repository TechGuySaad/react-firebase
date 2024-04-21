import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseApp } from "./context/Firebase";

import { useEffect, useState } from "react";

import "./App.css";

const firebaseAuth = getAuth(firebaseApp);

function App() {
  const [user, setUser] = useState(null);
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
