import React from 'react'
import "./Footer.css"
import { GrInstagram } from 'react-icons/gr';
import { AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer">
            <div className="pages">
                <h2>Sayfalar</h2>
                <Link to="/books" className="link">
                <span>Kitaplarımız</span>
                </Link>
                <Link to="/author" className="link">
                <span>Yazarlarımız</span>
                </Link>
            </div>
            <div className="contact">
                <h2>İletişim</h2>
                <span>Mert Faik Çiğdem</span>
                <span>T : 0 553 077 30 71</span>
                <span>M : mertfaikcigdem@gmail.com</span>
            </div>
            <div className="social">
                <h2>Sosyal Medya</h2>
                <a href="https://www.instagram.com/mertfaikcigdem/"><GrInstagram  className="icons"/></a>
                <a href="https://twitter.com/mertfaikcigdem"><AiFillTwitterCircle  className="icons"/></a>
                <a href="https://www.linkedin.com/in/mertfaikcigdem/"><AiFillLinkedin  className="icons"/></a>
            </div>
        </div>
    )
}

export default Footer
