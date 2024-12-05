import React, { useEffect, useState, useContext } from 'react';
import { Context } from '../store/appContext';

const Planetas = () => {
  const { store, actions } = useContext(Context);
  const [planetas, setPlanetas] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/planets')
      .then(response => response.json())
      .then(data => setPlanetas(data.results))
      .catch(error => console.error('Error fetching planetas:', error));
  }, []);

  return (
    <div className="row">
      {planetas.map((planeta, index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-4">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} className="card-img-top" alt={planeta.name} />
            <div className="card-body">
              <h5 className="card-title">{planeta.name}</h5>
              <p className="card-text">Más detalles aquí...</p>
              <button className="btn btn-primary" onClick={() => actions.addFavorito({ ...planeta, img: `https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg` })}>
                Agregar a Favoritos
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Planetas;