import React, { ReactNode } from "react";
import classes from "./BurgerImage.module.css";

interface BurgerImageProps {
  meat: number;
  cheese: number;
  salad: number;
}

export default function BurgerImage({ meat, salad, cheese }: BurgerImageProps) {
  const build = (ingredient: string, count: number) => {
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
      {build("meat", meat)}
      {build("cheese", cheese)}
      {build("salad", salad)}

      <div className={classes.bottombread}></div>
    </div>
  );
}