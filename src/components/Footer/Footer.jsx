// src/components/Footer/Footer.jsx
import "./Footer.css";
import AluraFlix_Logo from "../../assets/AluraFlix-Logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img src={AluraFlix_Logo} alt="AluraFlix Logo" />
        </footer>
    );
};

export default Footer;
