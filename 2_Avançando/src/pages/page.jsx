import React, { useState } from "react";
import '../App.css'
import img from "../assets/img/city.jpg"
import UseState from "../components/useState";
import ListRender from "../components/ListRender";
import ConditionalRender from "../components/ConditionalRender";
import Props from "../components/Props";
import CarDetails from "../components/carDetails";
import Container from "../components/Container";
import ExecuteFunction from "../components/Executemyfunction";
import MessageState from "../components/MenssageState";
import ChangeMessageState from "../components/ChangeMessageState";




export default function Page() {
    const cars = [
        { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
        { id: 2, brand: "KIA", color: "Branco", km: 200000 },
        { id: 3, brand: "Renault", color: "Azul", km: 32000 },
      ];

      function showMessage() {
        console.log("Evento do componente pai");
      }

      const [message, setMessage] = useState();

      const handleMessage = (msg) => {
        setMessage(msg);
      };
    

    return(
        <div>
         <img src={img} alt="a braba" />
         <UseState />
         <ListRender />
         <ConditionalRender />
         <Props name="Patrick"/>
         <CarDetails brand= "VW" color="yellow" km={999} />
         <CarDetails brand= "Fiat" color="yellow" km={500} />
         <CarDetails brand= "Chevrolet" color="green" km={600} />
         <CarDetails brand= "VW" color="red" km={700} />
         {cars.map((car) => (
            <CarDetails 
            key={car.id}
            brand={car.brand}
            color={car.color}
            km={car.km}
            />
         ))}
         {/* children prop */}
      <Container>
        <p>Eu sou do componente superior</p>
      </Container>
      <Container>
        <div>
          <p>Eu também</p>
        </div>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <MessageState msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
        </div>
    )
}