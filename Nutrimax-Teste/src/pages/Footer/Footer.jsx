import React from 'react';
import './Footer.css';
import instaIcon from '../../assets/instagram_icon.svg';
import faceIcon from '../../assets/facebook_icon.svg';
import whatsappIcon from '../../assets/whatsapp_icon.svg';

const Footer = () => {
     return ( <>
     <div id="footer_content">
        <div id="footer_contacts">
            <h1><i className="fa-solid fa-apple-whole"></i>NutriMax</h1>
            <p>entre em contato conosco.</p>

            <div id="footer_social_media">
                <a href="#" className="footer-link" id="instagram">
                <img src={instaIcon} alt=""/>
                </a>

                <a href="#" className="footer-link" id="facebook">
                <img src={faceIcon} alt=""/>
                </a>

                <a href="#" className="footer-link" id="whatsapp">
                <img src={whatsappIcon} alt=""/>
                </a>
            </div>
        </div>

        <ul className="footer-list">
            <li>
                <h3>Blog</h3>
            </li>
            <li>
                <a href="#" className="footer-link">Tech</a>
            </li>
            <li>
                <a href="#" className="footer-link">Adventures</a>
            </li>
            <li>
                <a href="#" className="footer-link">Music</a>
            </li>
        </ul>

        <ul className="footer-list">
            <li>
                <h3>Products</h3>
            </li>
            <li>
                <a href="#" className="footer-link">App</a>
            </li>
            <li>
                <a href="#" className="footer-link">Desktop</a>
            </li>
            <li>
                <a href="#" className="footer-link">Cloud</a>
            </li>
        </ul>

        <div id="footer_subscribe">
            <h3>Subscribe</h3>

            <p>
                Envie uma mensagem em nosso email, digite a mensagem abaixo
            </p>

            <div id="input_group">
                <input type="email" id="email"/>
                <button>
                    <i className="fa-regular fa-envelope"></i>
                </button>
            </div>
        </div>
    </div>

    <div id="footer_copyright">
        <h3>&copy; 2023</h3>
    </div>
     
     
     </> );
}
 
export default Footer;