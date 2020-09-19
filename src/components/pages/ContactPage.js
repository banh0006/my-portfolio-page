import React, { useState, useEffect } from 'react'
import '../../css/ContactPage.css'
import { Row, Col } from 'reactstrap'
import ContactForm from '../common/ContactForm'
import { SiLinkedin, SiGithub } from 'react-icons/si'

export default function ContactPage() {
    return (
        <div id="contact">
            <div className="contact-title">Contact</div>
            <div className="contact-info">
                <div className="contact-text">
                    Contact me if you
                    <ul>
                        <li>Need to hire Web/Mobile developer.</li>
                        <li>Have any question want to ask me.</li>
                        <li>Want to say 'Hi'.</li>
                    </ul>
                </div>
                <div className="follow">
                    Follow me on:
                    <a href="https://www.linkedin.com/in/thien-banh-060339193">
                        <SiLinkedin />
                    </a>
                    <a href="https://github.com/banh0006">
                        <SiGithub />
                    </a>
                </div>
                <div className="contact-form">
                    <div className="email-text">
                        Send me an email or a facebook message.
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}