import React from "react";
import logo from "./assets/logo.svg";

export default function HomeScreen({ setScreen }) {
  const alt = "logo ZapRecall";
  return (
    <div className="home">
      <img className="logo1" src={logo} alt={alt}></img>
      <h1>ZapRecall</h1>
      <div
        className="start"
        onClick={() => {
          setScreen(false);
        }}
      >
        Iniciar Recall!
      </div>
    </div>
  );
}
