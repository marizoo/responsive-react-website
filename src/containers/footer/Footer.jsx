import React from "react";
import "./footerStyle.css";

const Footer = () => {
    return (
        <div className="footer section__padding">
            <div className="footer-heading">
                <h1 className="gradient__text">
                    Join a growing community of nerds to achieve nerd immunity
                </h1>
            </div>
            <div className="footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="footer-links">
                <div className="footer-links_logo">
                    <h2>COODER</h2>
                    <p>Managed by Dixie Chicks Inc.</p>
                </div>

                <div className="footer-links_div">
                    <h4>Links</h4>
                    <p>Testimony</p>
                    <p>Social Media</p>
                    <p>Counter</p>
                    <p>Contact</p>
                </div>

                <div className="footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className="footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Kentucky Fried Chimkin 753 blv California, USA.</p>
                    <p>+1 9876-543-210</p>
                    <p>info@logos.com</p>
                </div>
            </div>

            <div className="footer-copyright">
                <p>&copy; LOGO 2022 All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
