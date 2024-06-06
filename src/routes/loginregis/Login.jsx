import React, { useState } from "react"
import "./Style.css"
import logo from "./aset/Logo.svg"
import bgside from "./aset/bgawal.jpg"

export default function Login() {

  return (
    <div className="pembungkus">
      <div className="left-section">
        <div className="logo">
          <img src={logo} alt="logo ATRAKSI" />
        </div>
        <div className="text-center">
          <p>Masuk dulu</p>
          <p>untuk menikmati layanan kami</p>
        </div>
        <div className="form-group mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Masukkan email"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Masukkan password"
          />
        </div>
        <div className="text gap-2 mt-3">
          <button type="submit" className="btn">Masuk</button>
        </div>
        <span className="link" onClick=''>
        Belum mempunyai akun? {""}
        <a href="regis">Daftar disini</a>
        </span>
      </div>
      <div className="right-section">
        <img className="sidebg" src={bgside} alt="side background" />
      </div>
    </div>
  )
}

