/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useEffect, useState } from "react";
import "./ContactPage.css";
import { Footer, Header } from "../../components/index";

const ContactPage = () => {
    return (
        <div className="contactMainContainer">
            <Header />
            <div className="contactContainer">
                <div className="contact-box">
                    <div className="contact-links">
                        <h2>CONTACT</h2>
                        <h2>US</h2>
                        <div className="links">
                            <div className="link">
                                <img className="contactLinkImg" src="https://cdn-icons-png.flaticon.com/512/4812/4812397.png" alt="mailImg"></img>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form-wrapper">
                        <form action="https://formsubmit.co/chingunzolboo0216@gmail.com"
                            method="POST">
                            <div className="form-item">
                                <input type="text" name="sender" required></input>
                                <label>Name:</label>
                            </div>
                            <div className="form-item">
                                <input type="text" name="email" required></input>
                                <label>Email:</label>
                            </div>
                            <div className="form-item">
                                <textarea className="" name="message" required></textarea>
                                <label>Message:</label>
                            </div>
                            <button className="submit-btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default ContactPage;
