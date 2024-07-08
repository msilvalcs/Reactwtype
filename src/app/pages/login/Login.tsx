import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const buttonEntrar = useRef<HTMLButtonElement>(null);

  /* FUNÇÃO PARA CONTROLAR QUANDO BLOCO DE CÓDIGO SERÁ EXECUTADO
    
   useEffect(() => {
    if (window.confirm('Você é homem?')) {
        console.log('Homem')
    } else {
        console.log('Mulher')
    }
   }, []);

   useEffect(() => {
        console.log(email)
    }, [email]);

    useEffect(() => {
        console.log(password)
    }, [password]); */

  /* FUNÇÃO PARA REALIZAR UMA OPERAÇÃO */
  const emailLength = useMemo(() => {
    console.log("Executou");
    return email.length * 1000;
  }, [email.length]);

  /* FUNÇÃO QUE NÃO SERÁ RECONSTRUÍDA TODA VEZ QUE UM COMPONENT FOR ALTERADO */
  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <div>
      {/* Formulário para logar */}
      <form>
        <Link to={"/dasboard"}>Tela inicial</Link>
        <p>Quantidade de caracteres no email: {emailLength} </p>

        <label>
          <span>E-mail:</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? inputPasswordRef.current?.focus() : undefined
            }
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            type="password"
            value={password}
            ref={inputPasswordRef}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" ? buttonEntrar.current?.focus() : undefined
            }
          />
        </label>

        <button type="button" onClick={handleEntrar} ref={buttonEntrar}>
          Entrar
        </button>
      </form>
    </div>
  );
};
