import { useEffect, useReducer, useState } from "react";
import Group from "./Group";
import SearchBox from "./SearchBox";
import reducer from "./reducer";
import { changeKeywordAction, changeOnlyStockedAction } from "./actions";

const list = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function Review() {
  // const [onlyStocked, setOnlyStocked] = useState(false);
  // const [keyword, setKeyword] = useState("");

  const [{ onlyStocked, keyword }, dispatch] = useReducer(reducer, {
    onlyStocked: false,
    keyword: "",
  });

  useEffect(() => {
    console.log("useeffect keyword");
  }, []);

  useEffect(() => {
    console.log("useeffect");
  }, [onlyStocked, keyword]);

  const [appstate, setAppstate] = useState({
    authentication: {
      islogin: true,
      fullname: "hasan",
      token: "asdas",
    },
    notifications: [
      { title: "asdasd", isseen: false, desc: "sdasd" },
      { title: "asdasd", isseen: false, desc: "sdasd" },
    ],
    models: [{ title: "asdasd", body: <>asdasd</> }],
    vehciles: [
      { name: "", plage: "", battery: "" },
      { name: "", plage: "", battery: "" },
      { name: "", plage: "", battery: "" },
      { name: "", plage: "", battery: "" },
    ],
  });

  const handleKeywordChange = (newKeyword: string) => {
    dispatch(changeKeywordAction(newKeyword));
  };

  const handleOnlyStockedChange = (newOnlyStocked: boolean) => {
    dispatch(changeOnlyStockedAction(newOnlyStocked));
  };

  const uniqeCategories = [...new Set(list.map((item) => item.category))];

  return (
    <div style={{ maxWidth: "400px", textAlign: "center" }}>
      <SearchBox
        keyword={keyword}
        onlyStocked={onlyStocked}
        onKeywordChanged={handleKeywordChange}
        onOnlyStockedChanged={handleOnlyStockedChange}
      />
      <div>
        <span style={{ margin: "10px" }}>Title</span>
        <span style={{ margin: "10px" }}>Price</span>
      </div>
      {uniqeCategories.map((cat) => (
        <Group
          title={cat}
          data={list
            .filter(
              (c) =>
                c.category === cat &&
                c.name.toLowerCase().includes(keyword.toLowerCase()) &&
                (!onlyStocked || c.stocked)
            )
            .map((c) => ({
              title: c.name,
              price: c.price,
              stocked: c.stocked,
            }))}
        />
      ))}
    </div>
  );
}
