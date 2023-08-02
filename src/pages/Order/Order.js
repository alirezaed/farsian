import { useCallback, useState } from "react";
import Button from "../../components/Button/Button";
import BurgerImage from "./BurgerImage/BurgerImage";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Order.module.css";

export default function Order() {
  // const [meat, setMeat] = useState(0);
  // const [cheese, setCheese] = useState(0);
  // const [salad, setSalad] = useState(0);

  const initState = {
    meat: 0,
    cheese: 0,
    salad: 0,
  };
  const [ingredients, setIngredients] = useState(initState);

  const { meat, cheese, salad } = ingredients;
  // const f = () => {};
  // const f2 = useCallback(() => {}, []);

  const handleAdd = useCallback((ingredient) => {
    setIngredients((p) => ({ ...p, [ingredient]: p[ingredient] + 1 }));

    // switch (ingredient) {
    //   case "meat":
    //     // setMeat((p) => p + 1);
    //     setIngredients((p) => ({ ...p, meat: p.meat + 1 }));

    //     break;
    //   case "cheese":
    //     // setCheese((p) => p + 1);
    //     setIngredients((p) => ({ ...p, cheese: p.cheese + 1 }));
    //     break;
    //   case "salad":
    //     // setSalad((p) => p + 1);
    //     setIngredients((p) => ({ ...p, salad: p.salad + 1 }));
    //     break;
    //   default:
    //     break;
    // }
  }, []);

  // const field3 = "xx"

  // const student = {
  //   'average':20,
  //   'name':'213123',
  //   [field3]: 123123,
  // }

  // const student2 = {
  //   'average':20,
  //   'name':'213123',
  //   xx: 123123
  // }
  // console.log(student.xx)

  // const fieldName = 'average';
  // console.log(student.average);
  // console.log(student["average"])
  // console.log(student[fieldName])

  const handleRemove = useCallback((ingredient) => {
    setIngredients((p) => ({ ...p, [ingredient]: p[ingredient] - 1 }));
    // switch (ingredient) {
    //   case "meat":
    //     setMeat((p) => p - 1);
    //     break;
    //   case "cheese":
    //     setCheese((p) => p - 1);
    //     break;
    //   case "salad":
    //     setSalad((p) => p - 1);
    //     break;
    //   default:
    //     break;
    // }
  }, []);

  const handleReset = () => {
    setIngredients({
      meat: 0,
      cheese: 0,
      salad: 0,
    });
  };

  const calcultePrice = () => {
    const fixedPrice = 5000;
    const meatPrice = meat * 2000;
    const cheesePrice = cheese * 1000;
    const saladPrice = salad * 1000;
    return fixedPrice + meatPrice + cheesePrice + saladPrice;
  };

  const handleOrder = () => {
    fetch("http://burgerbuilder.aedalat.ir/order/add", {
      method: "POST",
      headers: {
        Authorisation: "tokenasdasdasdas",
        "Content-type": "application/json",
      },
      body: {
        meat: meat,
        salad: salad,
        cheese: cheese,
      },
    });
    // axios.post("/order/add", { meat: meat, salad: salad, cheese: cheese });
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
      <div className={classes.center}>
        <Button title="Order" onClick={handleOrder} />
        <Button title="Reset" onClick={handleReset} />
      </div>
    </div>
  );
}
