import React from 'react'
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/icon/search.svg'

export default function SearchBar({customStyles, placeholder = "Cari artikel", handleSearch}) {
  const [value, setValue] = React.useState('');
  const onChangeHandler = (event) => {
    setValue(event.target.value);

    handleSearch(event.target.value);
  }
  return (
    <>
        <form className={`${styles.search_bar} ${customStyles}`} action="">
          <input type="text" placeholder={placeholder} onChange={onChangeHandler} value={value}/>
          <button><img src={searchIcon} alt="" /></button>
        </form>
    </>
  )
}
