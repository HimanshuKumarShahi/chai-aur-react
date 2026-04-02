import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function App() {
  const [media, setMedia] = useState(null);
  const [audio, setAudio] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e) => {
    e.preventDefault();

    if (!media || !audio) {
      alert("Upload media and audio!");
      return;
    }

    setLoading(true);
    setVideoUrl(null);

    const formData = new FormData();
    formData.append('media', media);
    formData.append('audio', audio);

    // multiple photos
    photos.forEach((p) => {
      formData.append('photos', p);
    });

    try {
      const res = await axios.post(
        `${BACKEND_URL}/api/generate`,
        formData,
        { responseType: 'blob' }
      );

      const url = URL.createObjectURL(res.data);
      setVideoUrl(url);

    } catch (err) {
      console.error(err);
      alert("Error generating video");
    }

    setLoading(false);
  };

  return (
    <div className="app-container">
      <h2 className="app-title">Automated Edit Generator</h2>

      <form onSubmit={handleGenerate} className="upload-form">

        {/* MEDIA */}
        <div className="file-input-wrapper">
          <label className="file-label">Foreground Media (Person)</label>
          <label className="custom-file-upload">
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setMedia(e.target.files[0])}
            />
            <span className={`file-name ${media ? 'has-file' : ''}`}>
              {media ? media.name : '📁 Choose media'}
            </span>
          </label>
        </div>

        {/* AUDIO */}
        <div className="file-input-wrapper">
          <label className="file-label">Audio Track</label>
          <label className="custom-file-upload">
            <input
              type="file"
              accept="audio/*"
              onChange={(e) => setAudio(e.target.files[0])}
            />
            <span className={`file-name ${audio ? 'has-file' : ''}`}>
              {audio ? audio.name : '🎵 Choose audio'}
            </span>
          </label>
        </div>

        {/* MULTIPLE PHOTOS */}
        <div className="file-input-wrapper">
          <label className="file-label">Background Photos (Slideshow)</label>
          <label className="custom-file-upload">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => setPhotos([...e.target.files])}
            />
            <span className={`file-name ${photos.length ? 'has-file' : ''}`}>
              {photos.length
                ? `${photos.length} photos selected`
                : '🖼️ Choose photos'}
            </span>
          </label>
        </div>

        {/* BUTTON */}
        <button type="submit" className="generate-btn" disabled={loading}>
          {loading ? (
            <span className="loading-text">⏳ Processing...</span>
          ) : (
            '✨ Generate Video'
          )}
        </button>
      </form>

      {/* RESULT */}
      {videoUrl && (
        <div className="video-result">
          <div className="output-header">
            <h3>Your Final Edit</h3>
            <p>Ready to download</p>
          </div>

          <video src={videoUrl} controls className="video-player" />

          <a href={videoUrl} download="final_edit.mp4" className="download-btn">
            ⬇️ Download Video
          </a>
        </div>
      )}
    </div>
  );
}