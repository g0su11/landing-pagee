import React from "react";
import "./contact.scss";

export const Contact = () => {
  return(
    <div className="contact" id="contact">
      <div className="contact__info">
        <h3>CONTACT</h3>
        <ul>
          <li>cskh@restaurant.com</li>
          <li>0123456789</li>
          <li>Ha Dong - Ha Noi - Viet Nam</li>
          <li>@restaurant</li>
        </ul>
      </div>
      <div className="contact__form">
        <form>
          <ul className="form-style-1">
              <li>
                <label>
                  Full Name 
                  <span className="required">*</span>
                </label>
                <input type="text" name="field1" className="field-divided" placeholder="First" /> 
                <input type="text" name="field2" className="field-divided" placeholder="Last" />
              </li>
              <li>
                  <label>
                    Email 
                    <span className="required">*</span>
                  </label>
                  <input type="email" name="field3" className="field-long" />
              </li>
              <li>
                  <label>
                    Your Message 
                    <span className="required">*</span>
                  </label>
                  <textarea name="field5" id="field5" className="field-long field-textarea"></textarea>
              </li>
              <li>
                  <input type="submit" value="Submit" />
              </li>
          </ul>
        </form>
      </div>
    </div>
  );
};