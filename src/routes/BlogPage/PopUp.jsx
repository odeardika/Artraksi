import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './main.css';

function PopupOverlay({ show, handleClose }) {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [user, setUser] = useState('');
  const [file, setFile] = useState('');
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleuploadFile = () => {
    setFile(event.target.files[0]);
  }
  useEffect(() => {
    if(!JSON.parse(sessionStorage.getItem('token'))) return navigate('/login');
    axios.get(`${import.meta.env.VITE_SERVER_URL}/user/details`, {
      headers: {
          Authorization: JSON.parse(sessionStorage.getItem('token')),
      },
    }).then((response) => {
      console.log(response.data.user);
      setUser(response.data.user);
    });
  }, []);

  const handleUpload = () => {
    axios.post(`${import.meta.env.VITE_SERVER_URL}/blog/add`, {
        'thumbnail' : file,
        'title' : title,
        'content' : text
    },{
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: JSON.parse(sessionStorage.getItem('token')),
        },
    }).then((response) => {
        // empty the input field
        setText('');
        setTitle('');
        setFile('');
    })
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
          src={`${import.meta.env.VITE_SERVER_URL}/${user.profile_img}`}
          alt="Profile"
          className="rounded-circle profile-img"
        />
          <span>{user.username}</span>
        </div>
        <div className="upload-placeholder">
        <label htmlFor="file-upload"><i className="fa-solid fa-camera-rotate"></i></label>
         
         <input type="file" name="" id="file-upload" onChange={handleuploadFile} hidden/>
        </div>
        <div className="input-container">
          <input className="title-input" type="text" name="" id="" placeholder='Judul' value={title} onChange={handleTitleChange}/>
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
