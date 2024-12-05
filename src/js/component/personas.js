import React, { useEffect, useState, useContext } from 'react'; // Asegúrate de importar useContext
import { Context } from '../store/appContext';

const Personas = () => {
  const { store, actions } = useContext(Context);
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('https://www.swapi.tech/api/people')
      .then(response => response.json())
      .then(data => setPersonas(data.results))
      .catch(error => console.error('Error fetching personas:', error));
  }, []);

  return (
    <div className="row">
      {personas.map((persona, index) => (
        <div key={index} className="col-md-4">
          <div className="card mb-4">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${persona.uid}.jpg`} className="card-img-top" alt={persona.name} />
            <div className="card-body">
              <h5 className="card-title">{persona.name}</h5>
              <p className="card-text">Más detalles aquí...</p>
              <div className='d-flex justify-content-between'>
                <button className="btn btn-primary" onClick={() => actions.addFavorito({ ...persona, img: `https://starwars-visualguide.com/assets/img/characters/${persona.uid}.jpg` })}>
                  Agregar a Favoritos
                </button>
                <i className="fas fa-heart"></i>
              </div>  
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Personas;