import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputEnterRef = useRef<HTMLButtonElement>(null);

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

        <InputLogin
          label="Email"
          value={email}
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          label="Senha"
          value={password}
          type="password"
          onChange={(newValue) => setPassword(newValue)}
          onPressEnter={() => inputEnterRef.current?.focus()}
          ref={inputPasswordRef}
        />

        <ButtonLogin
          ref={inputEnterRef}
          type="button"
          onClick={handleEntrar}
          children={<>Entrar</>}
        />
        <ButtonLogin
          type="button"
          onClick={handleEntrar}
          children={<>Cadastrar</>}
        />
      </form>
    </div>
  );
};
