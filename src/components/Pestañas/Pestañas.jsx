import React from "react";
import Pest from "../fotos/pestañas.png";
import Cover3 from "../fotos/cover3.png";
import Garantia from "../fotos/garantia.png";
import "./Pestañas.css";

const Pestañas = () => {
  return (
    <div className="container">
      <h3 className="titulo">
        CEJAS,LIFTING,PESTAÑAS PELO A PELO y VOLUMEN RUSO
      </h3>
      <h6>
        aprenderás todas las técnicas y herramientas necesarias para crear tu
        propio negocio de belleza y ofrecer gran variedad de servicios a tus
        clientes con las técnicas más innovadoras del mercado.
      </h6>
      <img
        className="img-pestañas"
        src={Pest}
        width="320px"
        height="200px"
        alt="estilista"
      />
      <ul className="lista">
        <h2>¿Que vas aprender?</h2>
        <li>
          Empezar desde cero hasta ser un/una profesional en diseño de cejas,
          lifting, pestañas pelo a pelo y volumen ruso.
        </li>
        <li>
          Identificar las necesidades de tus clientes para ofrecerles el mejor
          servicio y lograr la mayor satisfacción.
        </li>
        <li>
          Saber cómo hacer la elección correcta de los materiales de mejor
          calidad y duración.
        </li>
        <li>
          Elegir el pigmento que mejor se acomode a tus necesidades. Aprender
          tips prácticos de la técnica y su aplicación. Podrás recuperar la
          inversión de inmediato.
        </li>
        <li>
          Ser un/una profesional independiente, con tu propio local de belleza,
          gestionando tú mism@ los horarios y citas.
        </li>
        <li>Vender tus servicios a través de redes sociales.</li>
        <li>
          Generar ingresos en el rubro de la belleza, que cada día es más
          rentable.
        </li>
        <li>
          <h4>GARANTÍA DE SATISFACCIÓN DE 7 DÍAS.</h4>
        </li>
      </ul>
      <img
        className="img-cover3"
        src={Cover3}
        width="350px"
        height="250px"
        alt="estilista"
      />

      <div className="modulo">
        <h5>MÓDULOS DEL CURSO </h5>
        <h5>Conoce todo lo que vas a Aprender:</h5>
      </div>
      <div class="container">
        <div className="container-lista">
          <div class="dropdown">
            <li
              class="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 1-ESPECIALISTA EN CEJAS
            </li>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">Bienvenido/a al programa</li>
              <li className="dropdown-item">
                Visagismo, depilación y pigmentación de cejas.
              </li>
              <li className="dropdown-item">Browlaminations o Cejas 4K.</li>
            </ul>
          </div>
          <br />
          <div class="dropdown">
            <li
              class="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 2-ESPECIALISTA EN PESTAÑAS
            </li>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Materiales y tipos de pestañas que usaremos.
              </li>
              <li className="dropdown-item">
                Técnica Clásica aplicación de pestañas paso a paso.
              </li>
              <li className="dropdown-item">
                (PDF) Temas importantes sobre las extensiones de pestañas pelo a
                pelo.
              </li>
              <li className="dropdown-item">
                Retoques de pestañas cada 15 días.
              </li>
              <li className="dropdown-item">
                (PDF) Cuidados de las pestañas pelo a pelo
              </li>
              <li className="dropdown-item">
                Abanicos para volumen y volumen ruso.
              </li>
              <li className="dropdown-item">
                Aplicación con técnica de Volumen Ruso.
              </li>
              <li className="dropdown-item">
                Retiro correcto de extensiones de pestañas.
                className="dropdown-item"
              </li>
              <li className="dropdown-item">
                (3 PDF)Diseños tipo de mapings/técnicas/curvatura.
              </li>
              <li className="dropdown-item">Lifting o rizado de pestañas.</li>
            </ul>
          </div>
          <br />
          <div class="dropdown">
            <li
              class="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 3 -TU NEGOCIO EN REDES SOCIALES
            </li>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">Crea tu Instagram</li>
              <li className="dropdown-item">Crea tu fanpage en Facebook</li>
              <li className="dropdown-item">Visita mi Instagram</li>
            </ul>
          </div>
        </div>
      </div>
      <img
        className="img"
        src={Garantia}
        width="150px"
        height="150px"
        alt="estilista"
      />
      <h4>Aprovecha el 50 % de DESCUENTO.</h4>
      <a href="https://pay.hotmart.com/D65331885D?offDiscount=062919&ref=Y71891771N">
        <button className="comprar">COMPRAR AHORA</button>
      </a>
    </div>
  );
};

export default Pestañas;
