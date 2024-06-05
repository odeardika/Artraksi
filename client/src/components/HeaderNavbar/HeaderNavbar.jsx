import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import styles from './HeaderNavbar.module.css';
import logo from './../../assets/logo/Logo.svg';
import LoginButton from '../LoginButton/LoginButton';



export default function HeaderNavbar() {
  return (
    <div className={styles.header_container}>
    <Navbar expand="lg" className={styles.header}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Artraksi Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  className={styles.toglerr}  />
        <Navbar.Collapse id="basic-navbar-n">
          <Nav className="mx-auto text-center">
            <Nav.Link href={`${import.meta.env.VITE_WEBSITE_URL}`} className={styles.navbar_text}>Beranda</Nav.Link>
            <NavDropdown title="Layanan" id="basic-nav-dropdown" className={styles.navbar_text}>
              <NavDropdown.Item href={`${import.meta.env.VITE_WEBSITE_URL}/artikel`} className={styles.dropdown_text}>Artikel</NavDropdown.Item>
              <NavDropdown.Item href={`${import.meta.env.VITE_WEBSITE_URL}/komunitas`} className={styles.dropdown_text}>Komunitas</NavDropdown.Item>
              <NavDropdown.Item href={`${import.meta.env.VITE_WEBSITE_URL}/blog`} className={styles.dropdown_text}>Blog</NavDropdown.Item>
              <NavDropdown.Item href={`${import.meta.env.VITE_WEBSITE_URL}/kalender`} className={styles.dropdown_text}>Kalender</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={`${import.meta.env.VITE_WEBSITE_URL}/tentang_kami`} className={styles.navbar_text}>Tentang Kami</Nav.Link>
          </Nav>
          <div className="text-center">
            <LoginButton className={styles.login_button} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  
  );
}