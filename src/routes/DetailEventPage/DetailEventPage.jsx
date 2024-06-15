import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import clockIcon from '../../assets/icon/clock.svg';
import "./DetailEventPage.css";
import axios from 'axios';




function DetailEventPage() {
    const { id } = useParams();
    const backendURL = import.meta.env.VITE_SERVER_URL;

    const [event, setEvent] = React.useState({});
    const [gallery, setGallery] = React.useState([]);
    const [schedules, setSchedules] = React.useState([]);

    useEffect(() => {
        axios.get(`${backendURL}/events/${id}`)
        .then((response) => {
            setEvent(response.data.event);
            setGallery(response.data.gallery);
            setSchedules(response.data.schedule);
        })
    })
  return (
    <div className='acara'>
        <style>
            {`
                .acara .hero{
                    background-image: linear-gradient(#000000cb,#0000002f), url(${backendURL}/${event.event_thumbnail});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    padding-top: 500px;
                    font-style: italic;
                }
            
            `}
        </style>
        <div className='hero min-vh-100 w-100'>
            <Container>
                <Row>
                    <Col className='text-white'>
                        <h1>{event.title}</h1>
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
                        <i className="fa-regular fa-calendar fa-2x me-3"></i>
                         {event.event_date}
                        <i className="fa-solid fa-location-dot fa-2x ms-4 me-3"></i>
                         {event.event_location_detail} {event.event_location}
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
                    {gallery.map((data) => {
                        return  (
                        <Col key={data.id} >
                             <img src={`${backendURL}/${data.img_url}`} alt="gallery image" className='w-100 mb-2' />
                        </Col>
                        );  
                    })}
                </Row>
            </Container>
        </div>
        <div className="schedule w-100 min-vh-75">
            <Container>
                <Row>
                    <Col className='pt-5 pb-5'>
                    <h1>Jadwal Acara</h1>
                    </Col>
                </Row>
                <section className='schedule-section'>
                    {schedules.map((schedule) => {
                        return(
                            <div key={schedule.id} className='schedule-container'>
                                <div className='time'>
                                    <img src={clockIcon} alt="clock icon" />
                                    <p>{schedule.time_start} - {schedule.time_end}</p>
                                </div>
                                <p>{schedule.event_detail}</p>
                            </div>
                        )
                    })}
                </section>
            </Container>
        </div>
        <div className="simpan w-100">
            <Container>
                <Row>
                    <Col className='py-5'>
                    <h1>Simpan Acara</h1>
                    <p>Aktifkan pengingat untuk memberikan notifikasi saat acara sudah dekat.</p>
                    <button className="btn btn-transparent btn-lg rounded-3 me-2"><i className="fa-regular fa-bell me-2"></i>Pengingat</button> <i className="fa-regular fa-bookmark fa-1X "></i>

                    </Col>
                </Row>
            </Container>
        </div>

    </div>
   
  )
}

export default DetailEventPage