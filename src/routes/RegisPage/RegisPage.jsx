import React from "react";
import logo from "../../assets/logo/Logo-green.svg";
import styles from "./RegisPage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function RegisPage() {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const navigate = useNavigate();

  //error state
  const [usernameError, setUsernameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmError, setConfirmError] = React.useState(false);
  const [errorMessages, setErrorMessages] = React.useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(username === "") {
      setUsernameError(true);
      setErrorMessages("Nama tidak boleh kosong");
      return;
    }
    if(email === "") {
      setEmailError(true);
      setErrorMessages("Email tidak boleh kosong");
      return;
    }
    if(password === "") {
      setPasswordError(true);
      setErrorMessages("Password tidak boleh kosong");
      return;
    }
    if(confirm === "") {
      setConfirmError(true);
      setErrorMessages("Konfirmasi password tidak boleh kosong");
      return;
    }
    if(password !== confirm) {
      setConfirmError(true);
      setErrorMessages("Password dan konfirmasi password tidak sama");
      return;
    }

    axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/register`, {
      username: username,
      email: email,
      password: password,
      confirm: confirm
    })
    .then((res) => {
      console.log(res.data);
      sessionStorage.setItem("username", JSON.stringify(res.data.username));
      sessionStorage.setItem("email", JSON.stringify(res.data.email));
      sessionStorage.setItem("profile", JSON.stringify(res.data.profile_img));
      sessionStorage.setItem("id", JSON.stringify(res.data.id));

      return navigate(`/`);

      
    })
    .catch((err) => {
      console.error(err.response.data.message);
      if(err.response.data.message === "email is not valid"){
        setErrorMessages("Email tidak valid");
        setEmailError(true);
      }
      if(err.response.data.message === "username is already have account"){
        setErrorMessages("Nama sudah terdaftar");
        setUsernameError(true);
      }
      if(err.response.data.message === "email is already have account"){
        setErrorMessages("Email sudah terdaftar");
        setEmailError(true);
      }
    })
  }

  React.useEffect(() => {
    setUsernameError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmError(false);
    setErrorMessages("");
  }, [username, email, password, confirm])

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
                {usernameError && <label className={styles.on_error}>{errorMessages}</label>}
              
                <label className={styles.regis_label} htmlFor="email">Email</label>
                <input className={styles.regis_input} value={email} onChange={handleEmailChange} type="text" name="" id="email" />
                {emailError && <label className={styles.on_error}>{errorMessages}</label>}

                <label className={styles.regis_label} htmlFor="password">Password</label>
                <input className={styles.regis_input} value={password} onChange={handlePasswordChange} type="password" name="" id="password" />
                {passwordError && <label className={styles.on_error}>{errorMessages}</label>}

                <label className={styles.regis_label} htmlFor="confirm">Konfirmasi Password</label>
                <input className={styles.regis_input} value={confirm} onChange={handleConfirmChange} type="password" name="" id="confirm" />
                {confirmError && <label className={styles.on_error}>{errorMessages}</label>}

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

