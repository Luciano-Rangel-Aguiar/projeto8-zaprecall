import React from "react";
import "./assets/reset.css";
import "./assets/style.css";

import Home from "./Home";

import Recal from "./Recal";

export default function App() {
  const [screen, setScreen] = React.useState(true);

  return <div>{screen ? <Home setScreen={setScreen} /> : <Recal />}</div>;
}
