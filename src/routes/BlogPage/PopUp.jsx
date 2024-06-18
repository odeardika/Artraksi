import React, { useState } from 'react';
import UserImage from "../../assets/blog/user-1.png"


import './main.css';

function PopupOverlay({ show, handleClose }) {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUpload = () => {
    console.log('Uploaded:', text);
    handleClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div className="overlay">
      <div className="popup">
        <div className="header">
        <img
  src={UserImage}
  alt="Profile"
  className="rounded-circle profile-img"

/>
          <span>Bryan Dean</span>
        </div>
        <div className="upload-placeholder">
         <i className="fa-solid fa-camera-rotate"></i>
        </div>
        <div className="input-container">
          <textarea
            id="text-input"
            value={text}
            onChange={handleTextChange}
            className="text-input"
            placeholder='Tambahkan teks'
          />
          
        </div>
        <div className="buttons">
          <button className="btn btn-danger rounded-4" onClick={handleClose}>
            Cancel
          </button>
          <button className="btn btn-primary rounded-4" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopupOverlay;
