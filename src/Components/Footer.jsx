import React from "react";
import '../Styles/Footer.css';


function Footer(){

  return(
    <>
    <div className="footer-container">
      <div className="footer-inside-container">


        <div className="footer-left">
          <p>Iván Solórzano</p>
        </div>

        <div className="footer-right">
          <a className="icon-link" href="https://www.linkedin.com/in/iv%C3%A1n-sol%C3%B3rzano-esis-1922a31b5/?locale=en_US" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>

				  <a className="icon-link" href="https://github.com/Ivan-S7" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>

        </div>
      </div>
      
    </div>
    
    
    </>
  )

}

export default Footer;