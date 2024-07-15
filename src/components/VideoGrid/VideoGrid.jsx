// src/components/VideoGrid/VideoGrid.jsx
import React from "react";
import Card from "../VideoCard/VideoCard.jsx";
import "./VideoGrid.css";

const VideoGrid = ({ videos, categoria, onEdit, onDelete }) => {
    return (
        <div className="videos-container">
            <button className={`button-categoria-grid ${categoria}`}>
                {categoria.toUpperCase()}
            </button>
            <div className="video-grid">
                {videos.map((video) => (
                    <Card
                        key={video.id}
                        image={video.image}
                        title={video.title}
                        category={video.category}
                        onEdit={() => onEdit(video.id)}
                        onDelete={() => onDelete(video.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default VideoGrid;
