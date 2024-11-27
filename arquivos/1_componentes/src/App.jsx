//Component Pai

import "./App.css"

// Importar o componente filho

// App.js (Componente Pai)

import React from "react";
import "./App.css";

// Importar os componentes filhos
import FunctionalComponent from "./components/FunctionalComponent";
import ClassComponent from "./ClassComponent";
import PropsExample from "./components/PropsExample";
function App() {
  return (
    <>
      <h1>Hello World React</h1>
      <FunctionalComponent />
      <ClassComponent />
      <PropsExample  nome="Thiago" idade  = {24}/>
      {/* Utilizando o componente importado no JSX */}
    </>
  );
}

export default App;
