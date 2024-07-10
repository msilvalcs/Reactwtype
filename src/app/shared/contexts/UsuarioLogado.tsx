import { createContext, useCallback, useEffect, useState } from "react";

//criando interface de propriedade.children para UsuarioLogadoProvider
interface IUsuarioLogadoProviderProps {
   children: React.ReactNode;
}

interface IUsuarioLogadoContextData{
    nomeDoUsuario: string;
    logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {
    const [nome, setNome] = useState('');

    useEffect(()=>{
        setTimeout(()=>{
            setNome('Lucas');
        }, 300);
    });

    const handleLogout = useCallback(() => {
        console.log('Logout executado')
    }, []);
    return(
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario:nome, logout:handleLogout}} >
            {children}
        </UsuarioLogadoContext.Provider>
    );
};