// src/components/Card/Card.jsx
import React from "react";
import "./VideoCard.css";

const Card = ({ image, title, category, onEdit, onDelete }) => {
    return (
        <div className="card-carrusel">
            <div className={`video-card  ${category}-card`}>
                <img src={image} alt={title} />
                <div className="card-content">
                    <h3 className="video-card-title">{title}</h3>
                    <div className="card-buttons">
                        <button onClick={onEdit}>EDITAR</button>
                        <button onClick={onDelete}>BORRAR</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
