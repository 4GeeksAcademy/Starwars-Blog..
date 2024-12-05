import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../store/appContext';

const Single = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();
  const [entity, setEntity] = useState(null);

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/people/${theid}`)
      .then(response => response.json())
      .then(data => setEntity(data.result.properties))
      .catch(error => console.error('Error fetching entity:', error));
  }, [theid]);

  return (
    <div className="container">
      {entity ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{entity.name}</h5>
            <p className="card-text">Altura: {entity.height}</p>
            <p className="card-text">Peso: {entity.mass}</p>
            <p className="card-text">Color de cabello: {entity.hair_color}</p>
            <p className="card-text">Color de piel: {entity.skin_color}</p>
            <p className="card-text">Color de ojos: {entity.eye_color}</p>
            <p className="card-text">Año de nacimiento: {entity.birth_year}</p>
            <p className="card-text">Género: {entity.gender}</p>
            <button className="btn btn-primary" onClick={() => actions.addFavorito(entity)}>
              Agregar a Favoritos
            </button>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Single;