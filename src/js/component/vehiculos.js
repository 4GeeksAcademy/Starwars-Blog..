import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';

const Vehiculos = () => {
  const { store, actions } = useContext(Context);
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/vehicles')
      .then(response => response.json())
      .then(data => setVehiculos(data.results))
      .catch(error => console.error('Error fetching vehiculos:', error));
  }, []);

  return (
    <div className="row">
      {vehiculos.map((vehiculo, index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-4">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehiculo.uid}.jpg`} className="card-img-top" alt={vehiculo.name} />
            <div className="card-body">
              <h5 className="card-title">{vehiculo.name}</h5>
              <p className="card-text">Más detalles aquí...</p>
              <button className="btn btn-primary" onClick={() => actions.addFavorito({ ...vehiculo, img: `https://starwars-visualguide.com/assets/img/vehicles/${vehiculo.uid}.jpg` })}>
                Agregar a Favoritos
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Vehiculos;
