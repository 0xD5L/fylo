import { useState } from "react";
import heroImg from "./assets/hero.png";
import bgCurvy from "./assets/bg-curvy-desktop.svg";
import illustIntro from "./assets/illustration-intro.png";
import "./App.css";

function App() {
  return (
    <>
    {/* hero */}
      <div className="App min-h-screen relative z-40 flex flex-col items-center justify-center -mt-19">
        <img
          className="intro-img"
          src={illustIntro}
          width={900}
          height={900}
          alt="Illustration Intro"
        />
        <div className="intro flex justify-center items-center">
          <div className="intro-text w-1/2">
            <h1 className="text-5xl font-bold text-gray-300 text-center justify-center leading-13" >
              All your files in one secure location,<br/> accessible anywhere.
            </h1>
            <p className="text-gray-400 text-2xl mt-4  text-center flex">
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <button className="mx-auto mt-6 flex w-60 items-center justify-center rounded-lg bg-cyan-400 px-6 py-3 text-white hover:bg-cyan-500">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <img className="w-full -mt-89 z-0 relative" src={bgCurvy} width={2200} height={1000} alt="Hero" />
      <div className="bg-[#181F2B]">
        
      </div>
    </>
  );
}

export default App;
