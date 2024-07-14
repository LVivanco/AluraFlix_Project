// src/components/EditModal/EditModal.jsx
import React, { useState } from "react";
import "./EditModal.css";

const EditModal = ({ show, onClose, videoData, onSave }) => {
    const [formData, setFormData] = useState(videoData || {});

    if (!show) {
        return null;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    const handleClear = () => {
        setFormData({});
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    &times;
                </span>
                <h2>EDITAR CARD:</h2>
                <form>
                    <label>
                        Título
                        <input
                            type="text"
                            name="title"
                            value={formData.title || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Categoría
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option value="front-end">front-end</option>
                            <option value="back-end">back-end</option>
                            <option value="innovacion-gestion">
                                innovacion-gestion
                            </option>
                        </select>
                    </label>
                    <label>
                        Imagen
                        <input
                            type="text"
                            name="image"
                            value={formData.image || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Video
                        <input
                            type="text"
                            name="video"
                            value={formData.video || ""}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Descripción
                        <textarea
                            name="description"
                            value={formData.description || ""}
                            onChange={handleChange}
                        ></textarea>
                    </label>
                    <div className="modal-buttons">
                        <button type="button" onClick={handleSave}>
                            GUARDAR
                        </button>
                        <button type="button" onClick={handleClear}>
                            LIMPIAR
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
