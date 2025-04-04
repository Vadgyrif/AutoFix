import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
    return (
        <div className="contactUs">
            < div className="contactUs_text" >
                <h2  className="contactUs_title">Контакти</h2>
                <ul  className="contactUs_list">
                    <li>Телефон: <a href="tel:">+38 (066) XXX-XX-89</a></li>
                    <li>Email: <a href="mailto:">contact@example.com</a></li>
                    <li ><div className="social" >Соцмережі:</div>
                        <ul>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        </ul>
                    </li>
                    <li>Адреса: Проспект Волі, 1, Луцьк, Україна</li>
                </ul>
            </div>
            <div className="contactUs_map">
                <h3>Наше місцезнаходження на карті</h3>
                <div className="google-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.516749755744!2d25.323920376968942!3d50.74745126593427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472599ef3fa39e17%3A0xd5b8634e98077a56!2z0KbQo9CcLCDQv9GA0L7RgdC_0LXQutGCINCS0L7Qu9GWLCAxLCDQm9GD0YbRjNC6LCDQktC-0LvQuNC90YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDQzMDAw!5e0!3m2!1suk!2sua!4v1743768312826!5m2!1suk!2sua" 
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;