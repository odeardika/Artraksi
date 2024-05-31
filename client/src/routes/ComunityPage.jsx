import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { LayananPenitipan, dataswiper, faq } from "../data/index";
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Selengkapnya from '../components/NextButton/Selengkapnya/Selengkapnya';

const ComunityPage = () => {
  // get communities data from backend
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/communities`).then((response) => {
      setCommunities(response.data);
    });
  }, []);
  return (
    <div className="komunitaspage">
        {/* headerpage */}

        <div className="komunitas w-100 min-vh-100">
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-left fw-bold ">Komunitas Kami</h1>
                    </Col>
                </Row>
                <Row>
                    {communities.map((komunitas) => {
                        return(
                            <Col key={komunitas.id} className="shadow-sm">
                            <img src={`${import.meta.env.VITE_SERVER_URL}/${komunitas.thumbnail_img}`} alt="" className="w-100 mb-3 rounded-top" />
                            <div className=" d-flex justify-content-between align-items-center px-3 pb-3">
                                <div className="logo">
                                    <img src={`${import.meta.env.VITE_SERVER_URL}/${komunitas.logo_img}`} alt="small image" />
                                </div>
                                <div className="ms-2">
                                    <h5 className="mb-0 px-3 fw-bold">{komunitas.comunity_name}</h5>
                                    <p className="mb-0 px-3">{komunitas.comunity_description}</p>
                                </div>
                            </div>
                            <div>
                              <Selengkapnya href={'/#'}/>
                            </div>
                        </Col>    
                        );
                    })}                
                </Row>
            </Container>
        </div>

        <div className="testimonial py-5">
            <Container>
                <Row>
                    <Col>
                    <h1 className="text-center fw-bold">Pendapat Pengguna</h1>
                    <p className="text-center mb-5 fw-semibold">Bagaiman pendapat pengguna yang sudah berintraksi dengan komunitas</p>
                    </Col>
                </Row>
                
                <Row>
                <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {dataswiper.map((data) => {
            return <SwiperSlide key={data.id} className="shadow-sm">
              <p className="desc">{data.desc}</p>
              <div className="people">
                <img src={data.image} alt="" />
                <div>
                  <h5 className="mb-1">{data.name}</h5>
                  <i className={data.star1}></i>  
                  <i className={data.star2}></i>  
                  <i className={data.star3}></i>  
                  <i className={data.star4}></i>  
                  <i className={data.star5}></i>  
                </div>
              </div>
            </SwiperSlide>;
            
        })}
        
      </Swiper>
                </Row>
            </Container>
        </div>

        <div className="faq">
          <Container>
            <Row>
              <Col>
              <h1 className="text-center fw-bold">Tanya Jawab</h1>
              <p className="text-center fw-semibold">Pertanyaan yang sering diajukan tentang komnitas</p>
              </Col>
            </Row>
            <Row className="row-cols-lg-1 row-cols-1 g-3 pt- faq-row">
              {faq.map((data) => {
                return( 
                <Col key={data.id}>
                  <Accordion className="shadow-sm">
          <Accordion.Item eventKey={data.eventKey}>
            <Accordion.Header className="accordion-header">{data.title}</Accordion.Header>
            <Accordion.Body>
              {data.desc}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
                  </Col>

                );
              })}
              
            </Row>
          </Container>
        
        </div>


    </div>
  )
}

export default ComunityPage;