import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import '../styles/socialfollow.css';
export default function SocialFollow() {
    return (
        <div>
            <h4>Social Media</h4>
            <div className="social-container">


                <a
                    href="https://www.instagram.com/a.shfin/"
                    className="instagram social"
                >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a
                    href="https://twitter.com/Ashfin_Enayet"
                    className="twitter social"
                >
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
            </div>
        </div>
    );
}