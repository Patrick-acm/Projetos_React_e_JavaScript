import React from 'react'

export default function ConditionalRender() {

const x = 5;

const name = "Patrick"

  return (
    <div>
        <h3>
            {/* 7- Render condicional */}
            Isso será exibido?
            {x > 2 && <p>Se x for true sim!</p>}
            {/* 8 - else */}
            {name ==="joão" ? (
             <div>
                <p>Olá joão</p>
             </div>
            ) : (

                <div>
                    <p>nome não encontrado!</p>
                </div>
            )}
        </h3>
    </div>
  )
}

 