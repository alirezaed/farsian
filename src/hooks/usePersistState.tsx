import { useState } from "react";

export function usePersistState(key: string, defaultState: any) {
  const getDefault = () => {
    const existingValue = localStorage.getItem(key);
    if (!existingValue) return defaultState;
    else if (existingValue.includes("{")) return JSON.parse(existingValue);
    else return existingValue;
  };

  const [statedata, setData] = useState(getDefault());

  function changeData(data: any) {
    if (typeof data === "function") {
      setData((current: any) => {
        const newData = data(current);
        localStorage.setItem(key, JSON.stringify(newData));
        return newData;
      });
    } else if (typeof data === "object") {
      localStorage.setItem(key, JSON.stringify(data));
      setData(data);
    } else {
      localStorage.setItem(key, data);
      setData(data);
    }
  }
  return [statedata, changeData];
}
