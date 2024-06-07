import React from "react";

import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";


import './styles/App.css'



// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.
// Fragment

class App extends React.Component {


  //  Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />
        <section id='articles'>
          <Article />
          <Article />
          <Article />
          <Article />
        </section>
      </>
    );
  }
}

export default App;
