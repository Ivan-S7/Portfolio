import React from "react";
import '../Styles/Header.css'
import Navbar from "./Navbar";
import myPic from '../images/ivan.jpeg'
import nobgPic from '../images/ivan-nobg.png'
import nobgPic2 from '../images/ivan-nobg-2.png'
import ivanPic from '../images/ivan-picture.png'


const Header = () =>{


    return(
        <>
        <div className="header-container container-fluid" >
            <header>
                <div className="conatiner-fluid grid-container">
                <Navbar/>
                    <div className="row grid-row headerGridRow">
                        
                        {/* ---------------Grid left Side---------------------------- */}
                        <div className="col-12 col-sm-6 grid-left-side header-left-side">
                            <div className="hero-title">
                                <h2 className="title">Nice to meet you!</h2>
                                <h2 className="title">I'm <span className="title-name">Iván Solórzano</span></h2>

                            </div>
                            
                            <div className="about-me">
                                <p>Based in Venezuela, I'm an oil engineer and front-end developer passionate about building web apps that users love.  </p>
                            </div>

                            <div className="contact-me">
                                <a href="#Contact"><p className="contact-link">CONTACT ME</p></a>

                            </div>

                        </div>


                        {/* ---------------Grid Right Side------------------------------ */}
                        <div className="col-12 col-sm-6 grid-right-side header-right-side">
                            <div className="img-container">
                                <img src={ivanPic} alt="Ivan-photo" className="myPic" />

                            </div>

                        </div>
                        
                        
                    </div>
                    <div className="hr-div">
                        <hr className="isse" id="isse" />
                    </div>

                    
                </div>
                
                
                    

            </header>
       </div>
       </>
    )
}




export default Header;