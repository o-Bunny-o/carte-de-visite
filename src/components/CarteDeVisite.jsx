import React from 'react';
import { FaEnvelope, FaPhone, FaLink } from 'react-icons/fa';
import './CarteDeVisite.css';

function CarteDeVisite() {
    return (
        <div className="card-container">
            <div className="left-column">
                <img src="/src/assets/avatar.jpg" alt="Avatar" className="avatar" />
                <h1>Pam Ortiz</h1>
                <p className="profession">Web Developer | Graphic Designer</p>
            </div>
            <div className="right-column">
                <div className="contact-info">
                    <p>
                        <FaEnvelope className="email"/>
                        <a href="mailto:pam-o-graphix@gmail.com"> pam-o-graphix@gmail.com</a>
                    </p>
                    <p>
                        <FaPhone className="phone"/>
                        <a href="tel:+15149637263"> (514) 963-7263</a>
                    </p>
                    <p>
                        <FaLink className="website" />
                        <a href="https://pam-o-graphix.com/" target="_blank" rel="noopener noreferrer">
                            https://pam-o-graphix.com/
                        </a>
                    </p>                </div>
            </div>
        </div>
    );
}

export default CarteDeVisite;
