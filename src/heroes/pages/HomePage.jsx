import React from 'react';
import { Link } from 'react-router-dom'; 

export const HomePage = () => {
  return (
    <div className="homepage-container">
      {}
      <div
        id="carouselBasicExample"
        className="carousel slide carousel-fade"
        data-mdb-ride="carousel"
        data-mdb-carousel-init
      >
        {}
        <div className="carousel-indicators">
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-mdb-target="#carouselBasicExample"
            data-mdb-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://th.bing.com/th/id/R.4e57884e5b09cff52afced85dffe1556?rik=RXqw918TnLSTZg&riu=http%3a%2f%2fimages3.alphacoders.com%2f669%2f669857.png&ehk=kAD4U1jEIh6V1QlJRgbucxlvx%2fqFn0gPShN2ZNOO9UI%3d&risl=&pid=ImgRaw&r=0"
              className="d-block w-100"
              alt="Sunset Over the City"
              style={{ maxHeight: '500px' }} 
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Explora el Mundo del Anime</h5>
              <p>
                Encuentra tu héroe favorito de anime aquí. Descubre más sobre sus aventuras y poderes.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://th.bing.com/th/id/OIP.41S33SMIHVfF1UCcoMITXgAAAA?rs=1&pid=ImgDetMain"
              className="d-block w-100"
              alt="Canyon at Night"
              style={{ maxHeight: '500px' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cómics para Todos</h5>
              <p>
                Sumérgete en el universo de los cómics. Explora historias épicas y personajes inolvidables.
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src="https://i2.wp.com/codigoespagueti.com/wp-content/uploads/2021/08/Marvel-Comics-celebras-al-MCU-con-una-serie-de-portadas-variantes-dedicadas-a-la-Saga-del-Infinito-compressed.jpg?fit=1280%2C720&quality=80&ssl=1"
              className="d-block w-100"
              alt="Cliff Above a Stormy Sea"
              style={{ maxHeight: '500px' }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Gestiona tu Perfil</h5>
              <p>
                Accede a tu cuenta o regístrate para disfrutar de contenido personalizado.
              </p>
            </div>
          </div>
        </div>

        {}
        <button
          className="carousel-control-prev"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-mdb-target="#carouselBasicExample"
          data-mdb-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      {}
      <div className="sections-info mt-5">
        <h2>Explora Nuestro Sitio</h2>
        <div className="row">
          <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://images5.alphacoders.com/811/811573.png"
                className="card-img-top"
                alt="Anime Section"
              />
              <div className="card-body">
                <h5 className="card-title">Anime</h5>
                <p className="card-text">
                  Descubre la colección más completa de personajes de anime.
                </p>
                <Link to="/anime" className="btn btn-primary">
                  Ir a Anime
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://images3.alphacoders.com/598/598370.jpg"
                className="card-img-top"
                alt="Comics Section"
              />
              <div className="card-body">
                <h5 className="card-title">Cómics</h5>
                <p className="card-text">
                  Explora historias épicas de los mejores superhéroes y villanos.
                </p>
                <Link to="/comics" className="btn btn-primary">
                  Ir a Cómics
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://images6.alphacoders.com/102/1022001.jpg"
                className="card-img-top"
                alt="Login Section"
              />
              <div className="card-body">
                <h5 className="card-title">Login</h5>
                <p className="card-text">
                  Accede a tu cuenta para disfrutar de una experiencia personalizada.
                </p>
                <Link to="/login" className="btn btn-primary">
                  Iniciar Sesión
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card mb-4 shadow-sm">
              <img
                src="https://images7.alphacoders.com/555/555687.jpg"
                className="card-img-top"
                alt="Logout Section"
              />
              <div className="card-body">
                <h5 className="card-title">Logout</h5>
                <p className="card-text">
                  Sal de tu cuenta de forma segura y mantén tu información protegida.
                </p>
                <Link to="/logout" className="btn btn-primary">
                  Cerrar Sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
