import React from "react";
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios";
import "./main.css";
import Header from "../../components/Header/Header";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import SearchBar from "../../components/SearchBar/SearchBar";

const EventCard = ({props}) => {
  return (
  <>
    <div className="event-container">
      <img src={`${import.meta.env.VITE_SERVER_URL}/${props.event_thumbnail}`} alt={`${props.title} image`} className=""/>
      <div className="event-detail">
        <h5 className="">{props.title}</h5>
        <p>{props.event_date} - Selesai</p>
        <p>{props.event_location_detail} | {props.event_location} </p>
      </div>
        <a className="next" href={`${import.meta.env.VITE_WEBSITE_URL}/acara/${props.id}`}>
          Selengkapnya 
          <span className="next_arrow">
            {"->"}
          </span>
        </a>
    </div>
  </>
  )
}

export default function EventPage() {
  const [upcomingEvents, setUpcomingEvents] = React.useState([]);
  const [allEvents, setAllEvents] = React.useState([]);

  React.useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/events/upcoming/3`).then((response) => {
      setUpcomingEvents(response.data);
    })

    axios.get(`${import.meta.env.VITE_SERVER_URL}/events/upcoming`).then((response) => {
      setAllEvents(response.data);
    }).catch((err) => {
      console.log(err);
    })

  }, []);
  return (
    <>
      <Header />
      <div className="event">
        <section className="upcoming-event">
          <Container>
            <Row>
              <Col>
              <h1>Acara Mendatang</h1>
              </Col>
            </Row>
            <div className="upcoming-event-container">
              {upcomingEvents.map((data) => {
                return (
                  <div key={data.id} className="event-container">
                    <img src={`${import.meta.env.VITE_SERVER_URL}/${data.event_thumbnail}`} loading="lazy" alt={`${data.title} image`} className=""/>
                    <div className="event-detail">
                      <h5 className="">{data.title}</h5>
                      <p>{data.event_date} - Selesai</p>
                      <p>{data.event_location_detail} | {data.event_location} </p>
                    </div>
                      <a className="next" href={`${import.meta.env.VITE_WEBSITE_URL}/acara/${data.id}`}>
                        Selengkapnya 
                        <span className="next_arrow">
                          {"->"}
                        </span>
                      </a>
                  </div>)
                })}
            </div>
          </Container>
        </section>

        <div className="acara w-100 min-vh-100">
          <Container>
            <div className="event-list-header">
              <Col lg="6 ">
              <h1>Acara</h1>
              </Col>
              <SearchBar placeholder="Cari Acara"/>
            </div>
            <div className="event-list-container">
              {allEvents.map((data) => <EventCard key={data.id} props={data}/> )}
            </div>
          </Container>
        </div>
      </div>

      <FooterComponent/>
    </>
  )
}
