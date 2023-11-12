import React from 'react';
import '../style/contactus.css'

function ContactUs() {
  return (
      <section className="contact" id="contact">
        <div className="container">
          <div className="heading text-center">
            <h2>Contact Us</h2>
                               
            <p>The Placement Cell at DA-IICT is a concept in its own form. It has the following structure comprising of three important parts viz. the placement office comprising of the Manager (Placements) and placement secretary, the faculty members and finally the student representatives from each stream. The structure aims at touching all the aspects required for the smooth functioning of placement process.
             </p>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="title">
                <h3>Contact detail</h3>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p> */}
              </div>
              <div className="content">
                {/* Info-1 */}
                <div className="info">
                  <i className="fas fa-mobile-alt" />
                  <h4 className="d-inline-block">PHONE :
                    <br />
                    <span>+12457836913 , +12457836913</span></h4>
                </div>
                {/* Info-2 */}
                <div className="info">
                  <i className="far fa-envelope" />
                  <h4 className="d-inline-block">EMAIL :
                    <br />
                    <span> placement@daiict.ac.in</span></h4>
                </div>
                {/* Info-3 */}
                <div className="info">
                  <i className="fas fa-map-marker-alt" />
                  <h4 className="d-inline-block">ADDRESS :<br /></h4>
                   <h4> Dhirubhai Ambani Institute of Information and Communication Technology, Near Indroda Circle, Gandhinagar - 382 007, Gujarat (India)</h4>
                </div>
              </div>
            </div>
            <div className="col-md-7">
             
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4972641895024!2d72.6263405749077!3d23.18854191011498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2a3c9618d2c5%3A0xc54de484f986b1fa!2sDA-IICT!5e0!3m2!1sen!2sin!4v1699774054316!5m2!1sen!2sin"
             width="600" height="300" 
             style={{border:"0"}} allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade"></iframe>
             
            </div>
          </div>
        </div>
      </section>
  );
}

export default ContactUs;