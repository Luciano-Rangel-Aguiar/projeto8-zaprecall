import React from "react";
import Cards from "./Cards";
import Result from "./Result";
import logoSmall from "./assets/logo.svg";

export default function Content() {
  const [counter, setCounter] = React.useState(0);
  const [accept, setAccept] = React.useState(0);
  const [result, setResult] = React.useState([]);

  return (
    <>
      <div className="content">
        <div className="topo">
          <img src={logoSmall} alt="logopequeno" />
          <h1>ZapRecall</h1>
        </div>

        <Cards
          counter={counter}
          setCounter={setCounter}
          accept={accept}
          setAccept={setAccept}
          result={result}
          setResult={setResult}
        />
      </div>

      <div className="footer">
        <Result
          counter={counter}
          setCounter={setCounter}
          accept={accept}
          setAccept={setAccept}
        />

        <div className="icon">
          {result.map((value, index) => {
            if (index < result.length) {
              return (
                <ion-icon
                  key={index}
                  class={value.color}
                  name={value.name}
                ></ion-icon>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
