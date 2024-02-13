import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer id="footer">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/blue">Blue</Link></li>
                    <li><Link to="/red">Red</Link></li>
                    <li><Link to="/green">Green</Link></li>
                    <li><Link to="/yellow">Yellow</Link></li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer();