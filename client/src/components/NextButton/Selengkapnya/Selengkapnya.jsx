import React from 'react';
import styles from './Selengkapnya.module.css';

export default function Selengkapnya({href}) {
  return (
    <p><a href={href} className={styles.next}>Selengkapnya <span className={styles.next_arrow}>{'->'}</span></a></p>
  )
}
