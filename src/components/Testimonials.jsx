import React from "react";
import { Element } from "react-scroll";
import "./Testimonials.css";

const Testimonials = () => {
    return (
        <Element name="reviews">
            <div data-aos="fade-up" className="testimonials">
                <h2 className="testimonials_title">Відгуки наших клієнтів</h2>
                <div className="testimonials-container">
                    <div className="testimonial">
                        <p className="testimonial_title">Іван К.</p>
                        <p className="automodel">Audi A6 </p>
                        <p className="testimonial_text">"Рекоментдую всім! Я отримав професійну допомогу і дуже задоволений результатом."</p>
                        
                    </div>
                    <div className="testimonial">
                        <p  className="testimonial_title">Марія Т.</p>
                        <p className="automodel">Volkswagen Passat </p>
                        <p className="testimonial_text">"Рекомендую! Робота виконана швидко і якісно. Дуже вдячна за допомогу!"</p>
                        
                    </div>
                    <div className="testimonial">
                        <p  className="testimonial_title">Олександр П.</p>
                        <p className="automodel">Mercedes C-Class </p>
                        <p className="testimonial_text">"Чудовo! Всі питання були вирішені оперативно, сервіс на високому рівні."</p>
                        
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Testimonials;