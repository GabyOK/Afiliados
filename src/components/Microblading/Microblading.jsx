import React from "react";
import Blading from "../fotos/microblading.png";
import Cover2 from "../fotos/cover2.png";
import Garantia from "../fotos/garantia.png";
import "./Microblading.css";

const Microblading = () => {
  return (
    <div className="container">
      <h3 className="titulo">Especialista en Microblading de Cejas 2.0</h3>
      <h5>Nivel Básico a Avanzado</h5>
      <img
        className="img-micro"
        src={Blading}
        width="350px"
        height="200px"
        alt="estilista"
      />

      <ul className="lista">
        <h2>¿Que Incluye el Curso?</h2>
        <li>Videos ULTRA HD + de 5 horas de duración</li>
        <li> + de 72 lecciones en video</li>
        <li>+ de 9 BONOS DE REGALO</li>
        <li>
          <h4>GARANTÍA DE SATISFACCIÓN DE 7 DÍAS.</h4>
        </li>
        <img
          className="img-cover2"
          src={Cover2}
          width="350px"
          height="250px"
          alt="estilista"
        />
      </ul>
      <div className="modulo">
        <h5>MÓDULOS DEL CURSO </h5>
        <h5>Conoce todo lo que vas a Aprender:</h5>
      </div>

      <div className="container">
        <div className="container-lista">
          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 1
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                ¡Bienvenidos al Entrenamiento Profesional de Especialista en
                Microblading de Cejas 2.0!
              </li>
              <li className="dropdown-item">
                Conociendo nuestra experta, sus logro, capacitaciones y
                experiencia en el campo
              </li>
              <li className="dropdown-item">
                ¡Queremos conocerte! Espacio creado para conocer mejor las
                expectativas y necesidades de nuestras alumnas…
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 2
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                PRIMEROS PASOS PARA COMENZAR A SER UNA ESPECIALISTA EN
                MICROBLADING.Lección 1: Conociendo la metodología de aprendizaje
                y lo que vas a lograr hacer
              </li>
              <li className="dropdown-item">
                Conociendo las oportunidades y beneficios de de saber aplicar la
                técnica de Microblading
              </li>
              <li className="dropdown-item">
                Introducción a la Bioseguridad e Higiene
              </li>
              <li className="dropdown-item">
                Conociendo la anatomía de la piel, sus características y capa
                donde debemos realizar la técnica
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 3
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Conociendo los materiales de práctica
              </li>
              <li className="dropdown-item">
                Conociendo los materiales de trabajo
              </li>
              <li className="dropdown-item">Anestésicos. Parte 1</li>
              <li className="dropdown-item">Anestésicos. Parte 2</li>
              <li className="dropdown-item">Pigmentos. Parte 1</li>
              <li>Pigmentos. Parte 2</li>
              <li className="dropdown-item">
                Degradado e intensidad de los pigmentos
              </li>
              <li className="dropdown-item">
                BONO DE REGALO: CheckList de Materiales de trabajo, de práctica
                y de bioseguridad
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 4
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                DISEÑO Y CONSTRUCCIÓN DE UNA CEJA PARA MICROBLADING / BONO DE
                REGALO
              </li>
              <li className="dropdown-item">
                Diseño de cejas para microblading
              </li>
              <li className="dropdown-item">
                Medidas de una ceja para microblading
              </li>
              <li className="dropdown-item">
                Estructura, inicio y transiciones de una ceja
              </li>
              <li className="dropdown-item">
                Patrones de cejas, dirección de los pelos naturales a realizar.
                La importancia de las distintas espinas. ESPINE. PARTE 1
              </li>
              <li className="dropdown-item">
                Patrones de cejas, direcciones de los pelos naturales a
                realizar. La importancia de las distintas espinas. SPINE. PARTE
                2
              </li>
            </ul>
          </div>
          <br />
          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 5
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Practicando sobre papel. Guía práctica de trazos
              </li>
              <li className="dropdown-item">
                Movimientos de la aguja y cómo ingresarla correctamente.
              </li>
              <li className="dropdown-item">
                Práctica en piel superficial / Goma eva
              </li>

              <li className="dropdown-item">
                Práctica en piel superficial. Latex. PARTE 2
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 6
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">Cuidados post tratamiento</li>
              <li className="dropdown-item">
                className="dropdown-item"Contraindicaciones
              </li>
              <li className="dropdown-item">
                ¿Qué necesito saber sobre el retoque?
              </li>
              <li className="dropdown-item">
                Ficha técnica y resguardo jurídico
              </li>
              <li className="dropdown-item">
                BONO DE REGALO: Descarga nuestra ficha técnica y resguardo
                jurídico
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 7
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">Recapitulando lo visto</li>
            </ul>
          </div>

          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 8
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Diseño de cejas para microblading
              </li>
              <li className="dropdown-item">
                Rectificación de medidas y correcciones
              </li>
              <li className="dropdown-item">
                Variaciones de medidas y diseño className="dropdown-item"
              </li>
            </ul>
          </div>
          <br />

          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 9
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Microblading en modelo real paso a paso. Parte 1,2,3,4,5,6,7 Y 8
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 10
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Recapitulando el paso a paso del procedimiento
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 11
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>¡QUERER ES PODER!</li>
              <li>Recomendaciones para empezar a ofrecer el servicio</li>
              <li>¿A quién recomendar la técnica de microblading?</li>
              <li>¿Cuánto cobrar el servicio de microblading?</li>
              <li>Seguimiento y agenda</li>
              <li>BONO DE REGALO: Elige tu diseño de agenda preferido</li>
              <li className="dropdown-item">
                Mobiliario base para tu centro de belleza
              </li>
            </ul>
          </div>

          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 12
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                PACK LIBROS DE BELLEZA / BONO DE REGALO
              </li>
            </ul>
          </div>
          <br />
          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 13
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">PREGUNTAS FRECUENTES – Q&A</li>
            </ul>
          </div>
          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 14
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                DESPEDIDA ¡Felicitaciones! ya sos una Especialista en
                Microblading de cejas 2.0
              </li>
            </ul>
          </div>
          <div className="dropdown">
            <li
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 15
            </li>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Instrucciones para descargar el certificado
              </li>
            </ul>
          </div>
          <br />
        </div>
      </div>

      <img
        className="img"
        src={Garantia}
        width="150px"
        height="150px"
        alt="estilista"
      />
      <h4>Aprovecha el 75 % de DESCUENTO.</h4>
      <a href="https://pay.hotmart.com/A44147927C?off=see5uoot&checkoutMode=10&offDiscount=ESPECIAL75OFF&ref=G77704509G&bid=1672098906578">
        <button className="comprar">COMPRAR AHORA</button>
      </a>
    </div>
  );
};
export default Microblading;
