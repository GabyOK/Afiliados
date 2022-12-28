import React from "react";
import Lash2 from "../fotos/lash2.jpg";
import Lash4 from "../fotos/lash4.jpg";
import Lash3 from "../fotos/lash3.jpg";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
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
            <img src={Lash2} width="1550px" height="550px" alt="estilista" />
            <div class="carousel-caption d-none d-md-block">
              <h5>ENTRENAMIENTO ONLINE</h5>
              <h1>
                Conviértete en especialista en Cejas y Pestañas y haz que tus
                ingresos exploten!
              </h1>
            </div>
          </div>
          <div class="carousel-item">
            <img src={Lash4} width="1550px" height="550px" alt="estilista" />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
          <div class="carousel-item">
            <img src={Lash3} width="1550px" height="550px" alt="estilista" />
            <div class="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
