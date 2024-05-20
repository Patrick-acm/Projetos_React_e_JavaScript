// template

const Template = () => {

    const name = "Patrick"

    const data = {
        age: 50,
        Job: "programador"
    }
  return (
    <div>A soma é {2 + 2}
    <h3>Bem vindo {name}</h3>
    <p> sua idade é {data.age} você é um {data.Job}</p>
    </div>
    
  )
}

export default Template