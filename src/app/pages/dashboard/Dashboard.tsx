import { useCallback, useState } from "react";

export const Dashboard = () => {
  /* const counterRef = useRef(0);

  const {nomeDoUsuario, logout} = useUsuarioLogado(); */
  const [lista, setLista] = useState<string[]>(["Teste1", "Teste2", "Teste3"]);

  const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> =
    useCallback(
      (e) => {
        if (e.key === "Enter") {
          if (e.currentTarget.value.trim().length === 0) return;
          const value = e.currentTarget.value;
          e.currentTarget.value = "";
          setLista((oldlista) => {
            return [...oldlista, value];
          });
        }
      },
      [lista]
    );

  return (
    <div>
      <p>Lista</p>

      <input onKeyDown={handleInputKeyDown} />

      <ul>
        {lista.map((value, index) => {
          return <li>{value}</li>;
        })}
      </ul>

      {/*       <p>{nomeDoUsuario}</p>

<Link to={"/login"}>Login</Link>
      <p>Contador: {counterRef.current} </p>

      <button onClick={() => counterRef.current++}>Somar</button>
      <button onClick={() => console.log(counterRef.current)}>
        Log
      </button>
      <button onClick={logout}>Logout</button> */}
    </div>
  );
};
