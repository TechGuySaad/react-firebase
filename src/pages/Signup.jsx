import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useState } from "react";

const auth = getAuth(app);

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((val) =>
      alert("Success")
    );
  };
  return (
    <div className="signup-page">
      <label>Email</label>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        type="email"
        placeholder="Enter your email..."
        required
      />
      <label>Password</label>
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        type="password"
        placeholder="Enter your password..."
        required
      />
      <button onClick={createUser}>Sign Up</button>
    </div>
  );
};

export default SignupPage;
