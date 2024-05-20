import { useState } from "react";

import React from 'react'

export default function ListRender() {

     const [list] = useState(["Felipe", "Pedro", "Patrick"])


     const [user, setUsers] = useState([
        {id: 1 , name: "Patrick", age: 31},
        {id: 2 , name: "Felipe", age: 51},
        {id: 3 , name: "Mozart", age: 71}
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
    
        setUsers((prevUsers) => {
          return prevUsers.filter((user) => randomNumber !== user.id);
        });
      };

  return (
    <div>
        {/*- sem key*/}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        {/*- com key*/}
        <ul>
            {user.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                    </li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Deleta usuarios</button>
    </div>
  )
}
