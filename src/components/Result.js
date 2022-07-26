import party from "./assets/party.svg";
import sad from "./assets/sad.svg";

export default function Result({ counter, accept }) {
  if (counter === 4 && accept === 4) {
    return (
      <>
        <div className="congrat">
          <img src={party} alt="party" />
          <h2>Parabéns!</h2>
        </div>

        <p>Você não esqueceu de nenhum flashcard!</p>

        <span>{counter}/4 CONCLUÍDOS</span>
      </>
    );
  } else if (counter === 4 && accept < 4) {
    return (
      <>
        <div className="congrat">
          <img src={sad} alt="party" />
          <h2>Putz...</h2>
        </div>

        <p>Ainda faltam alguns... Mas não desanime!</p>

        <span>{counter}/4 CONCLUÍDOS</span>
      </>
    );
  } else {
    return (
      <>
        <span>{counter}/4 CONCLUÍDOS</span>
      </>
    );
  }
}
