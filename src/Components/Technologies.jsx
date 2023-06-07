import React from "react";
import '../Styles/Technologies.css'
import logoHTML from '../images/html-5.png';
import logoCSS from '../images/css-3.png';
import logoJS from '../images/js.png';
import logoBootstrap from '../images/bootstrapLogo.png';

// Logos:
{/* <a href="https://www.flaticon.es/iconos-gratis/html-5" title="html 5 iconos">Html 5 iconos creados por Freepik - Flaticon</a> */}

{/* <a href="https://www.flaticon.es/iconos-gratis/css-3" title="css 3 iconos">Css 3 iconos creados por Freepik - Flaticon</a> */}

function Technologies(){

  return(
    <>
      <div className="technologies-container">
        <div className="container-fluid t-inside" id="t-inside">
          {/* -------------------------------------First Row------------------------------------- */}
          <div className="row first-t-row g-0">
            {/* ----------------HTML-------------------- */}
            <div className="col-12 col-md-4 t-div HTML-div">
              <div className="card" >
                
                <div className="tlogo-div">
                  <div className="ticon">
                    
                  <img src={logoHTML} alt="HTML-logo" className="logo html-logo" />
                  </div>
                  
                </div>
                <div className="card-body">
                  <p className="card-text t-name">HTML
                  </p>
                </div>
              </div>
            </div>
            {/* ------------------CSS------------------- */}
            <div className="col-12 col-md-4 t-div CSS-div">
            <div className="card" >

                <div className="tlogo-div">
                  <img src={logoCSS} alt="CSS-logo" className="logo css-logo" /> 
                </div>
            
                <div className="card-body">
                  <p className="card-text t-name">CSS
                  </p>
                </div>
              </div>
            </div>
            {/* ----------------JS--------------------- */}
            <div className="col-12 col-md-4 t-div JS-div">
            <div className="card" >
                <div className="tlogo-div">
                  <img src={logoJS} alt="Javascript-logo" className="logo js-logo" />
                </div>
                
                <div className="card-body">
                  <p className="card-text t-name">Javascript
                  </p>
                </div>
              </div>
            </div>

          </div>


          {/* ---------------------------------------Second Row-------------------------------------- */}
          <div className="row secondt-row g-0" id="segundo">
            

            <div className="col-12 col-md-6 t-div bootstrap-div">
              <div className="card" > 
                <div className="tlogo-div">           
                  <i class="fa-brands fa-bootstrap"></i>
                </div>
                  
                <div className="card-body">
                  <p className="card-text t-name">Bootstrap
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 t-div react-div">
              <div className="card" >
                <div className="tlogo-div">
                  <i class="fa-brands fa-react"></i>
                </div> 
                
                <div className="card-body">
                  <p className="card-text t-name">React
                  </p>
                </div>
              </div>
            </div>
            

          </div>

        </div>
        <hr className="t-hr" />
        
        

        

      </div>
    
    
    </>
  )


}

export default Technologies;