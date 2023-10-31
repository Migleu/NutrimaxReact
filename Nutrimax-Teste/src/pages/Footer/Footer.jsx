import React from 'react';
import './Footer.css';
import instaIcon from '../../assets/instagram_icon.svg';
import faceIcon from '../../assets/facebook_icon.svg';
import whatsappIcon from '../../assets/whatsapp_icon.svg';
import iconNutriWhite from '../../assets/iconNutriWhite.svg'
import iconFacebook from '../../assets/iconFacebook.svg';
import iconWhatsapp from '../../assets/iconWhatsapp.svg';
import iconInstagram from '../../assets/iconInstagram.svg';

const Footer = () => {
     return ( <>
         <div id="footer_content">
             <div className="logo">
                 <img src={iconNutriWhite} alt="" />
                 <h1>Nutri<span>Max</span></h1>
             </div>
             <div id="footer_contacts">

            <div id="footer_social_media">
                <a href="#" className="footer-link" id="instagram">
                    <img src={iconInstagram} alt="" />
                </a>

                <a href="#" className="footer-link" id="facebook">
                    <img src={iconFacebook} alt="" />
                </a>

                <a href="#" className="footer-link" id="whatsapp">
                    <img src={iconWhatsapp} alt="" />
                </a>
            </div>
        </div>
        <div id="footer-recado">
            <p>NutriMax oferece planos personalizados, educação nutricional e apoio para ajudar você a atingir seus objetivos de saúde e bem-estar. Juntos, vamos transformar sua vida através de escolhas alimentares conscientes. Junte-se a nós nessa jornada para uma vida mais saudável e feliz.</p>
        </div>

        

    </div>

    <div id="footer_copyright">
        <h3>&copy; 2023</h3>
    </div>
     
     
     </> );
}
 
export default Footer;