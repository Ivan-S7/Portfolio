import React from "react";
import '../Styles/Navbar.css'

function Navbar(){



    return(
      <div className="NB-container">
				<nav className="navbar navbar-expand-lg bg-body-none">
 					<div className="container-fluid inside-container">
						<div className="left-side">
							<p className="navbar-brand text-light">Iván Solórzano</p>
						</div>
						<div className="right-side">
						<div className="navbar-icons-div">
								<a className="icon-link" href="https://www.linkedin.com/in/iv%C3%A1n-sol%C3%B3rzano-esis-1922a31b5/?locale=en_US" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>

								<a className="icon-link" href="https://github.com/Ivan-S7" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
								
								<a href="https://drive.google.com/file/d/19rAwnu6egUJHyTze5F4xOAf-nTX3mSDy/view?usp=sharing" className="icon-link" target="_blank" rel="noopener noreferrer"><i class="bi bi-file-earmark-person"></i></a>
							</div>
						</div>
    				
    				
  				</div>
				</nav>

      	

      </div>
    )
}


export default Navbar;