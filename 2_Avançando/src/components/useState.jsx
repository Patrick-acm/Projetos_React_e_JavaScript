import React from 'react'
import { useState } from "react";

export default function UseState() {
      let someData = 10
      console.log(someData)

      const [anotherNumber, setAnotherNumber] = useState(15)

  return (
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>muda numero</button>
        <div>
            <p>valor: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 3)}>muda estado</button>
        </div>
    </div>
  )
}

