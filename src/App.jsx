// import { getDatabase, ref, set } from "firebase/database";
import SignupPage from "./pages/Signup";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { app } from "./firebase";
import "./App.css";

// const db = getDatabase(app);

const auth = getAuth(app);

function App() {
  // const signupUser = () => {
  //   // createUserWithEmailAndPassword(
  //   //   auth,
  //   //   "saadreh5@gmail.com",
  //   //   "saadrahman123"
  //   // ).then((userCredential) => {
  //   //   console.log(userCredential);
  //   //   // const user = userCredential.user;
  //   // });
  //   // .catch((error) => {
  //   //   const errorCode = error.code;
  //   //   const errorMessage = error.message;
  //   //   // ..
  //   // });
  // };
  // const putData = () => {
  //   set(ref(db, "users/saad"), {
  //     id: 1,
  //     name: "Saad Rahman",
  //     age: 25,
  //   });
  // };
  return (
    <>
      <h1>Firebase React App</h1>
      <SignupPage />
    </>
  );
}

export default App;
