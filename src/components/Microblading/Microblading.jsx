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

      <div class="container">
        <div className="container-lista">
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 1
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li class="col-5">
                <a class="dropdown-item">
                  {" "}
                  ¡Bienvenidos al Entrenamiento Profesional de Especialista en
                  Microblading de Cejas 2.0!
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Conociendo nuestra experta, sus logro, capacitaciones y
                  experiencia en el campo
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  ¡Queremos conocerte! Espacio creado para conocer mejor las
                  expectativas y necesidades de nuestras alumnas…
                </a>
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
              MODULO 2
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li class="row align-items-start">
                <a class="dropdown-item">
                  PRIMEROS PASOS PARA COMENZAR A SER UNA ESPECIALISTA EN
                  MICROBLADING.Lección 1: Conociendo la metodología de
                  aprendizaje y lo que vas a lograr hacer
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Conociendo las oportunidades y beneficios de de saber aplicar
                  la técnica de Microblading
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Introducción a la Bioseguridad e Higiene
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Conociendo la anatomía de la piel, sus características y capa
                  donde debemos realizar la técnica
                </a>
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
              MODULO 3
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">
                  Conociendo los materiales de práctica
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Conociendo los materiales de trabajo
                </a>
              </li>
              <li>
                <a class="dropdown-item">Anestésicos. Parte 1</a>
              </li>
              <li>
                <a class="dropdown-item">Anestésicos. Parte 2</a>
              </li>
              <li>
                <a class="dropdown-item">Pigmentos. Parte 1</a>
              </li>
              <li>
                <a class="dropdown-item">Pigmentos. Parte 2</a>
              </li>
              <li>
                <a class="dropdown-item">
                  {" "}
                  Degradado e intensidad de los pigmentos
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  {" "}
                  BONO DE REGALO: CheckList de Materiales de trabajo, de
                  práctica y de bioseguridad
                </a>
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
              MODULO 4
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">
                  DISEÑO Y CONSTRUCCIÓN DE UNA CEJA PARA MICROBLADING / BONO DE
                  REGALO
                </a>
              </li>
              <li>
                <a class="dropdown-item">Diseño de cejas para microblading</a>
              </li>
              <li>
                <a class="dropdown-item">
                  Medidas de una ceja para microblading
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Estructura, inicio y transiciones de una ceja
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Patrones de cejas, dirección de los pelos naturales a
                  realizar. La importancia de las distintas espinas. ESPINE.
                  PARTE 1
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Patrones de cejas, direcciones de los pelos naturales a
                  realizar. La importancia de las distintas espinas. SPINE.
                  PARTE 2
                </a>
              </li>
            </ul>
          </div>
          <br />
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 5
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">
                  {" "}
                  Practicando sobre papel. Guía práctica de trazos
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Movimientos de la aguja y cómo ingresarla correctamente.
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Práctica en piel superficial / Goma eva
                </a>
              </li>

              <li>
                <a class="dropdown-item">
                  Práctica en piel superficial. Latex. PARTE 2
                </a>
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
              MODULO 6
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">Cuidados post tratamiento</a>
              </li>
              <li>
                <a class="dropdown-item">Contraindicaciones</a>
              </li>
              <li>
                <a class="dropdown-item">
                  ¿Qué necesito saber sobre el retoque?
                </a>
              </li>
              <li>
                <a class="dropdown-item">Ficha técnica y resguardo jurídico</a>
              </li>
              <li>
                <a class="dropdown-item">
                  BONO DE REGALO: Descarga nuestra ficha técnica y resguardo
                  jurídico
                </a>
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
              MODULO 7
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">Recapitulando lo visto</a>
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
              MODULO 8
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">Diseño de cejas para microblading</a>
              </li>
              <li>
                <a class="dropdown-item">
                  {" "}
                  Rectificación de medidas y correcciones
                </a>
              </li>
              <li>
                <a class="dropdown-item">Variaciones de medidas y diseño</a>
              </li>
            </ul>
          </div>
          <br />

          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 9
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">
                  Microblading en modelo real paso a paso. Parte 1,2,3,4,5,6,7 Y
                  8
                </a>
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
              MODULO 10
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">
                  Recapitulando el paso a paso del procedimiento
                </a>
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
              MODULO 11
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">¡QUERER ES PODER!</a>
              </li>
              <li>
                <a class="dropdown-item">
                  Recomendaciones para empezar a ofrecer el servicio
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  {" "}
                  ¿A quién recomendar la técnica de microblading?
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  ¿Cuánto cobrar el servicio de microblading?
                </a>
              </li>
              <li>
                <a class="dropdown-item">Seguimiento y agenda</a>
              </li>
              <li>
                <a class="dropdown-item">
                  BONO DE REGALO: Elige tu diseño de agenda preferido
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  Mobiliario base para tu centro de belleza
                </a>
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
              MODULO 12
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">
                  PACK LIBROS DE BELLEZA / BONO DE REGALO
                </a>
              </li>
            </ul>
          </div>
          <br />
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MODULO 13
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item"> PREGUNTAS FRECUENTES – Q&A</a>
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
              MODULO 14
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">
                  {" "}
                  DESPEDIDA ¡Felicitaciones! ya sos una Especialista en
                  Microblading de cejas 2.0
                </a>
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
              MODULO 15
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a class="dropdown-item">
                  Instrucciones para descargar el certificado
                </a>
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
