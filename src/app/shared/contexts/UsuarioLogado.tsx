import { createContext } from "react";

//criando interface de propriedade.children para UsuarioLogadoProvider
interface IUsuarioLogadoProviderProps {
   children: React.ReactNode;
}

interface IUsuarioLogadoContextData{
    nomeDoUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProviderProps> = ({children}) => {
    return(
        <UsuarioLogadoContext.Provider value={{nomeDoUsuario:"Admin"}} >
            {children}
        </UsuarioLogadoContext.Provider>
    );
};