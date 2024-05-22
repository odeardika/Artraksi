import React, { useState } from "react"
import style from "./Style.css"

export default function Login() {

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <div>
            <img src="" alt="logo ATRAKSI" />
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
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">Masuk</button>
          </div>
          <span className="link-primary" onClick=''>
          Belum mempunyai akun?{" "}
          Daftar disini
          </span>
        </div>
      </form>
    </div>
  )
}

