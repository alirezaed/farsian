import { useState } from "react";
import Button from "../../components/Button/Button";
import BurgerImage from "./BurgerImage/BurgerImage";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Order.module.css";

export default function Order() {
  const [meat, setMeat] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [salad, setSalad] = useState(0);

  const handleAdd = (ingredient) => {
    switch (ingredient) {
      case "meat":
        setMeat((p) => p + 1);
        break;
      case "cheese":
        setCheese((p) => p + 1);
        break;
      case "salad":
        setSalad((p) => p + 1);
        break;
      default:
        break;
    }
  };

  const handleRemove = (ingredient) => {
    switch (ingredient) {
      case "meat":
        setMeat((p) => p - 1);
        break;
      case "cheese":
        setCheese((p) => p - 1);
        break;
      case "salad":
        setSalad((p) => p - 1);
        break;
      default:
        break;
    }
  };

  const calcultePrice = () => {
    const fixedPrice = 5000;
    const meatPrice = meat * 2000;
    const cheesePrice = cheese * 1000;
    const saladPrice = salad * 1000;
    return fixedPrice + meatPrice + cheesePrice + saladPrice;
  };

  return (
    <div className={classes.container}>
      <BurgerImage meat={meat} salad={salad} cheese={cheese} />
      <Ingredient
        title="Meat"
        count={meat}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
      <Ingredient
        title="Cheese"
        count={cheese}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
      <Ingredient
        title="Salad"
        count={salad}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
      <div className={classes.price}>Price : {calcultePrice()}</div>
      <Button title="Order" onClick={() => {}} />
    </div>
  );
}
