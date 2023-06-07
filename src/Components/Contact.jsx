import React from "react";
import '../Styles/Contact.css'
import Footer from "./Footer";


function Contact(){
  


  return(
    <>
      <div className="Contact-section-container" id="Contact">

        <div className="container-fluid contact-grid">
          <div className="row contact-grid-row">

            <div className="col-12 col-sm-6 contact-info">
              <div className="contact-title">
                <h2>Contact</h2>
              </div>
              <div className="contact-description">
                <p>I would love to hear about your project and how i could help. Please fill in the form, and i'll get back to you as soon as possible.</p>
              </div>

            </div>
            {/* -------------------------Grid right side (form)-------------------------------------- */}
            <div className="col-12 col-sm-6 contact-form">
              <div className="container form-container">
                <form action="https://formsubmit.co/ivansolorzanoubf@gmail.com" method="POST" target="_blank">
                <div className="row form-row">
                  
                  <div className="col-12 form-col name-container ">
                    <label  class="form-label ">Name</label>
                    <input type="text" name="name" className="form-control"  aria-label="name" required/>
                  </div>

                  <div className="col-12 form-col email-container ">
                    <label  class="form-label">Email address</label>
                    <input type="email" className="form-control" name="email"   required/>
                  </div>

                  <div className="col-12 form-col textArea-container ">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control" maxLength={500} name="message"  required></textarea>
                  </div>

                  <input type="hidden" name="_autoresponse" value="Your message to Iván Solórzano has been delivered successfully.

                  Thank you very much for showing interest in my profile, I am excited to learn more about your project and how I could help. I will contact you as soon as possible, through the email address provided."></input>

                  <div className="col-12 form-col button-container ">
                    <button type="submit" >Send Message</button>

                  </div>

                </div>
                </form>
                

              </div>

            </div>

          </div>

        </div>

        <div className="hrContact">
          <hr className="contact-hr" />
        </div>
        
        <Footer/>
      </div>

    </>
  )
}

export default Contact;