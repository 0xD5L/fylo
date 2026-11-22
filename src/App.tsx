import { useState } from "react";
import iconAccess from "./assets/icon-access-anywhere.svg";
import iconSecurity from "./assets/icon-security.svg";
import bgCurvy from "./assets/bg-curvy-desktop.svg";
import illustIntro from "./assets/illustration-intro.png";
import "./App.css";

function App() {
  return (
    <>
    {/* hero */}
      <div className="App min-h-screen relative z-40 flex flex-col items-center justify-center -mt-19">
        <img
          className="intro-img max-md:w-100 max-md:h-75 max-md:mt-20"
          src={illustIntro}
          width={900}
          height={900}
          alt="Illustration Intro"
        />
        <div className="intro flex justify-center items-center">
          <div className="intro-text w-1/2">
            <h1 className="text-5xl font-bold text-gray-300 text-center justify-center leading-13 max-md:text-[1.3rem] max-md:leading-8 max-md:text-center max-md:items-center">
              All your files in one secure location,<br/> accessible anywhere.
            </h1>
            <p className="text-gray-400 text-2xl mt-4  text-center flex max-md:text-[1.2rem]">
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
      <img className="w-full -mt-89 z-0 relative max-md:-mt-129" src={bgCurvy} width={2200} height={1000} alt="Hero" />
      <div className="bg-[#181F2B] grid grid-cols-2 p-19">
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={iconAccess} width={100} height={100} alt="iconAccess"/>
          <p className="text-white text-2xl font-semibold">Access your files, anywhere</p>
          <p className="text-white text-[1.3rem] text-center">The ability to use a smartphone, tablet, or computer<br/>to access your account means your files follow you<br/> everywhere.</p>
        </div>
        
        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={iconSecurity} width={100} height={100} alt=""/>
          <p className="text-white text-2xl font-semibold">Security you can trust</p>
          <p className="text-white text-[1.3rem] text-center">2-factor authentication and user-controlled encryption are <br/>just a couple of the security features we allow to help<br/>secure your files.</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={iconAccess} width={100} height={100} alt=""/>
          <p className="text-white text-2xl font-semibold">Real-time collaboration</p>
          <p className="text-white text-[1.3rem] text-center">Securely share files and folders  with friends, family and<br/> colleagues for live collaboration. No email attachments<br/> required</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <img src={iconAccess} width={100} height={100} alt=""/>
          <p className="text-white text-2xl font-semibold">Access your files, anywhere</p>
          <p className="text-white text-[1.3rem] text-center">The ability to use a smartphone, tablet, or computer<br/>to access your account means your files follow you<br/> everywhere.</p>
        </div>
      </div>
    </>
  );
}

export default App;
