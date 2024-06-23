import React from 'react';
import styles from './LoginButton.module.css';

import { useNavigate } from 'react-router-dom';


export default function LoginButton() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.button_container}>
        <p className={styles.login_text}><a href={``} onClick={() => navigate('/login')}>Login</a></p>
      </div>
    </>
  )
}
