import React from "react";
import classes from "./Ingredient.module.css";
import { IngredientEnum } from "../../../types";

interface IngredientProps {
  title: IngredientEnum;
  count: number;
  onAdd: (title:IngredientEnum) => void;
  onRemove: (title:IngredientEnum) => void;
}
function Ingredient({ title, count, onAdd, onRemove }: IngredientProps) {
  console.log("ingredient rendered", title);
  const handleAdd = () => {
    if (count < 5) {
      onAdd(title);
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
      onRemove(title);
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

// HOC High Ordered Component    function (Component) => Component
export default React.memo(Ingredient);
