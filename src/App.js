import React from "react";
import './App.css'; 
import imgout from './assets/asset-03.png';
import imgin from './assets/asset-02.png';
import img from './assets/asset-01.png';

function App() {
  return(
  <>
    <div className="maindiv"> 

    <div className="espiral">  

    <div className="outer">
      <img src={imgout} alt=""/>
      <div className="inner">
        <img src={imgin}/>
      <div className="inside">
        <img src={img}/>
      </div>
      </div>
    </div>
    </div>

   
    <div className="title">
      <h1>BEM-VINDO <span> ao Futuro</span> </h1>
      <button className="font-btn">
       Começar
      </button>
    </div>
    </div>

   
  </>


  )
}

export default App;