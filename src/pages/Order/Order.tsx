import React, { useReducer } from "react";
import { useCallback, useState } from "react";
import Button from "../../components/Button/Button";
import BurgerImage from "./BurgerImage/BurgerImage";
import Ingredient from "./Ingredient/Ingredient";
import classes from "./Order.module.css";
import axios from "../../axios";
import Loading from "../../components/Loading/Loading";
import { IngredientEnum } from "../../types";
import { usePersistState } from "../../hooks/usePersistState";

interface StateType {
  [field: string]: number;
}

interface GeneralState {
  ingredients: StateType;
  loading: boolean;
  message: string;
}

interface Action {
  type: "LOADING" | "INGREDIENTS" | "MESSAGE" | "RESET";
  payload: any;
}

// const LOADING: string = "LOADING";
// const MESSAGE: string = "MESSAGE";
// const INGREDIENTS: string = "INGREDIENTS";

function reducer(currentState: GeneralState, action: Action): GeneralState {
  switch (action.type) {
    case "LOADING":
      return {
        ingredients: {
          ...currentState.ingredients,
        },
        loading: action.payload,
        message: currentState.message,
      };

    case "MESSAGE":
      return {
        ingredients: {
          ...currentState.ingredients,
        },
        loading: currentState.loading,
        message: action.payload,
      };

    case "INGREDIENTS":
      const { field, operation } = action.payload;
      const { ingredients } = currentState;
      return {
        ingredients: {
          ...ingredients,
          [field]: ingredients[field] + (operation === "+" ? 1 : -1),
        },
        loading: currentState.loading,
        message: currentState.message,
      };

    case "RESET":
      return {
        ...currentState,
        ingredients: {
          meat: 0,
          cheese: 0,
          salad: 0,
        },
      };
    default:
      return currentState;
  }
}

export default function Order() {
  let ing: "salad" | "meat" | "cheese" | undefined;

  const initState: StateType = {
    meat: 0,
    cheese: 0,
    salad: 0,
  };
  const initState2: GeneralState = {
    ingredients: initState,
    loading: false,
    message: "",
  };
  const [state, dispatch] = useReducer(reducer, initState2);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [message, setMessage] = useState<string>("");
  // const [ingredients, setIngredients] = usePersistState("ingre", initState);

  const { meat, cheese, salad } = state.ingredients;

  const handleAdd = useCallback((ingredient: IngredientEnum) => {
    // setIngredients((p: StateType) => ({
    //   ...p,
    //   [ingredient]: p[ingredient] + 1,
    // }));
    dispatch({
      type: "INGREDIENTS",
      payload: {
        field: ingredient,
        operation: "+",
      },
    });
  }, []);

  const handleRemove = useCallback((ingredient: IngredientEnum) => {
    // setIngredients((p: StateType) => ({
    //   ...p,
    //   [ingredient]: p[ingredient] - 1,
    // }));
    dispatch({
      type: "INGREDIENTS",
      payload: {
        field: ingredient,
        operation: "-",
      },
    });
  }, []);

  const handleReset = () => {
    // setIngredients({
    //   meat: 0,
    //   cheese: 0,
    //   salad: 0,
    // });
    dispatch({
      type: "RESET",
      payload: undefined,
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
    dispatch({
      type: "LOADING",
      payload: true,
    });

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
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((result) => {
        dispatch({
          type: "MESSAGE",
          payload: result.data.message,
        });
      })
      .catch((e) => {
        dispatch({
          type: "MESSAGE",
          payload: e.message,
        });
      })
      .finally(() =>
        dispatch({
          type: "LOADING",
          payload: false,
        })
      );
  };

  return (
    <div className={classes.container}>
      {state.loading && <Loading />}
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
        <Button title="Order" disabled={state.loading} onClick={handleOrder} />
        <Button title="Reset" onClick={handleReset} />
        <Button title="Test" onClick={testThread} />
        <Button title="Cancel" onClick={cancelInterval} />
      </div>
      {state.message && (
        <p
          style={{
            textAlign: "center",
            fontSize: "2em",
            borderRadius: "5px",
            padding: "8px",
            backgroundColor: "lightgreen",
          }}
        >
          {state.message}
        </p>
      )}
    </div>
  );
}
