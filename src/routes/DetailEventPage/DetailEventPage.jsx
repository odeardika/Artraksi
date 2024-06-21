import React, { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom';
import clockIcon from '../../assets/icon/clock.svg';
import ReminderButton from '../../components/ReminderButton/ReminderButton';
import HeaderNavbar from '../../components/HeaderNavbar/HeaderNavbar';
import "./DetailEventPage.css";
import axios from 'axios';
import FooterComponent from '../../components/FooterComponent/FooterComponent';

function DetailEventPage() {
    const { id } = useParams();
    const backendURL = import.meta.env.VITE_SERVER_URL;

    const [event, setEvent] = React.useState({});
    const [gallery, setGallery] = React.useState([]);
    const [schedules, setSchedules] = React.useState([]);
    const [isReminderOn, setIsReminderOn] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${backendURL}/events/${id}`)
        .then((response) => {
            setEvent(response.data.event);
            setGallery(response.data.gallery);
            setSchedules(response.data.schedule);
        })
    }, [])

    //* HANDLE USER REMAINDER
    useEffect(() => {
        // check if user logged in
        if(!JSON.parse(sessionStorage.getItem('token'))) return setIsReminderOn(false);


        // check if user have reminder in this event
        axios.get(`${backendURL}/events/reminder/check/${id}`,{
            headers: {
                'Authorization' : JSON.parse(sessionStorage.getItem('token'))
            }
        })
        .then((response) => {
            // check reminder if user already have this remainder
            setIsReminderOn(response.data.is_remainder);
        })
    }, [])

    //* HANDLE MODIFY REMAINDER
    const handleReminder = () => {
        // check if user logged in
        if(!JSON.parse(sessionStorage.getItem('token'))) return navigate('/login'); //TODO send to login page

        // remind this event to currect user 
        if(!isReminderOn){
            // send the request to server and save reminder into database
            axios.post(`${backendURL}/events/reminder`, {
                event_id: id,
            }, {
                headers: {
                    'Authorization' : JSON.parse(sessionStorage.getItem('token'))
                }
            })
            // update current reminder
            .then((response) => {
                setIsReminderOn(true);
            })
        }

        // delete current reminder
        if(isReminderOn){
            // send the request to server and delete reminder
            axios.delete(`${backendURL}/events/reminder/${id}`,{
                headers: {
                    'Authorization' : JSON.parse(sessionStorage.getItem('token'))
                }
            })
            
            // update current reminder
            .then((response) => {
                setIsReminderOn(false);
            })
        }

    }
    

  return (
    <div className='event-page'>
        <style>
            {`
                .event-page .hero{
                    background-image: linear-gradient(#000000cb,#0000002f), url(${backendURL}/${event.event_thumbnail});
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    }
            
            `}
        </style>
        <div className='hero min-vh-100 w-100'>
            <HeaderNavbar />
            <Container>
                <Row>
                    <Col className='text-white'>
                        <h1><i>{event.title}</i></h1>
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
                    <p className='deskp pb-5'>{event.event_description}</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="galeri min-vh-100 w-100 py-5">
            <Container>
                <Row>
                    <div className='py-3'>
                    <h1>Galeri Acara</h1>
                    </div>
                </Row>
                <Row>
                    {gallery.map((data) => {
                        return  (
                        <div key={data.id} >
                             <img src={`${backendURL}/${data.img_url}`} alt="gallery image" loading='lazy' className='w-100 mb-2' />
                        </div>
                        );  
                    })}
                </Row>
            </Container>
        </div>
        <div className="schedule w-100 min-vh-75">
            <Container>

                    <div className='pt-5 pb-5'>
                    <h1>Jadwal Acara</h1>
                    </div>

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
        <div className="reminder">
            <Container>
                <h2>Simpan Acara</h2>
                <p>Aktifkan pengingat untuk memberikan notifikasi saat acara sudah dekat.</p>
                {isReminderOn? <ReminderButton isOn={true} onClickHandler={handleReminder}/> : <ReminderButton isOn={false} onClickHandler={handleReminder}/>}
            </Container>
        </div>
        <FooterComponent />
    </div>
   
  )
}

export default DetailEventPage