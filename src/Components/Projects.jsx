import React from "react";
import '../Styles/Projects.css';
import weatherAppPr from '../images/weatherApp2.png';
import pokedexPr from '../images/pokedex1.png'
import introPr from '../images/introdd.jpg';


const Projects = () =>{


  return(
    <>
    <div className="projects-container">
      <div className="section-title">
        <div className="projects-title">
          <h3 className="Projects">Projects</h3>
        </div>

        <div className="contact2">
          <a href="#Contact">
            <h5 className="contactMe2">Contact Me</h5>
          </a>

        </div>

      </div>

      {/* ---------------------------------Projects Grid-------------------------- */}
      <div className="container p-grid-container">
        <div className="row p-grid-row g-3">
          {/* ---------weather App------- */}
          <div className="col-12 col-md-12 col-lg-4 p-div weather-app-div">
            <img src={weatherAppPr} alt=" weather-APP-img" className="project-img weatherpr" />

            <div className="project-Description d-flex d-lg-none">
              <h4>Weather App</h4>
              <div className="project-option">
                <div><a href="https://ivan-s7.github.io/Weather-App/" target='_blank' rel="noopener noreferrer"><p>VIEW PROJECT</p></a></div>
                <div><a href="https://github.com/Ivan-S7/Weather-App" target='_blank' rel="noopener noreferrer" ><p>VIEW CODE</p></a></div>

              </div>
            </div>
            
            <div class="overlay d-none d-lg-flex">
              <p>Weather App</p>
              <div class="overlay-icons">
                <a href="https://github.com/Ivan-S7/Weather-App" target="_blank" rel="noopener noreferrer" className="overlay-icon">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://ivan-s7.github.io/Weather-App/" target="_blank" rel="noopener noreferrer" className="overlay-icon">
                  <i class="bi bi-laptop"></i>
                </a>
              </div>
            </div>

          </div>

          {/* ---------Pokedex------------- */}
          <div className="col-12 col-md-12 col-lg-4 p-div pokedex-app-div">
            <img src={pokedexPr} alt="pokedex-img" className="project-img pokedexpr" />

            <div className="project-Description d-flex d-lg-none">
              <h4>Pokedex App</h4>
              <div className="project-option">
                <div><a href="https://ivan-s7.github.io/pokedex/" target='_blank' rel="noopener noreferrer"><p>VIEW PROJECT</p></a></div>
                <div><a href="https://github.com/Ivan-S7/pokedex" target='_blank' rel="noopener noreferrer"><p>VIEW CODE</p></a></div>

              </div>
            </div>

            <div class="overlay d-none d-lg-flex">
              <p>Pokedex App</p>
              <div class="overlay-icons">
                <a href="https://github.com/Ivan-S7/pokedex" target="_blank" rel="noopener noreferrer" className="overlay-icon">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://ivan-s7.github.io/pokedex/" target="_blank" rel="noopener noreferrer" className="overlay-icon">
                  <i class="bi bi-laptop"></i>
                </a>
              </div>
            </div>
          </div>

          {/* ----------Intro Section------- */}
          <div className="col-12 col-md-12 col-lg-4 p-div introSection-app-div">
            <img src={introPr} alt="" className="project-img introPr" />

            <div className="project-Description d-flex d-lg-none">
              <h4>Intro Section</h4>
              <div className="project-option">
                <div><a href="https://ivan-s7.github.io/Intro-Section/" target='_blank' rel="noopener noreferrer"><p>VIEW PROJECT</p></a></div>
                <div><a href="https://github.com/Ivan-S7/Intro-Section" target='_blank' rel="noopener noreferrer" ><p>VIEW CODE</p></a></div>

              </div>
            </div>

            <div class="overlay d-none d-lg-flex">
              <p>Intro Section</p>
              <div class="overlay-icons">
                <a href="https://github.com/Ivan-S7/Intro-Section" target="_blank" rel="noopener noreferrer" className="overlay-icon">
                  <i class="bi bi-github"></i>
                </a>
                <a href="https://ivan-s7.github.io/Intro-Section/" target="_blank" rel="noopener noreferrer" className="overlay-icon">
                  <i class="bi bi-laptop"></i>
                </a>
              </div>
            </div>
            
            

          </div>

        </div>

      </div>

    </div>
    
    
    
    
    </>
  )
}


export default Projects;