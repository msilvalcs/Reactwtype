import { useState } from "react";

export const Login = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleEntrar = () =>{
        console.log(email)
        console.log(password)
    }

    return(
        <div>
            {/* Formulário para logar */}
            <form>
                
                <label>
                    <span>E-mail:</span>
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </label>
                <input />
        
                <label>
                    <span>Senha:</span>
                    <input type="password" value={password} onChange={e => setEmail(e.target.value)}/>
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>

            </form>
        </div>
    );
}