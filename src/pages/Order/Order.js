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
    const meatPrice = meat * 5000;
    const cheesePrice = cheese * 4000;
    const saladPrice = salad * 2000;
    return fixedPrice + meatPrice + cheesePrice + saladPrice;
  };
  let intervalid;
  const testThread = () => {
    // console.log('clicked!')
    // setTimeout(()=>{
    //   console.log('function run shod!')
    // }, 5000);
    // console.log('aftet timeout code')

    // console.log('clicked!')
    // intervalid = setInterval(()=>{
    //   console.log('function run shod!')
    // }, 2000);
    // console.log('aftet interval code')
    console.log("clicked");
    const p1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("666");
      }, 3000);

      setTimeout(() => {
        reject("not found");
      }, 2000);
    });

    p1.then((result) => {
      console.log("Hoooora ", result);
    })
      .catch((error) => {
        console.log("Noooooo ", error);
      })
      .finally(() => {
        console.log("DONE");
      });
  };

  const cancelInterval = () => {
    clearInterval(intervalid);
  };

  const handleOrder = () => {
    // 1 thread
    const p1 = new Promise();

    const bodyInObject = {
      meat: meat,
      salad: salad,
      cheese: cheese,
      total_price: calcultePrice(),
      token: "",
    };
    const bodyInString = JSON.stringify(bodyInObject);
//https://burgerbuilderapi.aedalat.ir/
    fetch("http://localhost:5012/orders/AddOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyInString,
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
        <Button title="Test" onClick={testThread} />
        <Button title="Cancel" onClick={cancelInterval} />
      </div>
    </div>
  );
}
