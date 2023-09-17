import { useState } from "react";

export default function Fullname({ fname, lname, color, children }) {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // setCounter(50);
    // setCounter(counter + 1);
    setCounter((currentCounter) => currentCounter + 1);
  };

  return (
    <div style={{ color: color }} onClick={handleClick}>
      {fname} {lname} ========= {counter}
      {children}
    </div>
  );
}


<Fullname fname="" >
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</Fullname>