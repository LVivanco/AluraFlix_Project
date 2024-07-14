// src/components/Navbar/Navbar.jsx
import "./Navbar.css";
import AluraFlix_Logo from "../../assets/AluraFlix-Logo.png";

const Navbar = ({ onAddVideo }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img src={AluraFlix_Logo} alt="AluraFlix Logo" />
            </div>

            <div className="navbar-links">
                <button className="navbar-button">
                    <a href="#">HOME</a>
                </button>
                <button className="navbar-button-cel">
                    <a href="#">🏠</a>
                </button>
                <button className="navbar-button" onClick={onAddVideo}>
                    NUEVO VIDEO
                </button>
                <button className="navbar-button-cel" onClick={onAddVideo}>
                    ➕
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
