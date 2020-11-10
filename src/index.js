import React from "react";
import ReactDOM from "react-dom";

const List = () =>{

    const [texto, setTexto] = React.useState("natan");
    const [lista, setLista] = React.useState([{
            id:1,
            texto:"texto para simulação",
            marcar:false
          
        }])

    const trocarTexto =   (event)  =>  {
        const [texto, setTexto] = React.useState(event.target.value);//texto.concat(event.target.value)
    }
    const adicionar = (event) => {
        event.preventDefault();
        const [lista, setLista] = React.useState(lista.concat({ id:Math.random() , texto:texto,  marcar:false }));
    }
    const remover =   ()  =>  {}
    const marcar =   ()  =>  {}
  
   
    return(
        <div>
      <form action="" onSubmit={adicionar}>
        <input
          type="text"
          value={texto}
          onChange={trocarTexto}
        />
        <button type="submit"> adicionar </button>
      </form>
      <ul>
        {lista.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                textDecoration: item.marcar ? "line-through" : "none",
              }}
            >
              {item.texto}{" "}
              <button onClick={() => remover(item.id)}> remover </button>{" "}
              <button onClick={() => marcar(item.id)}>marcar</button>
            </li>
          );
        })}
      </ul>
    </div>
    )
}
let domContainer = document.querySelector('#button_container');//desmontagem
ReactDOM.render(<List />, document.getElementById("root"));