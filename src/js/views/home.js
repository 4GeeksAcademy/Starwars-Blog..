import React from 'react';
import Personas from '../component/personas';
import Vehiculos from '../component/vehiculos';
import Planetas from '../component/planetas';
import "../../styles/demo.css";


const Home = () => {
  return (
    <div className="container">
      <h1>Star Wars Blog</h1>
      <div className="section">
        <h2>Personas</h2>
        <Personas />
      </div>
      <div className="section">
        <h2>Vehículos</h2>
        <Vehiculos />
      </div>
      <div className="section">
        <h2>Planetas</h2>
        <Planetas />
      </div>
    </div>
  );
};

export default Home;