import React, { useState } from "react";
import logo from "../../assets/logo/Logo-green.svg";
import styles from "./RegisPage.module.css";


export default function RegisPage() {
  return (
    <>
        <div className={styles.container}>
            <form action="" className={styles.form_regis}>
                <div className={styles.logo_container}>
                  <img className={styles.logo} src={logo} alt="logo" />
                </div>
                <h1 className={styles.form_heading}>
                  Buat akun dulu
                  <br />
                  untuk menikmati layanan kami
                </h1>

                <div className={styles.regis_input_field}>
                  <label className={styles.regis_label} htmlFor="name">Nama</label>
                  <input className={styles.regis_input} type="text" name="" id="name" />
                
                  <label className={styles.regis_label} htmlFor="email">Email</label>
                  <input className={styles.regis_input} type="text" name="" id="email" />
                
                  <label className={styles.regis_label} htmlFor="password">Password</label>
                  <input className={styles.regis_input} type="password" name="" id="password" />
                
                  <label className={styles.regis_label} htmlFor="confirm">Konfirmasi Password</label>
                  <input className={styles.regis_input} type="password" name="" id="confirm" />

                  <div className={styles.regis_button_container}>
                    <button className={styles.regis_button}>Buat Akun</button>
                  </div>
                  <p className={styles.regis_p}>Sudah mempunyai akun? 
                    <span className={styles.regis_p_span}>
                      <a className={styles.login_anchor} href={`${import.meta.env.VITE_WEBSITE_URL}/login`}> Masuk disini</a>
                    </span>
                  </p>

                </div>
            </form>
            <div className={styles.hero_container}>
                <img className={styles.hero} src={`${import.meta.env.VITE_SERVER_URL}/assets/hero/login_regis.png`} alt="hero image" />
            </div>
        </div>
    
    </>
  )
}

