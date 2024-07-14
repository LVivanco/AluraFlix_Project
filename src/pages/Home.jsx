// src/pages/Home.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import VideoGrid from "../components/VideoGrid/VideoGrid";
import Footer from "../components/Footer/Footer";
import EditModal from "../components/EditModal/EditModal";
import AddModal from "../components/AddModal/AddModal";
import Header from "../components/Header/Header";
import videosData from "../assets/videos.json";

import "./Home.css";

const initialVideos = videosData;

const Home = () => {
    const [videos, setVideos] = useState(initialVideos);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleEdit = (id) => {
        const videoToEdit = videos.find((video) => video.id === id);
        setSelectedVideo(videoToEdit);
        setIsEditModalOpen(true);
    };

    const handleDelete = (id) => {
        setVideos(videos.filter((video) => video.id !== id));
    };

    const handleSaveEdit = (updatedVideo) => {
        setVideos(
            videos.map((video) =>
                video.id === updatedVideo.id ? updatedVideo : video
            )
        );
    };

    const handleSaveAdd = (newVideo) => {
        newVideo.id = videos.length + 1; // Assign a new id
        setVideos([...videos, newVideo]);
    };

    return (
        <div className="home">
            <Navbar onAddVideo={() => setIsAddModalOpen(true)} />
            <Header />
            <VideoGrid
                videos={videos.filter(
                    (video) => video.category === "front-end"
                )}
                categoria="front-end"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <VideoGrid
                videos={videos.filter((video) => video.category === "back-end")}
                categoria="back-end"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <VideoGrid
                videos={videos.filter(
                    (video) => video.category === "innovacion-gestion"
                )}
                categoria="innovacion-gestion"
                onEdit={handleEdit}
                onDelete={handleDelete}
            />
            <Footer />
            <EditModal
                show={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                videoData={selectedVideo}
                onSave={handleSaveEdit}
            />
            <AddModal
                show={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSave={handleSaveAdd}
            />
        </div>
    );
};

export default Home;
