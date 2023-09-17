import React from 'react';
import classes from "./Button.module.css";

interface ButtonProps{
  title:string, 
  onClick:()=>void, 
  disabled?: boolean
}

export default function Button({ title, onClick, disabled }:ButtonProps) {

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
  

  return (
    <button className={classes.button} disabled={disabled} onClick={onClick}>
      {title}
    </button>
  );
}
