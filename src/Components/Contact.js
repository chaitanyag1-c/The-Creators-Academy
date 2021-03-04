import React from 'react'
import './contact.css'
import emailjs from 'emailjs-com';
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_8o11so6', 'template_60f3jq9', e.target, 'user_L5WbOZGv8Ai94tr8CIHVj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    }

    return (
        <div>
        <section className="contactsection">
            <div className="container">
  <div className="innerwrap">
    <section className="section1 clearfix">
      <div className="textcenter">
        <span className="shtext" style={{fontSize:'22px'}}>Contact Us</span>
        <span className="seperator" />
        <h1>Drop Us a Mail</h1>
      </div>
    </section>
    <section className="section2 clearfix">


      <div className="col2 column1 first">
      <div className="map">
 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.303525613086!2d75.88897191521691!3d22.754114432017253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39630307f145be23%3A0x2306d78802fbcf9f!2sThe%20Creators%20Academy!5e0!3m2!1sen!2sin!4v1614787061000!5m2!1sen!2sin" width={500} height={590} style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
</div>

      </div>
      <div className="col2 column2 last">
        <div className="sec2innercont">
          <div className="sec2addr">
            <p>5, 18, near Jain Mandir, Vijay Nagar, Indore</p>
            <p><span className="collig">Phone :</span> +91 9479958843</p>
            <p><span className="collig">Email :</span> chaitany.galande@gmail.com</p>
          </div>
        </div>
        <div className="sec2contactform">
          <h3 className="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
          <form onSubmit={sendEmail}>
            <div className="clearfix">
              <input className="col2 first" type="text" placeholder="FirstName" name="name" autoComplete="off"/>
              <input className="col2 last" type="text" placeholder="LastName" autoComplete="off"/>
            </div>
            <div className="clearfix">
              <input className="col2 first" type="Email" placeholder="Email" name="email" autoComplete="off"/>
              <input className="col2 last" type="text" placeholder="Contact Number" autoComplete="off"/>
            </div>
            <div className="clearfix">
              <textarea name="textarea" id cols={30} rows={7} placeholder="Your message here" />
            </div>
            <div className="clearfix" id="contact"><input type="submit"  /></div>
          </form>
        </div>
      </div>
    </section>
  </div>
</div>
  </section>

        </div>
    );
}

export default Contact
