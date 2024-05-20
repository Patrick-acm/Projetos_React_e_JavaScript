import React from 'react'
import { render } from 'react-dom'

export default function Events() {

    const HandleClick = () =>  {
        console.log("Testou")
    }

    // Renderização 
    const Render = (x) => {
        if(x) {
            return <h1>Opa me renderizou</h1>
        } else {
            return <h1>Opa eu de novo</h1>
        }
    }

  return (
    <div>
     <div>
       <button onClick={() => console.log("teste")}>
          Me clica ai!
       </button>
       <div>
        <button onClick={HandleClick}>
        Salve me clica ae
        </button>
        <div>
            {Render(true)}
            {Render(false)}
        </div>
       </div>
     </div>
    </div>
  )
}
