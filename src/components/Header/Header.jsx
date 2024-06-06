import React from 'react';
import styles from './Header.module.css';
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';

export default function Header() {
  return (
    <>
    <div className={styles.container}>
        <HeaderNavbar customHeaderContainerStyle={styles.header_container}/>
    </div>
    </>
  )
}
