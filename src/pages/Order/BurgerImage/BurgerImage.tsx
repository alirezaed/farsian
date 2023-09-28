import React, { ReactNode } from "react";
import classes from "./BurgerImage.module.css";
import { IngredientEnum, IngredientType } from "../../../types";

// type IngredientValue = number;

// type BurgerProps = {
//   meat: IngredientValue;
//   cheese: IngredientValue;
//   salad: IngredientValue;
// }

interface BurgerImageProps {
  meat: number;
  cheese: number;
  salad: number;
}

export default function BurgerImage({ meat, salad, cheese }: BurgerImageProps) {
  

  // let name:string = "ali";
  // name = 2;

  // let lastname= "hasani";
  // lastname = 3;


  const build = (ingredient: IngredientType, count: number) => {
    console.log(ingredient)
    const result: ReactNode[] = [];
    for (let i = 1; i <= count; i++) {
      result.push(<div className={classes[ingredient]}></div>);
    }
    return result;
  };

  // const person = {
  //   name:'ali',
  //   lastname:'hasani'
  // }

  // console.log(person.name)
  // console.log(person["lastname"])

  return (
    <div className={classes.container}>
      <div className={classes.topbread}>
        <div className={classes.seeds1} />
        <div className={classes.seeds2} />
      </div>
      {meat + cheese + salad === 0 && (
        <div className={classes.empty}>Please Select Ingredients...</div>
      )}
      {build('meat', meat)}
      {build(IngredientEnum.cheese, cheese)}
      {build(IngredientEnum.salad, salad)}

      <div style={{borderStyle:'double'}} className={classes.bottombread}></div>
    </div>
  );
}
