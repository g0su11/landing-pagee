import React from "react";
import "./footer.scss";
export const Footer = () => {
  return (
    <div className="footer">
      <p>Thanks for visiting!</p>
      <div className="footer__title">
        <p className="info">designed by g0su12</p>
      </div>
      <ul className="footer__icons">
        <li className="icon-item">
          <a href="https://www.instagram.com/ngquag.huy/" className="icon-link"><i className="fa fa-instagram"></i></a>
        </li>
        <li className="icon-item">
          <a href="https://www.facebook.com/ngquag.huyy" className="icon-link"><i className="fa fa-facebook"></i></a>
        </li>
        <li className="icon-item">
          <a href="https://www.linkedin.com/in/g0su12/" className="icon-link"><i className="fa fa-linkedin"></i></a>
        </li>
      </ul>
    </div>  
  );
};