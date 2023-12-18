import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {

    return (
        <footer className="footer__container">
            <Link to="/">
                <p className="footer__link">MOOI - All right reserved ©</p>
            </Link>
        </footer>
    );
};
