// src/components/Footer/Footer.jsx
import React from "react";
import "./Header.css";
import Banner from "../../assets/banner.png";
import Curso from "../../assets/Curso1.png";

const Header = () => {
    const categoria = "FRONT END";

    return (
        <header className="header">
            <div className="header-titulo">
                <button className="button-categoria">{categoria}</button>
                <h2>Challenge React</h2>
                <p>
                    Este challenge es una forma de aprendizaje. Es un mecanismo
                    donde podrás comportarte en la resolución de un problema
                    para poder aplicar todos los conocimientos adquiridos en la
                    formación React.
                </p>
            </div>
            <div>
                <img src={Curso} alt="" />
            </div>
        </header>
    );
};

export default Header;
