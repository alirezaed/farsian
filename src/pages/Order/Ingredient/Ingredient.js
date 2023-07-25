import { useState } from "react"

export default function Ingredient({title}) {

  const [count,setCounter] = useState(0);

  return <div>{title} + {count} - </div>
}
