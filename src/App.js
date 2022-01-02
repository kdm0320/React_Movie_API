import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("Hi");
    return () => console.log("Bye");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setsShowing] = useState(false);
  const onClick = () => setsShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
