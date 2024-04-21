import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import "./App.css";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/saad"), {
      id: 1,
      name: "Saad Rahman",
      age: 25,
    });
  };
  return (
    <>
      <h1>Firebase React App</h1>
      <button onClick={putData}>Put Data</button>
    </>
  );
}

export default App;
