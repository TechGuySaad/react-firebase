import { useState } from "react";

import { useFirebase } from "../context/Firebase";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signinUserWithEmailAndPassword } = useFirebase();

  const loginUser = () => {
    signinUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="signin-page">
      <h1>Sign In Page</h1>
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
      <button onClick={loginUser}>Log in</button>
    </div>
  );
};

export default SigninPage;
