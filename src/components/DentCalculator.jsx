import { useState } from "react";
import "./DentCalculator.css";

const DentCalculator = () => {
    const [dents, setDents] = useState(1);
    const [damageLevel, setDamageLevel] = useState(1);
    const [location, setLocation] = useState(1);

    const basePrice = 1000;
    const extraDentPrice  = 200;

    const calculatePrice = () =>{
        return(basePrice + (dents - 1 ) * extraDentPrice) * damageLevel * location;
    }

    return (

        <div className="calculator">
            <h2 className="calculator-title">Калькулятор вартості ремонту*</h2>
             {/* кількість вм'ятин*/}

            <div className="calculator-inputs">

                <div className="input-group">
                    <label>Кількість вм'ятин</label>
                    <input 
                        type="number"
                        min={1}
                        value={dents}
                        onChange={(e) => setDents(Number(e.target.value))} 
                    />
                </div>

             
            
                {/**Ступінь пошкодження */}

                <div className="input-group">
                    <label> Cтупінь пошкодженя</label>
                    <select value={damageLevel} onChange={(e) => setDamageLevel(Number(e.target.value)) } >
                        <option value="1">Легка - ледь помітна</option>
                        <option value="1.2">Середня - значне пошкодження | важко визначити</option>
                        <option value="1.5">Глибока - серйозне пошкодження</option>
                    </select>
                </div>

                {/**Локація */}

                <div className="input-group">
                    <label> Локація вм'ятини</label>
                    <select value={location} onChange={(e) => setLocation(Number(e.target.value)) } >
                        <option value="1">Двері</option>
                        <option value="1.1">Капот || Багажник</option>
                        <option value="1.2">Крило</option>
                        <option value="1.3"> Інше</option>
                    </select>
                </div>

            </div>



            <h2 className="price">Орієнтована вартість : <span className="price-cash">{calculatePrice()} грн</span> </h2>
            <p className="calculator-explanation"> *Розрахована лише приблизна вартість ремонту. Для більш точної оцінки вартості і складності ремонту радимо
                Вам звернутися до нашого майстра на безкоштовну консультацію</p>
        </div>
    );

}

export default DentCalculator;