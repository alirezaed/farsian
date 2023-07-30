import { useState } from "react";
import classes from "./Ingredient.module.css";

export default function Ingredient({ title, count, onAdd, onRemove }) {
  const handleAdd = () => {
    if (count < 5) {
      onAdd(title.toLowerCase());
    }
    // setCounter((old) => {
    //   if (old < 5) {
    //     return old + 1;
    //   }
    //   return old;
    // });
  };

  const handleRemove = () => {
    if (count > 0) {
      onRemove(title.toLowerCase());
    }
    // setCounter((old) => {
    //   if (old > 0) {
    //     return old - 1;
    //   }
    //   return old;
    // });
  };
  return (
    <div className={classes.container}>
      <span className={classes.title}>{title}</span>
      <button onClick={handleRemove}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}
