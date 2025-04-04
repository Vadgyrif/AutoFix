import { useState } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";
import WorkPhoto from "../assets/WorkPhoto.png";

const ContsctForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                const img = new Image();
                img.src = reader.result;

                img.onload = () => {
                    const canvas = document.createElement("canvas");
                    const ctx = canvas.getContext("2d");

                    // Встановлюємо максимальний розмір
                    const maxWidth = 500;
                    const scaleSize = maxWidth / img.width;
                    canvas.width = maxWidth;
                    canvas.height = img.height * scaleSize;

                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                    // Конвертуємо у Base64
                    const compressedImage = canvas.toDataURL("image/jpeg", 0.7);

                    // Завантажуємо на ImgBB
                    const apiKey = "7e75cf9285e4e02865b8a2bf5646a9c1";
                    const formData = new FormData();
                    formData.append("image", compressedImage.split(",")[1]); // Відкидаємо `data:image/jpeg;base64,`

                    fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
                        method: "POST",
                        body: formData,
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.success) {
                                setFormData({ ...formData, image: data.data.url });
                            } else {
                                alert("Помилка при завантаженні зображення");
                            }
                        })
                        .catch(() => alert("Не вдалося завантажити фото"));
                };
            };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email || "Не вказано",
            image: formData.image, // Тепер тут URL, а не base64
        };

        emailjs
            .send("service_4xagt1n", "template_xqdx60i", templateParams, "bQ1Mj15ZicVTdQwGB")
            .then(() => alert("Ваш запит надіслано!"))
            .catch(() => alert("Помилка при надсиланні. Спробуйте пізніше"));
    };

    return (
        <Element name="contact">
            <div data-aos="fade-up" className="sendEmail">
                <h2 className="sendEmail_title">
                    Заповніть форму, надішліть фото вашого пошкодження і наш майстер <span>обов'язково з Вами зв'яжеться!</span>
                </h2>
                <div className="sendEmailContainer">
                    <form className="sendEmail_form" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Ім'я" onChange={handleChange} required />
                        <input type="tel" name="phone" placeholder="Номер телефону" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Email (необов'язково)" onChange={handleChange} />
                        <input type="file" name="image" accept="image/*" onChange={handleFileChange} required />
                        <button type="submit">Надіслати</button>
                    </form>
                    <div className="sendEmailPhoto">
                        <img src={WorkPhoto} alt="99" />
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default ContsctForm;
