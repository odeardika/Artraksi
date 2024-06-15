import React from 'react';
import styles from './LoginButton.module.css';

export default function LoginButton() {
  return (
    <>
      <div className={styles.button_container}>
        <p className={styles.login_text}><a href={`${import.meta.env.VITE_WEBSITE_URL}/login`}>Login</a></p>
      </div>
    </>
  )
}
