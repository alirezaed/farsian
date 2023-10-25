import React from "react";
import classes from "./Button.module.css";
import { useThemeContext } from "../../context/ThemeContext";

interface ButtonProps {
  title: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({ title, onClick, disabled }: ButtonProps) {
  // const age = 12;

  // let age2: boolean[] = [true,false];

  // const addre:Address={
  //   street:"valiasr",
  //   city:"tehran",
  //   region:1,
  // }

  // interface Address {
  //   street:string,
  //   city:string,
  //   region:number
  // }

  const { theme } = useThemeContext();

  return (
    <button
      className={theme == "light" ? classes.button : classes.button_dark}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
