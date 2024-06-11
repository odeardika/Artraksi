import React from "react";
import logo from "../../assets/logo/Logo-green.svg";
import styles from "./RegisPage.module.css";


export default function RegisPage() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password, confirm); 
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  const handleConfirmChange = (e) => {
    setConfirm(e.target.value);
  }

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
                  <input className={styles.regis_input} value={username} onChange={handleUsernameChange} type="text" name="" id="name" />
                
                  <label className={styles.regis_label} htmlFor="email">Email</label>
                  <input className={styles.regis_input} value={email} onChange={handleEmailChange} type="text" name="" id="email" />
                
                  <label className={styles.regis_label} htmlFor="password">Password</label>
                  <input className={styles.regis_input} value={password} onChange={handlePasswordChange} type="password" name="" id="password" />
                
                  <label className={styles.regis_label} htmlFor="confirm">Konfirmasi Password</label>
                  <input className={styles.regis_input} value={confirm} onChange={handleConfirmChange} type="password" name="" id="confirm" />

                  <div className={styles.regis_button_container}>
                    <button className={styles.regis_button} onClick={handleSubmit}>Buat Akun</button>
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

