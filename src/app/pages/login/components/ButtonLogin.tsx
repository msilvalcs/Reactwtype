import React from "react";

interface IButtonLoginProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;

  onClick?: () => void;
  onPressEnter?: () => void;
}

export const ButtonLogin = React.forwardRef<HTMLButtonElement, IButtonLoginProps>((props, ref) => {
  return (
    <button type={props.type} 
    ref={ref}
    onClick={props.onClick}  
    onKeyDown={(e) => e.key === "Enter"
          ? props.onPressEnter && props.onPressEnter()
          : undefined
      }>
      {props.children}
    </button>
  );
});
