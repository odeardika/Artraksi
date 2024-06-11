import { Container, Row, Col } from "react-bootstrap"
import { AcaraTerbaru, Acara } from "./index"; 
import "./main.css";

export default function Calender() {
  return (
    <div className="kalender">
      <header className="terbaru w-100 min-vh-100">
        <Container>
          <Row>
            <Col className="py-4">
            <h1>Terbaru</h1>
            </Col>
          </Row>
          <Row>
            {AcaraTerbaru.map((data) => {
              return <Col key={data.id}>
                <img src={data.image} alt="" className="w-100 mb-3"/>
                <h5 className="mb-4 px-1">{data.title}</h5>
                <div className="ket mb-2 px-1 ">
                <p>{data.waktu}</p>
                <p>{data.tempat}</p>
                </div>
                <button className="btn btn-transparent btn-transparent-custom mb-5">{data.button}
                <i class="fa-solid fa-arrow-right ms-2"></i>
                </button>
                </Col>;
              })}
          </Row>
        </Container>
      </header>

      <div className="acara w-100 min-vh-100">
        <Container>
          <Row className="py-4">
            <Col lg="6 ">
            <h1>Acara</h1>
            </Col>
            <Col lg="6 ">
            <div className="search-container d-flex justify-content-lg-end justify-content-start">
              <input
                type="text"
                className="search-input"
                placeholder="Cari acara..."
              />
            </div>
          </Col>
          </Row>
          <Row>
            {Acara.map((data) => {
              return  <Col key={data.id}>
                <img src={data.image} alt="" className="w-100 mb-3"/>
                <h5 className="mb-4 px-1">{data.title}</h5>
                <div className="ket mb-2 px-1 ">
                <p>{data.waktu}</p>
                <p>{data.tempat}</p>
                </div>
                <button className="btn btn-transparent btn-transparent-custom mb-5">{data.button}
                <i class="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </Col>;
            })}
           
          </Row>
        </Container>
      </div>
    </div>
  )
}
