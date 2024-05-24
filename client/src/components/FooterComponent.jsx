
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/img/Logo.svg';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Container className="footer-content">
        <Row>
          <Col>
            <img src={logo} alt="Logo" />
            <p className="footer-text"> Lestarikan Seni Melalui Digitalisasi </p>
            <ul className="menus">
              <li><a href="#">Beranda</a></li>
              <li><a href="#">Artikel</a></li>
              <li><a href="#">Komunitas</a></li>
              <li><a href="#">Tentang Kami</a></li>
            </ul>
          </Col>
        </Row>
        <Row>
  <Col>
    <hr className="footer-hr" />
    <p className="copy">
      &copy; 2024 Hastra Dewandra - All Rights Reserved
    </p>
  </Col>
</Row>




      </Container>
    </footer>
  );
};

export default FooterComponent;