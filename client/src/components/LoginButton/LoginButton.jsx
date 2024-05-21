import React from 'react';
import styles from './LoginButton.module.css';

export default function LoginButton() {
  return (
    <>
      <div className={styles.button_container}>
        <p className={styles.login_text}>Login</p>
      </div>
    </>
  )
}
