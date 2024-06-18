import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './main.css';
import { TrendingSekarang, UntukmuSekarang } from './index';
import PopupOverlay from './PopUp';

export default function BlogPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleShow = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <div className='blog'>
      <div className='trending w-100 min-vh-100 py-5'>
        <Container>
          <Row>
            <Col>
              <h1>Trending</h1>
            </Col>
          </Row>
          <Row>
            {TrendingSekarang.map((data) => {
              return (
                <Col key={data.id} className='shadow rounded-3 mt-4'>
                  <div className='profil py-2 px-2'>
                    <img src={data.profil} alt='' />
                    <div>
                      <p className='mb-1'>{data.name}</p>
                    </div>
                    <div>
                      <p className='mb-1 text-primary'>{data.status}</p>
                    </div>
                  </div>
                  <img src={data.image} alt='' className='poto w-100 mb-2' />
                  <div className='iconbetwen d-flex justify-content-between align-items-center px-2'>
                    <div className='icons'>
                      <i className={data.icon1}></i>
                      <div>
                        <i className={data.icon2}></i>
                      </div>
                      <div>
                        <i className={data.icon3}></i>
                      </div>
                    </div>
                    <i className='fa-solid fa-eye'></i>
                    <span className='ms-2'>769</span>
                  </div>
                  <p className='pembaca py-0 px-2'>{data.pembaca}</p>
                  <h5 className='titles py-0 px-2'>{data.title}</h5>
                  <p className='desk mb-4 px-2'>{data.desk}</p>
                  <div className='px-2 d-flex justify-content-between align-items-center'>
                    <p>{data.komentar}</p>
                    <button className='btn btn-transparent btn-custom mb-3'>
                      {data.button}
                      <i className='fa-solid fa-arrow-right ms-2'></i>
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div className='untukmu w-100 min-vh-100'>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='pilihan pt-5 '>
                <h1>Untukmu</h1>
                <div>
                  <h1>Diikuti</h1>
                </div>
                <div>
                  <h1>Tag</h1>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className='search-container d-flex justify-content-end pt-lg-5 pb-5'>
                <input
                  type='text'
                  className='search-input'
                  placeholder='Cari acara...'
                />
              </div>
            </Col>
          </Row>
       
          
            
          <Row>
            {UntukmuSekarang.map((data) => {
              return (
                <Col key={data.id} className='shadow rounded-3 py-2'>
                  <div className='profils py-2 px-2'>
                    <img src={data.profil} alt='' />
                    <div>
                      <p className='mb-1'>{data.name}</p>
                    </div>
                    <div>
                      <p className='mb-1 text-primary'>{data.status}</p>
                    </div>
                  </div>
                  <img src={data.image} alt='' className='potos mb-2' />
                  <div className='iconbetwen d-flex justify-content-between align-items-center px-2'>
                    <div className='icons'>
                      <i className={data.icon1}></i>
                      <div>
                        <i className={data.icon2}></i>
                      </div>
                      <div>
                        <i className={data.icon3}></i>
                      </div>
                    </div>
                    <i className='fa-solid fa-eye'></i>
                    <span className='ms-2'>769</span>
                  </div>
                  <p className='pembaca py-0 px-2'>{data.pembaca}</p>
                  <h5 className='titles py-0 px-2'>{data.title}</h5>
                  <p className='desk mb-4 px-2'>{data.desk}</p>
                  <div className='px-2 d-flex justify-content-between align-items-center'>
                    <p>{data.komentar}</p>
                    <button className='btn btn-transparent btn-custom mb-3'>
                      {data.button}
                      <i className='fa-solid fa-arrow-right ms-2'></i>
                    </button>
                  </div>

                  
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className='py-2'>
        <Container>
          <Row>
            <Col>
            <button className="btn btn-danger" onClick={handleShow}>
            <i class=" fa-solid fa-pen-fancy me-2"></i> Create
            </button>
            </Col>
          </Row>
        </Container>
        </div>

      </div>

     

      <PopupOverlay show={showPopup} handleClose={handleClose} />
    </div>
  );
}
