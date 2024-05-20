import React from "react";
import '../App.css'
import MyForm from "../components/MyForm";

export default function Page() {
    return(
        <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Josias", email: "josias@hotmail.com" }} />
    </div>
    )
}