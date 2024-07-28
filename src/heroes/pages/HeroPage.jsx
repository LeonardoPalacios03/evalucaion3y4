import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHerosbyID } from "../helpers/getHerosbyID";
import'./style.css'

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHerosbyID(id);
  const navigate = useNavigate();

  console.log("", hero);

  const handleReturn = () => {
    if (hero.tipo === "anime") {
      navigate("/animes");
    } else {
      navigate("/comics");
    }
  };

  return (
    <>
      {hero ? (
        <div className="card">
          <div
            className="bg-image hover-overlay"
            data-mdb-ripple-init
            data-mdb-ripple-color="light"
          >
            <img
              src={`/assets/heroes/${hero.id}.jpg`}
              className="img-fluid"
              alt={hero.nombre}
            />
            <a href="#!">
              <div className="mask"></div>
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-text">{hero.nombre}</h5>
            <p className="card-text">{hero.origen}</p>
            <p className="card-text">{hero.tipo}</p>
            <p className="card-text">{hero.descripción}</p>
            <button
              className="btn btn-primary"
              data-mdb-ripple-init
              onClick={handleReturn}
            >
              Volver
            </button>
          </div>
        </div>
      ) : (
        <div className="not-found-overlay">
          <div className="not-found-card animate__animated animate__fadeInDown">
            <div className="not-found-header">
              <i className="not-found-icon">✖</i>
              <h2 className="not-found-title">Héroe no encontrado</h2>
            </div>
            <p className="not-found-message">
              El héroe con el ID: <strong>{id}</strong> no existe.
            </p>
            <div className="not-found-buttons">
              <button
                className="btn btn-outline-primary"
                onClick={() => navigate("/comics")}
              >
                Ir a Cómics
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => navigate("/animes")}
              >
                Ir a Anime
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
