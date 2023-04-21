import React from "react";
import "../css/Contact-style.css";
function Contact(props) {
  return (
    <>
      <div className="contact-section">
        <div className="contact-header">
          <h1>CONTACT US</h1>
          <p>Have any questions? We'd love to hear from you.</p>
        </div>
        <div className="contact-form">
          <form>
            <label>
              Full name:
              <input type="text" />
            </label>

            <label>
              Email Address:
              <input type="text" />
            </label>

            <label>
              Enter your Message Here:
              <textarea className="Message-box" type="text" />
            </label>
            <input className="contact-submit-btn" type="submit" />
          </form>
        </div>
        <div className="contact-footer">
          <p>Emart Ltd, Sector-40, Gurugram, Haryana, INDIA</p>
          <p>
            000-000-0000 <br /> 000-000-0000
          </p>
          <p>Enquiry@emart.com</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
