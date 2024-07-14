// src/components/Button/Button.jsx
import React from "react";
import "./Button.css";

const Button = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="custom-button">
            {label}
        </button>
    );
};

export default Button;
