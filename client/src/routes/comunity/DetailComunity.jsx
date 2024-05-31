import { Container, Row, Col,  } from "react-bootstrap";
import ukjgsugm from "../../assets/comunity/detail/ukjgs_frm.jpg";
import firman from "../../assets/comunity/detail/firmansya.jpg";
import { semuaKelas, pementasan, dibaliklayar } from "./index";
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
  console.log(id);
  return (
    <div className="detailpage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-item center">
            <Col lg="5 ">
            <img src={ukjgsugm} alt="" />
            </Col>
            <Col lg="7" className="pt-lg-0 pt-5">
            <h1 className="mb-4">
              UKJGS UGM
            </h1>
            <p className="mb-4">
            UKJGS UGM atau Unit Kesenian Jawa Gaya Surakarta Universitas Gadjah Mada lahir  pada 19 Desember 1968 sebagai salah satu unit kegiatan mahasiswa yang menjadi wadah bagi mahasiswa Universitas Gadjah Mada yang ingin mengembangkan potensi diri dalam bidang seni tari, karawitan, dan pedhalangan. 
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
              <h1 className="mb-4">Rossi Firmansyah</h1>
              <p className="mb-4">
              Dia adalah ketua UKJGS UGM (Unit Kesenian Jawa Gaya Surakarta Universitas Gadjah Mada) yang berdedikasi tinggi dalam melestarikan dan memperkenalkan budaya Yogyakarta. Dengan pengalaman bertahun-tahun dalam seni tradisional, Rossi memimpin komunitas ini dengan semangat dan visi yang kuat untuk menginspirasi generasi muda agar mencintai dan menjaga warisan dan budaya.
              </p>
            </Col>
            <Col lg="5 text-center">
              <img src={firman} alt="" className="rounded-image" />
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
            {semuaKelas.map((kegiatan) => {
              return(
              <Col key={kegiatan.id}>
                <img src={kegiatan.image} alt="" className="w-100 mb-2 rounded-top" />
                <div className=" descrip mb-5 ">
                <h5 className="title mb-1">{kegiatan.title}</h5>
                 <p className="m-0">{kegiatan.price}</p>
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
        {pementasan.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <div className="image ">
                <img src={data.image} alt="" />
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
          {dibaliklayar.map((data) => (
            <SwiperSlide key={data.id} className="newSwiper-slide">
              <div className="new-image">
                <img src={data.image} alt="" />
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

   
     
   </div>
  )   
}

export default DetailComunity