import React, { useState, useEffect } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../Wrapper';
import { client } from '../../client';
import "./Footer.scss";
const Footer = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { name, email, message } = formData;
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = () => {
        setLoading(true);
        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        };
        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            });
    };
    return (
        <>
            <h2 className="head-text">Take a coffe & chat with me</h2>
            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a className='p-text' href="mailto:hi@zain.com">hi@zain.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a className='p-text' href="tel:+92 (3172303532)">+92 (3172303532)</a>
                </div>
            </div>
            {!isFormSubmitted ?
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input type="text" className='p-text' placeholder='Your Name' name='name' onChange={handleChangeInput} value={name} />
                    </div>
                    <div className="app__flex">
                        <input type="email" className='p-text' placeholder='Your Email' name='email' onChange={handleChangeInput} value={email} />
                    </div>
                    <div>
                        <textarea
                            className='p-text'
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button type='button' className='p-text' onClick={handleSubmit}>{loading ? "Sending" : "Submit Message"}</button>
                </div>
                : <div>
                    <h3 className="head-text">Thank you for getting in touch!</h3>
                </div>
            }
        </>

    );
};

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    "contact",
    "app__whitebg"
);