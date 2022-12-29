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
        ¿Qué aprenderás en este curso?
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
        className="img"
        src={Cover3}
        width="350px"
        height="250px"
        alt="estilista"
      />

      <h5>MÓDULOS DEL CURSO Conoce todo lo que vamos a abordar:</h5>
      <div class="dropdown">
        <a
          class="btn btn-secondary dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          MODULO 1-ESPECIALISTA EN CEJAS
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">Bienvenido/a al programa</a>
          </li>
          <li>
            <a class="dropdown-item">
              Visagismo, depilación y pigmentación de cejas.
            </a>
          </li>
          <li>
            <a class="dropdown-item">Browlaminations o Cejas 4K.</a>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <a
          class="btn btn-secondary dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          MODULO 2-ESPECIALISTA EN PESTAÑAS
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">
              Materiales y tipos de pestañas que usaremos.
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              Técnica Clásica aplicación de pestañas paso a paso.
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              (PDF) Temas importantes sobre las extensiones de pestañas pelo a
              pelo.
            </a>
          </li>
          <li>
            <a class="dropdown-item">Retoques de pestañas cada 15 días.</a>
          </li>
          <li>
            <a class="dropdown-item">
              (PDF) Cuidados de las pestañas pelo a pelo
            </a>
          </li>
          <li>
            <a class="dropdown-item">Abanicos para volumen y volumen ruso.</a>
          </li>
          <li>
            <a class="dropdown-item">Aplicación con técnica de Volumen Ruso.</a>
          </li>
          <li>
            <a class="dropdown-item">
              Retiro correcto de extensiones de pestañas.
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              (3 PDF)Diseños tipo de mapings/técnicas/curvatura.
            </a>
          </li>
          <li>
            <a class="dropdown-item">Lifting o rizado de pestañas.</a>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <a
          class="btn btn-secondary dropdown-toggle"
          role="button"
          id="dropdownMenuLink"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          MODULO 3 -TU NEGOCIO EN REDES SOCIALES
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">Crea tu Instagram</a>
          </li>
          <li>
            <a class="dropdown-item">Crea tu fanpage en Facebook</a>
          </li>
          <li>
            <a class="dropdown-item">Visita mi Instagram</a>
          </li>
        </ul>
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
        <button class="button">COMPRAR AHORA</button>
      </a>
    </div>
  );
};

export default Pestañas;
