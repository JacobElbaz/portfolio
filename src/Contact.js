import { Container } from "react-bootstrap";
import phone from "./phone.svg";
import email from "./email.svg";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0b8ior8', 'template_n2h7xy6', form.current, 'mEYfRDD7YhHd42iLG')
            .then((result) => {
                alert("Message Sent , I will get back to you shortly", result.text);
            }, (error) => {
                alert("An error occurred, Please try again", error.text);
            });
    };

    return (
        <div className="Contact" id="contact">
            <Container>
                <h1>Contact me</h1>
                <img src={phone} alt="" /><span className="details">0503013489</span> <br />
                <img src={email} alt="" /><span className="details">JACOBELBZ@GMAIL.COM</span>
                <form ref={form} onSubmit={sendEmail} className="form">
                    <input type="text" className="contact" name="from_name" placeholder="Your name*" />
                    <input type="email" className="contact" name="from_email" placeholder="Your email*" />
                    <textarea name="message" id="message" placeholder="Write your message" />
                    <input type="submit" value="Send" className="btn-grad"/>
                </form>
            </Container>
        </div>
    )
}

export default Contact;