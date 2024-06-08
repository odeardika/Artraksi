import React from 'react';
import styles from './Selengkapnya.module.css';

export default function Selengkapnya({href, customStyles}) {
  return (
    <p><a href={href} className={`${styles.next} ${customStyles}`}>Selengkapnya <span className={styles.next_arrow}>{'->'}</span></a></p>
  )
}
