import React, { useState } from "react"
import "./Style.css"
import logo from "./aset/Logo.svg"
import bgside from "./aset/bgawal.jpg"

export default function Login() {
    return (
        <div className="pembungkus">
            <div className="row">
                <div className="kiri col-lg-5 col-xl-5 grid-left">
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
                    <a className="regis" href="regis">Daftar disini</a>
                    </span>
                    <span className="back_home">
                        <a className="home" href="./">beranda</a>
                    </span>
                </div>
                <div className="kanan col-lg-7 col-xl-7 grid-right">
                <div className="container_bg">
                    <img className="sidebg" src={bgside} alt="side background" />
                </div>
                </div>
            </div>
        </div>
    );
}