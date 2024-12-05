import React, { useContext } from 'react';
import { Context } from '../store/appContext';

const Favoritos = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1>Favoritos</h1>
      <div className="row">
        {store.favoritos.map((item, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
            <img src={item.img} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Más detalles aquí...</p>
                <button className="btn btn-danger" onClick={() => actions.removeFavorito(item)}>
                  Eliminar de Favoritos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favoritos;