import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import svg from "../../images/sprite.svg";

const Footer = () => {
  return (
    <Fragment>
      <div className="footerSpacer"></div>
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
              <Link className="footer__logo" to="/">MovieDB</Link>
              <ul className="footer__ul">
                <li className="footer__li"><Link to="/profile">Profile</Link></li>
                <li className="footer__li"><Link to="/contact">Contact us</Link></li>
              </ul>
              <ul className="footer__ul">
                <li className="footer__li">
                  <svg className="footer__icon">
                    <use xlinkHref={`${svg}#icon-facebook-with-circle`}></use>
                  </svg>
                </li>
                <li className="footer__li">
                  <svg className="footer__icon">
                    <use xlinkHref={`${svg}#icon-twitter-with-circle`}></use>
                  </svg>
                </li>
                <li className="footer__li">
                  <svg className="footer__icon">
                    <use xlinkHref={`${svg}#icon-pinterest-with-circle`}></use>
                  </svg>
                </li>
                <li className="footer__li">
                  <svg className="footer__icon">
                    <use xlinkHref={`${svg}#icon-instagram-with-circle`}></use>
                  </svg>
                </li>
                <li className="footer__li">
                  <svg className="footer__icon">
                    <use xlinkHref={`${svg}#icon-youtube`} title="test" alt="test"></use>
                  </svg>
                </li>
              </ul>
          </div>
          <div className="footer__bottom">
              Copyright© 2019 <strong>MOVIEDB</strong>. All Rights Reserved.
          </div>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer;
