import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './main.css';
import { TrendingSekarang, UntukmuSekarang } from './index';
import PopupOverlay from './PopUp';
import Header from '../../components/Header/Header';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import BlogCard from '../../components/BlogCard/BlogCard';
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function BlogPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [trendingBlogs, setTrendingBlogs] = useState([]);
  const [newestBlogs, setNewestBlogs] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/trending/3`)
    .then(response => {
      setTrendingBlogs(response.data);
      console.log(response.data);
    })

    axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/newest`)
    .then(response => {
      setNewestBlogs(response.data);
      console.log(response.data);
    })
  }, []);

  const handleShow = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <div className='blog-page'>
      < Header />
      
      <div className='trending py-5'>
        <div className='container-blog'>
          <Row>
            <Col>
              <h1>Trending</h1>
            </Col>
          </Row>
          
          <div className='blog-container'>
            {trendingBlogs.map((data) => {
              return (
                <BlogCard key={data.id} props={data} />
              );
            })}
          </div>
        </div>
      </div>
      
      <div className='create-blog-button'>
      <button className="create btn" onClick={handleShow}>
          <i class=" fa-solid fa-pen-fancy me-2"></i> Create
      </button>
      </div>

      <div className='untukmu w-100 min-vh-100'>
        <div className='container-blog'>
          <div>
              <div className='heading '>
                <h1>Blog</h1>
                <SearchBar />
              </div>
          </div>
       
          
            
          <div className='newest-blogs'>
            {newestBlogs.map((data) => {
              return (
                <BlogCard key={data.id} props={data} />
              );
            })}
          </div>
        </div>
      </div>

     

      <PopupOverlay show={showPopup} handleClose={handleClose} />
      
      <FooterComponent />
      
    </div>
  );
}
