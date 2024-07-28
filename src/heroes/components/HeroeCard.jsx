import { Link } from "react-router-dom";
import'./style.css'

export const HeroeCard = ({id,nombre,tipo,origen,descripción}) => {
    const imgSrc = `/assets/heroes/${id}.jpg`;
    return (
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
            </div>
            <div className="col-md-8">
                <div className="card-body">
                <div class="card">
                        <img src={imgSrc} className="card-img-top" alt="HERO"/>
                        <div className="card-body">
                            <h5 className="card-title">Nombre: {nombre}</h5>
                            <div className="card-text">Origen: {origen}</div>
                            <Link to={`/hero/${id}`} class="btn btn-primary">Ver más...</Link>
                        </div>
                        </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}
 