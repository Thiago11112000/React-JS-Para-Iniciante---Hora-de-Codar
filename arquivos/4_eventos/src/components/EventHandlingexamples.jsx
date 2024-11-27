import {useState} from 'react'


const  EventHandlingexamples = () =>{
    const handleCLick = () => {
     alert("Testando")
    };
    const handleGreet = (name) =>{
        alert(`Olá ${name}`);
    };

    const [name, setName]= useState("")

    const handleSubmit = (e)=> {
        e.preventDefault()
        alert(`enviado! ${name} `)
    }
  return (
    <div>
    <button onClick={()=> alert("oi")} > clique aqui </button>
    <button onClick={handleCLick}> clique aqui 2 </button>
    <br/>
    <button onClick={ () => handleGreet("Ana")}>Dizer Olá Ana</button>
    <button onClick={ () => handleGreet("Pedro")}>Dizer Olá Pedro</button>
    <br/>
    <form  onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={( (e) => setName(e.target.value))} placeholder="Digite seu nome"></input>
        <input type= "submit" value="Enviar"></input>
    </form>
    </div>



  )
}


export default EventHandlingexamples