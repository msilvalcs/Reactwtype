import { useRef } from "react";
import { Link } from "react-router-dom";

import { useUsuarioLogado } from "../../shared/hooks";

export const Dashboard = () => {
  const counterRef = useRef(0);

  const {nomeDoUsuario} = useUsuarioLogado();

  return (
    <div>
      <Link to={"/login"}>Login</Link>
      <p> Dashboard </p>

      <p>{nomeDoUsuario}</p>

      <p>Contador: {counterRef.current} </p>

      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef.current)}>
        Log
      </button>
    </div>
  );
};
