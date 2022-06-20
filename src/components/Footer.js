import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./../App.css";
import ltiBlanco from "./../img/lti-blanco-04.svg";
/* import ig from "./../img/instagram.svg";
 */
export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-logoContainer">
            <img src={ltiBlanco} className="footer-logo"></img>
            <div className="footer-letrasLogoContainer">
              <h6 className="footer-letrasLogo">La</h6>
              <h6 className="footer-letrasLogo">Tierra</h6>
              <h6 className="footer-letrasLogo">Invisible</h6>
            </div>
          </div>
          <div className="footer-contactContainer">
            <p className="footer-text">
              Del Barco Centenera 1099<br></br>Parque Chacabuco. CABA
            </p>
          </div>
          <div className="footer-instagramContainer">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
            <p className="footer-text">@la.tierra.invisible</p>
          </div>
        </div>
      </footer>
    </>
  );
}
