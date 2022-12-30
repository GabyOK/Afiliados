import React from "react";
import Henna from "../fotos/henna.png";
import Garantia from "../fotos/garantia.png";
import Cover from "../fotos/cover.png";
import "./Cursos.css";

const Cursos = () => {
  return (
    <div className="container">
      <h3 className="titulo">TINTURA Y HENNA PARA CEJAS EXPRESS</h3>
      <h6>
        Aprende desde CERO,de manera PROFESIONAL cómo tener unas CEJAS de
        REVISTA, "TUPIDAS, NATURALES Y SIN ESPACIOS VACIOS!" Con la aplicación
        de TINTURA Y HENNA PARA CEJAS Ahorra tiempo, dinero, trabajo y olvídate
        del maquillaje diario dándole al ROSTRO un aspecto BELLO Y VIGOROSO con
        una técnica no invasiva, fácil de aplicar y super económica.
      </h6>
      <img
        className="img-henna"
        src={Henna}
        width="350px"
        height="200px"
        alt="estilista"
      />
      <ul className="lista">
        <h2>¿Que vas aprender?</h2>
        <li>Aprender y practicar la técnica desde 0 .</li>
        <li>
          Aplicar el método ideal para practicar, elaborar y obtener los mejores
          resultados en cejas.
        </li>
        <li>
          Elaborar un diseño según la morfología del rostro de cada persona.
        </li>
        <li>
          Elegir el pigmento que mejor se acomode a tus necesidades. Aprender
          tips prácticos de la técnica y su aplicación.
        </li>
        <li>
          Generar ingresos adicionales y manejar tu tiempo para dedicarte a lo
          que más te gusta. Aprender desde la comodidad de tu casa a tu propio
          ritmo.
        </li>
        <li>¡ACCESO ILIMITADO Y PARA TODA LA VIDA! INCLUYE</li>
        <li>
          <h4>GARANTÍA DE SATISFACCIÓN DE 7 DÍAS.</h4>
        </li>
      </ul>
      <img
        className="img-cover"
        src={Cover}
        width="350px"
        height="250px"
        alt="estilista"
      />
      <div className="modulo">
        <h5>MÓDULOS DEL CURSO </h5>
        <h5>Conoce todo lo que vas a Aprender:</h5>
      </div>

      <div class="container-items">
        <div className="container-lista">
          <div class="dropdown">
            <a
              href="#"
              class="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              BIENVENIDA
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li class="col-5">Bienvenido/a</li>
            </ul>
          </div>
          <br />
          <div class="dropdown">
            <a
              href="#"
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              INTRODUCCIÓN A LA TINTURA Y HENNA PARA CEJAS
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="row align-items-start dropdown-item">
                Henna para cejas, ¡consigue un resultado profesional en casa!
              </li>
              <li>Remedios naturales para hacer crecer las cejas</li>
            </ul>
          </div>
          <br />
          <div className="dropdown">
            <a
              href="#"
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              MATERIALES DE TRABAJO Y DE PRÁCTICA
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="row align-items-start dropdown-item">
                Parte 1. Materiales de trabajo para diseño y perfilado de cejas
              </li>
              <li className="dropdown-item">
                Parte 2. Materiales de práctica para diseño y perfilado de cejas
              </li>
            </ul>
          </div>
          <br />
          <div className="dropdown">
            <a
              href="#"
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              PREPARACIÓN PREVIA DE LA PIEL Y SUPERFICIE A TRABAJAR
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Parte 3. Higienización de la piel previa al tratamiento
              </li>

              <li className="dropdown-item">
                Parte 4. Diseño de Cejas, cómo practicarlo eficientemente.
              </li>
              <li className="dropdown-item">
                Parte 5. Técnica de marcación de diseño con hilo
              </li>
              <li className="dropdown-item">
                Parte 6. Medidas estándares que deberían tener unas cejas
              </li>
              <li className="dropdown-item">
                Parte 7. Construcción de diseño de cejas
              </li>
            </ul>
          </div>
          <br />
          <div className="dropdown">
            <a
              href="#"
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              TIPOS DE TINTURA, USO Y PRÁCTICA CORRECTA
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Parte 8. Tipos de tintura y hennas
              </li>
              <li className="dropdown-item">
                Parte 9. Aplicación correcta de la tintura de cejas
              </li>
              <li className="dropdown-item">
                Parte 10. Corrección y errores comunes de la aplicación de
                tintura henna
              </li>
            </ul>
          </div>
          <br />

          <div className="dropdown">
            <a
              href="#"
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              PRÁCTICA EN MODELO Y TIPS A TENER EN CUENTA
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Parte 11. Práctica de tintura de cejas en modelo
              </li>
              <li className="dropdown-item">
                Parte 12. Práctica de aplicación de tintura de cejas en uno
                mismo
              </li>
              <li className="dropdown-item">
                Parte 13. Correcciones de diseño y tintura en uno mismo
              </li>
              <li className="dropdown-item">Parte 14. Preguntas frecuentes</li>
            </ul>
          </div>
          <br />

          <div className="dropdown">
            <a
              href="#"
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              BONOS DE REGALO - PDF
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">CURSO BÁSICO DE MAQUILLAJE</li>
              <li className="dropdown-item">CURSO DE AUTOMAQUILLAJE</li>
              <li className="dropdown-item">
                MAQUILLAJE PARA UN EVENTO DE DÍA
              </li>
              <li>
                <a href="#" className="dropdown-item">
                  MI MÉTODO PROBADO PARA TRANSFORMARTE EN UNA MAQUILLADORA DE
                  ÉXITO
                </a>
              </li>
              <li className="dropdown-item">
                QUÉ SON COSMÉTICOS Y CÓMO SELECCIONARLOS
              </li>
              <li className="dropdown-item">
                LAS MEJORES PRÁCTICAS PARA CAPTAR Y FIDELIZAR CLIENTES
              </li>
            </ul>
          </div>
          <br />
          <div className="dropdown">
            <a
              href="#"
              className="btn btn-secondary dropdown-toggle"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              CÓMO OBTENER TU CERTIFICADO
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdown-item">
                Explicativo con el paso a paso de cómo descargar tu Certificado
              </li>
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
      <h4>Aprovecha el 83% de DESCUENTO.</h4>
      <a href="https://pay.hotmart.com/H62161966Y?off=f7ji1l7n&checkoutMode=10&offDiscount=ESPECIAL83OFF&ref=T77703701A&bid=1671762526333">
        <button className="comprar">COMPRAR AHORA</button>
      </a>
    </div>
  );
};
export default Cursos;
