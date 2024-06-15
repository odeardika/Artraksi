import React from 'react';
import styles from './HeaderNavbar.module.css';
import logo from './../../assets/logo/Logo.svg';
import LoginButton from '../LoginButton/LoginButton';
import ProfilePreview from '../ProfilePreview/ProfilePreview';
import dropdownDefaultIcon from '../../assets/icon/arrow-down/arrow-down.svg';
import dropdownHoverIcon from '../../assets/icon/arrow-down/arrow-down-hover.svg';
import dropdownOpenIcon from '../../assets/icon/arrow-down/arrow-up.svg';
import axios from 'axios';


export default function HeaderNavbar() {
  const [dropdownIcon, setDropdownIcon] = React.useState(dropdownDefaultIcon);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [profilePicture, setProfilePicture] = React.useState("");

  React.useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/user/profile`, {
      headers: {
        'Authorization' : JSON.parse(sessionStorage.getItem('token'))
      }
    }).then((res) => {
      setProfilePicture(res.data.profile_img);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  const handleMouseEnter = () => {
    if(!isDropdownOpen){
      setDropdownIcon(dropdownHoverIcon);
    }
  }
  const handleMouseLeave = () => {
    if(!isDropdownOpen){
      setDropdownIcon(dropdownDefaultIcon);
    }
  }
  const handleOnClick = () => {
    if (isDropdownOpen) {
      setDropdownIcon(dropdownHoverIcon);
    } else {
      setDropdownIcon(dropdownOpenIcon);
    }
    setIsDropdownOpen(!isDropdownOpen);
  }
        
  return (
    <div className={styles.header_container}>
      <img src={logo} alt="Artraksi Logo" />

      <nav className={styles.navbar_container}>
        <ul className={styles.navbar}>
          <li className={styles.nav_item}>
            <a className={styles.nav_item_anchor} href={`${import.meta.env.VITE_WEBSITE_URL}/`}>beranda</a>
          </li>

          <li className={styles.nav_item}>
            <div className={styles.dropdown_container}>
              <a className={`${styles.nav_item_anchor} ${styles.dropdown} ${isDropdownOpen? styles.dropdown_active : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleOnClick} href={`#`}>layanan 
                <span>
                  <img className={styles.dropdown_icon} src={dropdownIcon} alt="dropdown icon" />
                </span>
              </a>
              {isDropdownOpen && (
                <div className={styles.dropdown_content}>
                  <a href={`${import.meta.env.VITE_WEBSITE_URL}/artikel`}>artikel</a>
                  <a href={`${import.meta.env.VITE_WEBSITE_URL}/komunitas`}>komunitas</a>
                  <a href={`${import.meta.env.VITE_WEBSITE_URL}/blog`}>blog</a>
                  <a href={`${import.meta.env.VITE_WEBSITE_URL}/acara`}>acara</a>
                </div>
              )}
            </div>
            
          </li>

          <li className={styles.nav_item}>
            <a className={styles.nav_item_anchor} href={`${import.meta.env.VITE_WEBSITE_URL}/tentang_kami`}>tentang kami</a>
          </li>
        </ul>
      </nav>
      {(!profilePicture) ? (<LoginButton />) : (<ProfilePreview img={`${import.meta.env.VITE_SERVER_URL}/${profilePicture}`} />)}
  </div>
  
  );
}