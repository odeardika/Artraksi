import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { faq } from "../../data/index";
import { Swiper } from 'swiper/react';
import axios from 'axios';
import user0 from "../../assets/user/0.png";
import user1 from "../../assets/user/1.png";
import user2 from "../../assets/user/2.png";
import FeedbackCard from '../../components/FeedbackCard/FeedbackCard';
import styles from './ComunityPage.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import Selengkapnya from '../../components/NextButton/Selengkapnya/Selengkapnya';

const userFeedback = [
  {id : 0, username : "Alan Garza", content : "Website ini memberikan informasi yang sangat lengkap tentang berbagai kebudayaan di Indonesia. Saya jadi bisa lebih mengenal dan menghargai keberagaman budaya kita.", img : user0, rate : 5},
  {id : 1, username : "Stephen Matthews", content : "Saya menyukai bagaimana navigasinya sangat intuitif. Saya dengan mudah bisa menemukan artikel, acara, dan komunitas yang saya cari.", img : user1 , rate : 4},
  {id : 2, username : "Bob Alexander", content : "Desain website ini sangat menarik! Saya suka bagaimana gambar-gambar budaya ditampilkan dengan cantik di seluruh halaman.", img : user2, rate : 4.5},
]

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
                    <p className="text-center mb-5 fw-semibold">Bagaimana pendapat pengguna yang sudah berintraksi dengan komunitas</p>
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

      <section className={styles.feedback}>
        <div className={styles.feedback_container}>
          {userFeedback.map(feedback => <FeedbackCard key={feedback.id} rate={feedback.rate} props={feedback}/>)}
        </div>
      </section>
        
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