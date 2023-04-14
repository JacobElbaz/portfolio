import { Container } from "react-bootstrap";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import ChatBot from "./ChatBot";

function Contact() {
    const form = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0b8ior8', 'template_n2h7xy6', form.current, 'mEYfRDD7YhHd42iLG')
            .then((result) => {
                nameRef.current.value = null;
                emailRef.current.value = null;
                messageRef.current.value = null;
                alert("Message Sent , I will get back to you shortly", result.text);
            }, (error) => {
                alert("An error occurred, Please try again", error.text);
            });
    };

    return (
        <div className="Contact" id="contact">
            <Container>
                <ChatBot/>
                <div>
                    <h1>Contact me</h1>
                </div>
                <div className="details">
                    <div className="contact-card">
                        <ion-icon name="logo-whatsapp"></ion-icon>
                        Whatsapp
                        <a href="https://wa.me/972503013489" target={'_blank'}>050-301-3489</a>
                    </div>
                    <div className="contact-card">
                        <ion-icon name="mail-outline"></ion-icon>
                        Email
                        <a href="mailto:jacobelbz@gmail.com?subject=Mail from portfolio website" target={'_blank'}>jacobelbz@gmail.com</a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="form">
                    <input ref={nameRef} type="text" className="contact" name="from_name" placeholder="Your name*" required/>
                    <input ref={emailRef} type="email" className="contact" name="from_email" placeholder="Your email*" required/>
                    <textarea ref={messageRef} name="message" id="message" placeholder="Write your message" required/>
                    <input type="submit" value="Send" className="btn-grad" />
                </form>
            </Container>
        </div>
    )
}

export default Contact;