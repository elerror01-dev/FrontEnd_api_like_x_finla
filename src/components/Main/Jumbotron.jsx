import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "./Jumbotron.css";

function Jumbotron({ texto }) {
  const { c1, setC1, setCopyright } = useContext(AppContext);

  return (
    <>
      <p>Jumbotron</p>
      <h1>{texto}</h1>
      <h1 className="jumbotron__title jumbotron__title--purple">{c1}</h1>
      <button
        onClick={() => {
          setCopyright("Ahora yo soy el dueño");
        }}
      >
        Copy right
      </button>
    </>
  );
}

export default Jumbotron;
