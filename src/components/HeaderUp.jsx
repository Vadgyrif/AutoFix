import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './HeaderUp.css';

const HeaderUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="headerUp">
      <div className="container">
        <div className="logo">AutoFix</div>

        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <Link to="about" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Про послугу</Link>
          <Link to="calculator" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Калькулятор</Link>
          <Link to="reviews" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Відгуки</Link>
          <Link to="contact" smooth duration={500} spy activeClass="active" onClick={closeMenu}>Контакти</Link>
        </nav>

        <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleBurger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default HeaderUp;