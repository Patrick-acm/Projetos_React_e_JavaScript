import React from 'react'

function CarDetails({brand, km, color}) {
  return (
    <div>
     <ul>
        <li>marca: {brand}</li>
        <li>cor: {color}</li>
        <li>marca: {km}</li>
     </ul>
    </div>
  )
}

export default CarDetails