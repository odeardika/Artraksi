import React, { useState } from "react"

export default function Regis() {

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault() // Prevent default form submission

  if (password !== confirmPassword) {
    setErrorMessage('Password tidak sesuai dengan konfirmasi')
    return // Prevent further processing if passwords don't match
  }

  // Perform password validation or submit the form here
  console.log('Passwords match!')
  // Reset error message
  setErrorMessage('')
  }
  
  return (

    <form onSubmit={handleSubmit}>
      <div className="Auth-form-container">
        <div>
          <img src="" alt="logo ATRAKSI" />
        </div>
        <div className="text-center">
          <p>Buat dulu</p>
          <p>untuk menikmati layanan kami</p>
        </div>
        <div className="form-group mt-3">
          <label>Nama</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Masukkan nama"
          />
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
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="form-group mt-3">
          <label>Konfirmasi Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Masukkan ulang password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
        <div className="d-grid gap-2 mt-3">
        <button type="submit" className="btn btn-primary">Buat Akun</button>
        </div>
        <span className="link-primary" onClick=''>
          Sudah mempunyai akun?{" "}
          Masuk disini
          </span>
      </div>
    </form>
  )
}

