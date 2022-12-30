import React from "react";
import Lash2 from "../fotos/lash2.jpg";
import Lash4 from "../fotos/lash4.jpg";
import Lash3 from "../fotos/lash3.jpg";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="container-carrusel">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Lash2}
              width="1550px"
              height="550px"
              alt="estilista"
              className="lash2"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>ENTRENAMIENTO ONLINE</h5>
              <h1>
                Conviértete en especialista en Cejas y Pestañas y haz que tus
                ingresos exploten!
              </h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={Lash4}
              width="1550px"
              height="550px"
              alt="estilista"
              classNameName="lash4"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              src={Lash3}
              width="1550px"
              height="550px"
              alt="estilista"
              classNameName="lash3"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
