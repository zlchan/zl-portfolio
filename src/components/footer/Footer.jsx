import React from 'react'
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          Albert Chan
        </h1>

        <ul className="footer__list">
          <li>
            <a href="#about" 
            className="footer__link">About</a>
          </li>

          <li>
            <a href="#portofolio" 
            className="footer__link">Portfolio</a>
          </li>

          <li>
            <a href="#contact" 
            className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
            <a href="https://www.linkedin.com/in/zhilinchan"
            className="footer__social-link"
            rel="noreferrer">
                <i class="bx bxl-linkedin"></i>
            </a>

            <a href="https://www.instagram.com/albertchannn_/"
            className="footer__social-link"
            rel="noreferrer">
                <i class="bx bxl-instagram"></i>
            </a>

            <a href="https://github.com/zlchan"
            className="footer__social-link"
            rel="noreferrer">
                <i class="bx bxl-github"></i>
            </a>
        </div>

        <span className='footer__copy'>&#169; AlbertChan. All rigths reserved</span>
      </div>
    </footer>
  )
}

export default Footer
