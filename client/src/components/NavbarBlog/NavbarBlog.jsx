import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavbarBlog.module.css';


export default function NavbarBlog() {
    return (
        <>
        <div className={styles.header_container}>
            <Navbar expand="lg" className={styles.header}>
                <h2>
                    <nav className={styles.navbar}>
                        <Nav.Link className={styles.navbar_text} href="">Untukmu</Nav.Link>
                        <Nav.Link className={styles.navbar_text} href="">Diikuti</Nav.Link>
                        <Nav.Link className={styles.navbar_text} href="">Tag</Nav.Link>
                    </nav>
                </h2>
            </Navbar>
        </div>
        </>
    )
}
