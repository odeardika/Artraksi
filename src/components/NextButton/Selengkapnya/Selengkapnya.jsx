import React from 'react';
import styles from './Selengkapnya.module.css';
import { useNavigate } from 'react-router-dom';

export default function Selengkapnya({href, customStyles}) {
  const navigate = useNavigate();
  return (
    <p><a href={''} onClick={() => navigate(href)} className={`${styles.next} ${customStyles}`}>Selengkapnya <span className={styles.next_arrow}>{'->'}</span></a></p>
  )
}
