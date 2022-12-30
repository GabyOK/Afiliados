import React from "react";
import Whatsapp from "../fotos/whatsap.png";
import Instagram from "../fotos/instagram.png";
import Tiktok from "../fotos/tiktok.png";
import Facebook from "../fotos/facebook.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-curso">
        <h4>¿Tienes dudas sobre los Cursos Online?Escribeme por Whatsapp?</h4>
        <a href="https://wa.link/qnptc0">
          <img src={Whatsapp} alt="" />
        </a>
        <div className="redes">
          <h3>Ya son más de 2560 Alumnos que han tomado este ENTRENAMIENTO…</h3>
          <h5>Siguenos en Redes Sociales</h5>
        </div>
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
        </div>{" "}
        <br />
        <h6 className="derechos">
          TODOS LOS DERECHOS RESERVADOS BEAUTY STYLE / @2022
        </h6>
      </div>
    </div>
  );
};
export default Footer;
