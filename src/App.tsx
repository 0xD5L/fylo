import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import illustIntro from "./assets/illustration-intro.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="App min-h-screen flex flex-col items-center justify-center">
        <img
          className="intro-img"
          src={illustIntro}
          width={900}
          height={900}
          alt="Illustration Intro"
        />
        <div className="intro flex justify-between items-center">
          <div className="intro-text w-1/2">
            <h1 className="text-5xl font-bold text-gray-300 text-center justify-center" >
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className="text-gray-400 text-lg mt-4">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <button className="bg-cyan-400 text-white px-6 py-3 rounded-md mt-6 hover:bg-cyan-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
