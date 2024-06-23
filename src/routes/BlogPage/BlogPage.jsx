import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import './main.css';
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

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/trending/3`)
    .then(response => {
      setTrendingBlogs(response.data);
    })

    axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/newest`)
    .then(response => {
      setNewestBlogs(response.data);
    })
  }, []);

  const handleShow = () => {
    if(!JSON.parse(sessionStorage.getItem('token'))) return navigate('/login');
    setShowPopup(true)
  };
  const handleClose = () => setShowPopup(false);

  const handleSearch = (searchInput) => {
    //TODO get blogs based on search input
    axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/search?search=${searchInput}`)
    
    //TODO save the result blogs to the state variable
    .then((response) => {
      setNewestBlogs(response.data)
    })
  };

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
          
          <div className='blog-container-trending'>
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
          <i className=" fa-solid fa-pen-fancy me-2"></i> Create
      </button>
      </div>

      <div className='untukmu w-100 min-vh-100'>
        <div className='container-blog'>
          <div>
              <div className='heading '>
                <h1>Blog</h1>
                <SearchBar placeholder='Cari Blog' handleSearch={handleSearch}/>
              </div>
          </div>
       
          
            
          {(newestBlogs.length > 0) ? (
            <div className='newest-blogs'>
            {newestBlogs.map((data) => {
              return (
                <BlogCard key={data.id} props={data} />
              );
            })}
          </div>
          ) : (
            <div className=''>
              <p className='blog-not-found'>Blog tidak tersedia</p>
            </div>
          )}
        </div>
      </div>

     

      <PopupOverlay show={showPopup} handleClose={handleClose} />
      
      <FooterComponent />
      
    </div>
  );
}
