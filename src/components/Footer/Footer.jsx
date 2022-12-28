import React from "react";
import Whatsapp from "../fotos/whatsap.png";
import Instagram from "../fotos/instagram.png";
import Tiktok from "../fotos/tiktok.png";
import Facebook from "../fotos/facebook.png";

const Footer = () => {
  return (
    <div>
      <div className="container-curso">
        <h4>¿Tienes dudas sobre los Cursos Online?Escribeme por Whatsapp</h4>
        <a href="https://wa.link/qnptc0">
          <img src={Whatsapp} alt="" />
        </a>
        <h3>Ya son más de 1560 Alumnos que han tomado este ENTRENAMIENTO…</h3>

        <h5>Siguenos en Redes Sociales</h5>
        <div className="container-link">
          <a href="https://www.instagram.com/beuty.style.online/">
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.tiktok.com/@cursosbeutystyle?is_from_webapp=1&sender_device=pc">
            <img src={Tiktok} alt="" />
          </a>
          <a href="https://www.facebook.com/BeautyStylesgirls/">
            <img src={Facebook} alt="" />
          </a>
        </div>
      </div>
      <p>TODOS LOS DERECHOS RESERVADOS BEAUTY STYLE / @2022</p>
    </div>
  );
};
export default Footer;
