import React from 'react';
import styles from "./LoginPage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/Logo-green.svg";

export default function LoginPage() {
  const [identifire, setIdentifire] = React.useState(""); //email or username
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  //error state
  const [identifireError, setIdentifireError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState("");

  const handleIdentifireChange = (e) => {0
    setIdentifire(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  React.useEffect(() => {
    setIdentifireError(false);
    setPasswordError(false);
    setErrorMessages("");

  }, [identifire, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(identifire === "") {
      setIdentifireError(true);
      setErrorMessages("Email atau nama tidak boleh kosong");
      return;
    }
    if(password === "") {
      setPasswordError(true);
      setErrorMessages("Password tidak boleh kosong");
      return;
    }

    axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/login`, {
      identifire: identifire,
      password: password
    }).then((res) => {
      localStorage.setItem("username", JSON.stringify(res.data.username));
      localStorage.setItem("email", JSON.stringify(res.data.email));
      localStorage.setItem("profile", JSON.stringify(res.data.profile_img));
      localStorage.setItem("id", JSON.stringify(res.data.id));

      navigate("/");


    }).catch((err) => {
      console.log(err.response.data);
      if(err.response.data.message === "Password was inccorect"){
        setPasswordError(true);
        setErrorMessages("Password tidak sesuai");
      }
      if(err.response.data.message === "Username not found"){
        setIdentifireError(true);
        setErrorMessages("Username tidak ditemukan");
      }
      if(err.response.data.message === "Email not found"){
        setIdentifireError(true);
        setErrorMessages("Email tidak ditemukan");
      }
    })

  }


  return (
    <>
        <div className={styles.container}>
          <form action="" className={styles.form_login}>
              <div className={styles.logo_container}>
                <img className={styles.logo} src={logo} alt="logo" />
              </div>
              <h1 className={styles.form_heading}>
                Masuk dulu
                <br />
                untuk menikmati layanan kami
              </h1>

              <div className={styles.login_input_field}>
              
                <label className={styles.login_label} htmlFor="email">Email atau Nama</label>
                <input className={styles.login_input} value={identifire} onChange={handleIdentifireChange} type="text" name="" id="email" />
                {identifireError && <label className={styles.on_error}>{errorMessages}</label>}

                <label className={styles.login_label} htmlFor="password">Password</label>
                <input className={styles.login_input} value={password} onChange={handlePasswordChange} type="password" name="" id="password" />
                {passwordError && <label className={styles.on_error}>{errorMessages}</label>}

                <div className={styles.login_button_container}>
                  <button className={styles.login_button} onClick={handleSubmit}>Masuk</button>
                </div>

                <p className={styles.login_p}>Belum mempunyai akun? 
                  <span className={styles.login_p_span}>
                    <a className={styles.regis_anchor} href={`${import.meta.env.VITE_WEBSITE_URL}/regis`}> Daftar disini</a>
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
