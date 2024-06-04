import { Container, Row, Col } from "react-bootstrap";
import Headers from "../../components/Header/Header";
import "./main.css"
import FooterComponent from "../../components/FooterComponent/FooterComponent";



function TentangKamiPage() {
  return (
    <div className="tentangpage">
    <Headers/>
    <div className="hero  ">
       <Container>
        <Row>
            <Col className="text-white">
                <h1 className="">Tentang Kami <br/> <span className="highlight">ARTRAKSI</span></h1>
            </Col>
        </Row>
       </Container>
    </div>
    
    <div className="hastra w-100 min-vh-75">
      <Container>
        <Row>
          <Col className="text-center">
          <h1 className=" fw-bold">Hastra Dewandra</h1>
          <p>Perkenalkan kami Hastra Dewandra sebuah grup yang tergabung dalam proyek akhir studi independen UI/UX dan Web Development. Kami memiliki ketertarikan yang sama dalam seni pertunjukan dan teknologi, sehingga kami memutuskan untuk membuat sebuah website informasi mengenai seni pertunjukan di Yogyakarta sebagai projek massive kami.</p>
          </Col>
        </Row>
      </Container>
    </div>


      <div className="filosofi w-100 min-vh-75">
        <Container>
          <Row>
            <Col className=" text-center">
            <h1 className="fw-bold">Filosofi</h1>
            <p>Nama Hastradewa dapat diartikan sebagai lima pemuda yang memiliki kekuatan keterampilan dewa. Filosofi tim Hastradewa terinspirasi dari arti namanya. Lima anggota tim ini, layaknya lima dewa, memiliki kekuatan dan keterampilan yang unik dan luar biasa. Kekuatan dan keterampilan ini mereka gabungkan untuk mencapai tujuan bersama, yaitu menciptakan sesuatu yang luar biasa.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="tujuan w-100 min-vh-75">
        <Container>
          <Row>
            <Col className="text-center">
            <h1 className="fw-bold">Tujuan</h1>
            <p>Menyediakan platform yang komprehensif dan mudah digunakan bagi para pecinta seni pertunjukan di Yogyakarta untuk menemukan informasi tentang berbagai pertunjukan, acara, dan komunitas seni yang ada di Yogyakarta. Website ini juga bertujuan untuk mempromosikan seni pertunjukan Yogyakarta kepada masyarakat luas dan meningkatkan apresiasi masyarakat terhadap seni pertunjukan.</p>
            </Col>
          </Row>
        </Container>
      </div>

    <FooterComponent/>





    </div>
  )
}

export default TentangKamiPage