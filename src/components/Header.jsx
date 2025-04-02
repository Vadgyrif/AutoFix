import React from "react";
import headerImg from '../assets/header-image.png';
import "./Header.css";

const Header = () => {
    return(
        <header className="header">
            <div className="header-content">
                <div className="header-content_image">
                    <img src={headerImg}  alt="123" />
                </div>
                <div className="header-content_text">
                    <p>Видалення вм'ятин без фарбування</p>
                    <button className="consult-btn">Безкоштовна консультація</button>
                </div>
                
            </div>
        </header>
    );
}

export default Header;

