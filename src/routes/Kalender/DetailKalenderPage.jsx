import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Galeri } from "./index"
import "./DetailMain.css";




function DetailKalenderPage() {
  return (
    <div className='acara'>
        <div className='hero min-vh-100 w-100'>
            <Container>
                <Row>
                    <Col className='text-white'>
                        <h1>Gladhi Madya <br/> 2024</h1>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='desk min-vh-75 w-100'>
            <Container>
                <Row>
                    <Col className='pt-5'>
                    <h1>Detail Acara</h1>
                    <p className='detail'>
                        <i class="fa-regular fa-calendar fa-2x me-3"></i>
                         6 juli 2024
                        <i class="fa-solid fa-location-dot fa-2x ms-4 me-3"></i>
                         Pendopo Taman Siswa
                    </p>
                    <p className='deskp pb-5'>Dalam acara Gladhi Madya disajikan beberapa tarian yaitu Tari Putri Gambyong Pareanom, Tari Putri Golek Manis, Tari Putri Dombanini dan Tari Putra Gunung Sari yang dikemas dalam bentuk repertoar drama. Dalam acara Gladhi Madya disajikan beberapa tarian yaitu Tari Putri Gambyong Pareanom, Tari Putri Golek Manis, Tari Putri Dombanini dan Tari Putra Gunung Sari yang dikemas dalam bentuk repertoar drama.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="galeri min-vh-100 w-100 py-5">
            <Container>
                <Row>
                    <Col className='py-3'>
                    <h1>Galeri Acara</h1>
                    </Col>
                </Row>
                <Row>
                    {Galeri.map((data) => {
                        return  (
                        <Col key={data.id} >
                             <img src={data.Image} alt="" className='w-100 mb-2' />
                        </Col>
                        );  
                    })}
                </Row>
            </Container>
        </div>
        <div className="jadwal w-100 min-vh-75">
            <Container>
                <Row>
                    <Col className='pt-5'>
                    <h1>Jadwal Acara</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='pb-5'>
                    <div className='info'>
                    <p className='acara fw-bold'>
                        <i class="fa-regular fa-clock fa-1x me-2"></i>
                         19:00-19:30</p>
                    <p className='desk'>Sambutan dan pengenalan pertunjukan</p>
                    </div>
                    <div className='info pt-3'>
                    <p className='acara fw-bold'>
                        <i class="fa-regular fa-clock fa-1x me-2"></i>
                         19:30-21:30</p>
                    <p className='desk'>Pertunjukan Wayang Kulit</p>
                    </div>
                    <div className='info pt-3'>
                    <p className='acara fw-bold'>
                        <i class="fa-regular fa-clock fa-1x me-2"></i>
                         21:30-22:00</p>
                    <p className='desk'>Pertunjukan Penutupan Acara</p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="simpan w-100">
            <Container>
                <Row>
                    <Col className='py-5'>
                    <h1>Simpan Acara</h1>
                    <p>Aktifkan pengingat untuk memberikan notifikasi saat acara sudah dekat.</p>
                    <button className="btn btn-transparent btn-lg rounded-3 me-2"><i class="fa-regular fa-bell me-2"></i>Pengingat</button> <i class="fa-regular fa-bookmark fa-1X "></i>

                    </Col>
                </Row>
            </Container>
        </div>

    </div>
   
  )
}

export default DetailKalenderPage