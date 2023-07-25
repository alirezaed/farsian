import Button from "../../components/Button/Button";
import BurgerImage from "./BurgerImage/BurgerImage";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Order.module.css";

export default function Order() {
  return (
    <div className={classes.container}>
      <BurgerImage meat={2} salad={1} cheese={1}/>
      <Ingredient title="Meat"/>
      <Ingredient />
      <Ingredient />
      <div>Price : {0}</div>
      <Button title="Order" onClick={() => {}} />
    </div>
  );
}
