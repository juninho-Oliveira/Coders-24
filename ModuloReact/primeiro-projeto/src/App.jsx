import React from "react";

import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";
// import {Counter} from './components/Counter/Counter'


import './styles/App.css'

import articleImg from './assets/img/article.png'
import articleImg2 from './assets/img/article2.png'
import articleImg3 from './assets/img/article3.png'


// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.
// Fragment

class App extends React.Component {


  //  Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />

        {/* <Counter /> */}


        <section id='articles'>
          <Article title="Designing Dashboards" provider="NASA" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          thumbnail={articleImg}/>

          <Article title="Vibrant Portraits of 2020" provider="SpaceNews" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          thumbnail={articleImg2}
          />

          <Article title="36 Days of Malayalam type" provider="Spaceflight Now" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          thumbnail={articleImg3}/>

          <Article title="Designing Dashboards" provider="NASA" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
          thumbnail={articleImg}/>

        </section>
      </>
    );
  }
}

export default App;
