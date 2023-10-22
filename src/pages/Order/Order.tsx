import React from "react";
import { useCallback, useState } from "react";
import Button from "../../components/Button/Button";
import BurgerImage from "./BurgerImage/BurgerImage";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Order.module.css";
import axios from "../../axios";
import Loading from "../../components/Loading/Loading";
import { IngredientEnum } from "../../types";

interface StateType {
  cheese: number;
  salad: number;
  meat: number;
}

export default function Order() {
  // const [meat, setMeat] = useState(0);
  // const [cheese, setCheese] = useState(0);
  // const [salad, setSalad] = useState(0);
  let ing: "salad" | "meat" | "cheese" | undefined;

  const initState: StateType = {
    meat: 0,
    cheese: 0,
    salad: 0,
  };
  const [ingredients, setIngredients] = useState<StateType>(initState);

  const { meat, cheese, salad } = ingredients;

  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  // const f = () => {};
  // const f2 = useCallback(() => {}, []);

  const handleAdd = useCallback((ingredient: IngredientEnum) => {
    setIngredients((p: StateType) => ({
      ...p,
      [ingredient]: p[ingredient] + 1,
    }));

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

  const handleRemove = useCallback((ingredient: IngredientEnum) => {
    setIngredients((p: StateType) => ({
      ...p,
      [ingredient]: p[ingredient] - 1,
    }));
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
  let intervalid: number;

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
    setLoading(true);

    const bodyInObject = {
      meat: meat,
      salad: salad,
      cheese: cheese,
      total_price: calcultePrice(),
      token: "",
    };

    axios
      .post("SafeOrders/AddOrder", bodyInObject, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        },
      })
      .then((result) => {
        setMessage(result.data.message);
      })
      .catch((e) => {
        setMessage(e.message);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className={classes.container}>
      {loading && <Loading />}
      <BurgerImage meat={meat} salad={salad} cheese={cheese} />
      <Ingredient
        title={IngredientEnum.meat}
        count={meat}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
      <Ingredient
        title={IngredientEnum.cheese}
        count={cheese}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
      <Ingredient
        title={IngredientEnum.salad}
        count={salad}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />
      <div className={classes.price}>Price : {calcultePrice()}</div>
      <div className={classes.center}>
        <Button title="Order" disabled={loading} onClick={handleOrder} />
        <Button title="Reset" onClick={handleReset} />
        <Button title="Test" onClick={testThread} />
        <Button title="Cancel" onClick={cancelInterval} />
      </div>
      {message && (
        <p
          style={{
            textAlign: "center",
            fontSize: "2em",
            borderRadius: "5px",
            padding: "8px",
            backgroundColor: "lightgreen",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}
