// import { useState } from "react";
import reactLogo from "./assets/stripe-logo2.svg";
import viteLogo from "/greensock-logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Gsap + Stripe</h1>

      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </>
  );
}

export default App;
