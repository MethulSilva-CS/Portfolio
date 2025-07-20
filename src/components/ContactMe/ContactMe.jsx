import React, { useRef } from 'react';
import './ContactMe.css';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github2.png';
import cv from '../../assets/Methul_IIT_CV.pdf';

function ContactMe() {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyXxyjMoMXSumGMnIl16eNLPLLxwmhJhA-hNCrMThA5qyzUtDGtrYo_H6xHEC4pc7HkUA/exec'; 
        const form = formRef.current;

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form),
        })
            .then((response) => {
                alert('Message sent successfully!');
                form.reset();
            })
            .catch((error) => {
                alert('Error! Message not sent.');
                console.error('Error!', error.message);
            });
    };

    return (
        <div id='contact'>
            <div className='container'>
                <div className='row'>
                    <div className='contact-left'>
                        <h1>Contact Me</h1>
                        <p>protonmail : methul_silva@protonmail.com</p>
                        <p>phone : +94701550549</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/methul-silva-8264aa293/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="linkedin" />
                            </a>
                            <a href="https://github.com/MethulSilva-CS" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="github" />
                            </a>
                        </div>
                        <a href={cv} className='btn' target='_blank' rel='noopener noreferrer'>View My CV</a>
                    </div>

                    <div className='contact-right'>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" name='Name' placeholder="Your Name" required />
                            <input type="email" name='Email' placeholder='Your Email' required />
                            <textarea name="Message" rows="6" placeholder='Your Message'></textarea>
                            <button type='submit' className='btn'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
