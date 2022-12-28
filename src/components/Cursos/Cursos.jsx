import React from "react";
import Henna from "../fotos/henna.png";
import Garantia from "../fotos/garantia.png";
import Cover from "../fotos/cover.png";
import "./Cursos.css";

const Cursos = () => {
  return (
    <div>
      <h3>TINTURA Y HENNA PARA CEJAS EXPRESS</h3>
      <h5>
        Aprende desde CERO,de manera PROFESIONAL cómo tener unas CEJAS de
        REVISTA, "TUPIDAS, NATURALES Y SIN ESPACIOS VACIOS!" Con la aplicación
        de TINTURA Y HENNA PARA CEJAS Ahorra tiempo, dinero, trabajo y olvídate
        del maquillaje diario dándole al ROSTRO un aspecto BELLO Y VIGOROSO con
        una técnica no invasiva, fácil de aplicar y super económica.
      </h5>
      <img
        className="img"
        src={Henna}
        width="350px"
        height="200px"
        alt="estilista"
      />
      <ul>
        ¿Que vas aprender?
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
          tips prácticos de la técnica y su aplicación. Podrás recuperar la
          inversión de inmediato.
        </li>
        <li>
          Generar ingresos adicionales y manejar tu tiempo para dedicarte a lo
          que más te gusta. Aprender desde la comodidad de tu casa a tu propio
          ritmo.
        </li>
        <li>
          Tendrás un CERTIFICADO de culminación. ¡ACCESO ILIMITADO Y PARA TODA
          LA VIDA! INCLUYE
        </li>
        <li>
          <h4>GARANTÍA DE SATISFACCIÓN DE 7 DÍAS.</h4>
        </li>
      </ul>
      <img
        className="img"
        src={Cover}
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
          BIENVENIDA
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">Bienvenido/a</a>
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
          INTRODUCCIÓN A LA TINTURA Y HENNA PARA CEJAS
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">
              Henna para cejas, ¡consigue un resultado profesional en casa!
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              Remedios naturales para hacer crecer las cejas
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
          MATERIALES DE TRABAJO Y DE PRÁCTICA
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">
              Parte 1. Materiales de trabajo para diseño y perfilado de cejas
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              Parte 2. Materiales de práctica para diseño y perfilado de cejas
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
          PREPARACIÓN PREVIA DE LA PIEL Y SUPERFICIE A TRABAJAR
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">
              Parte 3. Higienización de la piel previa al tratamiento
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              Parte 4. Diseño de Cejas, cómo practicarlo eficientemente.
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              Parte 5. Técnica de marcación de diseño con hilo
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              Parte 6. Medidas estándares que deberían tener unas cejas
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              Parte 7. Construcción de diseño de cejas
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
          TIPOS DE TINTURA, USO Y PRÁCTICA CORRECTA
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">Parte 8. Tipos de tintura y hennas</a>
          </li>
          <li>
            <a class="dropdown-item">
              Parte 9. Aplicación correcta de la tintura de cejas
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              Parte 10. Corrección y errores comunes de la aplicación de tintura
              henna
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
          PRÁCTICA EN MODELO Y TIPS A TENER EN CUENTA
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">
              Parte 11. Práctica de tintura de cejas en modelo
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              Parte 12. Práctica de aplicación de tintura de cejas en uno mismo
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              Parte 13. Correcciones de diseño y tintura en uno mismo
            </a>
          </li>
          <li>
            <a class="dropdown-item">Parte 14. Preguntas frecuentes</a>
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
          BONOS DE REGALO - PDF
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">CURSO BÁSICO DE MAQUILLAJE</a>
          </li>
          <li>
            <a class="dropdown-item">CURSO DE AUTOMAQUILLAJE</a>
          </li>
          <li>
            <a class="dropdown-item">MAQUILLAJE PARA UN EVENTO DE DÍA</a>
          </li>
          <li>
            <a class="dropdown-item">
              MI MÉTODO PROBADO PARA TRANSFORMARTE EN UNA MAQUILLADORA DE ÉXITO
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              QUÉ SON COSMÉTICOS Y CÓMO SELECCIONARLOS
            </a>
          </li>
          <li>
            <a class="dropdown-item">
              LAS MEJORES PRÁCTICAS PARA CAPTAR Y FIDELIZAR CLIENTES
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
          CÓMO OBTENER TU CERTIFICADO
        </a>

        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <li>
            <a class="dropdown-item">
              {" "}
              Explicativo con el paso a paso de cómo descargar tu Certificado
            </a>
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
      <h4>Aprovecha el 83% de DESCUENTO.</h4>
      <a href="https://pay.hotmart.com/H62161966Y?off=f7ji1l7n&checkoutMode=10&offDiscount=ESPECIAL83OFF&ref=T77703701A&bid=1671762526333">
        <button class="button">COMPRAR AHORA</button>
      </a>
    </div>
  );
};
export default Cursos;
