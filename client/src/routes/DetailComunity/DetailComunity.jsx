import React, { useState, useEffect } from "react";
import { Container, Row, Col,  } from "react-bootstrap";
import axios from "axios";
import FooterComponent from "../../components/FooterComponent";

import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';




import './main.css';

const DetailComunity = () => {
  const { id } = useParams();
  const backendURL = import.meta.env.VITE_SERVER_URL;
  const [community, setCommunity] = useState([]);
  const [leader, setLeader] = useState([]);
  const [activities, setActivities] = useState([]);
  const [performances, setPerformances] = useState([]);
  const [bts, setBts] = useState([]);

  useEffect(() => {
    axios.get(`${backendURL}/communities/${id}`).then((response) => {
      setCommunity(response.data);
      setLeader(response.data.leader);
      setActivities(response.data.activities);
      setPerformances(response.data.performanceGallery);
      setBts(response.data.behindTheScenesGallery);
      console.log(response.data.behindTheScenesGallery)
    });
  }, []);

  console.log(id);
  return (
    <div className="detailpage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-item center">
            <Col lg="5 ">
            <img src={`${backendURL}/${community.logo}`} alt="" />
            </Col>
            <Col lg="7" className="pt-lg-0 pt-5">
            <h1 className="mb-4">
              {community.name}
            </h1>
            <p className="mb-4">
              {community.description} 
            </p>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Konten baru di bawah header */}
      <div className="new-content-section  w-100 min-vh-100 ">
        <Container>
          <Row className="content-box d-flex align-items-center py-5">
            <Col lg="7" className="pt-lg-0 pt-0">
              <h1 className="mb-4">{leader.name}</h1>
              <p className="mb-4">
              {leader.description}
              </p>
            </Col>
            <Col lg="5 text-center">
                <img src={`${backendURL}/${leader.img}`} alt="" className="rounded-image" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="kegiatan w-100 min-vh-100">
        <Container>
          <Row>
            <Col >
            <h1 className="mb-1">Kegiatan Kami</h1>
            </Col>
          </Row>
          <Row>
            {activities.map((activity) => {
              return(
              <Col key={activity.id}>
                <img src={`${backendURL}/${activity.activity_img}`} alt="" className="w-100 mb-2 rounded-top" />
                <div className=" descrip mb-5 ">
                <h5 className="title mb-1">{activity.activity_name}</h5>
                 <p className="m-0">{activity.activity_description}</p>
                </div>
              </Col>
              );
            })}
          </Row>
        </Container>
        </div>

        
        <div className="galeri py-0 w-100 min-vh-100 ">
  <Container>
    <Row>
      <Col>
        <h1 className="mb-1">Galeri</h1>
      </Col>
    </Row>
    <Row>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {performances.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="image ">
                <img src={`${backendURL}/${data.img_url}`} alt="" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Row>
    <Row>
      <Col>
        <h3 className="title text-lg-center fw-semibold py-3">Pementasan UKJGS</h3>
      </Col>
    </Row>
  </Container>

  {/* Bagian baru yang sama persis di bawah dengan class name yang berbeda */}
  <div className="new-galeri">
    <Container>
      <Row>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="newSwiper"
        >
          {bts.map((data) => (
            <SwiperSlide key={data.id} className="newSwiper-slide">
              <div className="new-image">
                <img src={`${backendURL}/${data.img_url}`} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
      <Row className="row-title-new">
        <Col>
          <h3 className="title-new text-lg-center fw-semibold pb-5">Dibalik Layar</h3>
        </Col>
      </Row>
    </Container>
  </div>
  </div>
  <FooterComponent />

   
     
   </div>
  )   
}

export default DetailComunity