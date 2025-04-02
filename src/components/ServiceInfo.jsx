import React from "react";
import "./ServiceInfo.css";
import ServiceImage from "../assets/ServiceInfo.png";
import Ecology from "../assets/Ecology.png";
import Money from "../assets/money.png"
import Brush from "../assets/brush.png"

const  ServiceInfo = () => {

return(
    <div className="ServiceInfo">
        <div className="ServiceInfo-About">
            <div className="ServiceInfo_title">
                Про послугу
            </div>
            <div className="ServiceInfo_text"> Метод Paintless Dent Repair (PDR) – це сучасна технологія
                усунення вм’ятин без необхідності шпаклювання чи фарбування. Використовуючи 
                спеціальні інструменти, наш майстер дбайливо вирівнює поверхню, повертаючи 
                вашому авто первозданний вигляд.</div>
            <ul className="ServiceInfo_list" > 
                <li>
                <   img className="ServiceInfo_icon" src={Brush} alt="" /> Збереження заводського покриття - жодного шпаклювання чи перефарбування 
                </li>
                <li>
                    <img className="ServiceInfo_icon" src={Money} alt="" />Вигідна ціна - дешевше за традиційний кузовний ремонт </li>
                <li>
                    <img className="ServiceInfo_icon" src={Ecology} alt="5" />    Екологічність - відсутність шкідливих матеріалів та випарів 
                </li>
            </ul>
        </div>
        <div className="ServiceInfo_image"> 
            <img src={ServiceImage} alt="122" />
        </div>
    </div>
)


}

export default ServiceInfo; 