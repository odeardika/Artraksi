import React from 'react'
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/icon/search.svg'

export default function SearchBar({customStyles}) {
  return (
    <>
        <form className={`${styles.search_bar} ${customStyles}`} action="">
          <input type="text" placeholder="Cari artikel" />
          <button><img src={searchIcon} alt="" /></button>
        </form>
    </>
  )
}
