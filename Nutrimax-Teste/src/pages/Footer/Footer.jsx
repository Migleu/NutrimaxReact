import React from 'react';
import './Footer.css';
import instaIcon from '../../assets/instagram_icon.svg';
import faceIcon from '../../assets/facebook_icon.svg';
import whatsappIcon from '../../assets/whatsapp_icon.svg';
import iconNutriWhite from '../../assets/iconNutriWhite.svg'

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
                
                </a>

                <a href="#" className="footer-link" id="facebook">
                
                </a>

                <a href="#" className="footer-link" id="whatsapp">
                
                </a>
            </div>
        </div>

        

    </div>

    <div id="footer_copyright">
        <h3>&copy; 2023</h3>
    </div>
     
     
     </> );
}
 
export default Footer;