import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './HeaderNavbar.module.css';
import logo from './../../assets/logo/Logo.svg';
import LoginButton from '../LoginButton/LoginButton';

export default function HeaderNavbar({customHeaderContainerStyle}) {
  return (
    <>
    <div className={(!customHeaderContainerStyle)? styles.header_container : customHeaderContainerStyle}>
    <Navbar expand="lg" className={styles.header}>
            <img src={logo} alt="Artraksi Logo" />
            <nav className={styles.navbar}>
              <Nav.Link href="./" className={styles.navbar_text}>Beranda</Nav.Link>
              <NavDropdown title="Layanan" id="basic-nav-dropdown" className={styles.navbar_text}>
                <p className={styles.dropdown_text}><a href={`${import.meta.env.VITE_WEBSITE_URL}/artikel`}>Artikel</a></p>
                <p className={styles.dropdown_text}><a href={`${import.meta.env.VITE_WEBSITE_URL}/komunitas`}>Komunitas</a></p>
                <p className={styles.dropdown_text}><a href={`${import.meta.env.VITE_WEBSITE_URL}/blog`}>Blog</a></p>
                <p className={styles.dropdown_text}><a href={`${import.meta.env.VITE_WEBSITE_URL}/kalender`}>Kalender</a></p>
              </NavDropdown>
              <Nav.Link className={styles.navbar_text} href={`${import.meta.env.VITE_WEBSITE_URL}/tentang_kami`}>Tentang Kami</Nav.Link>
            </nav>
            <LoginButton />
    </Navbar>
    </div>
    </>
  )
}