
import React from "react";
import { useUsuarioLogado } from "../../../shared/hooks";

interface IButtonLoginProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;

  onClick?: () => void;
  onPressEnter?: () => void;
}

export const ButtonLogin = React.forwardRef<HTMLButtonElement, IButtonLoginProps>((props, ref) => {
  
 /*  const {nomeDoUsuario} = useUsuarioLogado(); */

  return (
    <button type={props.type} 
    ref={ref}
    onClick={props.onClick}  
    onKeyDown={(e) => e.key === "Enter"
          ? props.onPressEnter && props.onPressEnter()
          : undefined
      }>
      {/* {nomeDoUsuario}  */}{props.children}
    </button>
  );
});
