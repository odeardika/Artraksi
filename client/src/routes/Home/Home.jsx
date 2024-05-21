import React from "react";
import styles from "./Home.module.css";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";


export default function Home() {
  return (
    <>
      {/* header with backgroud */}
      <header className={styles.header}>
        <nav className={styles.header_navbar}>
          <HeaderNavbar/>
        </nav>
      </header>
      {/* Show MVP section */}
      <section>
        {/* for article */}
        <article></article>
        {/* for komunitas */}
        <article></article>
      </section>

      {/* Populer Article */}
      <section></section>

      {/* Blog Preview  */}
      <section></section>

      {/* Masukan Penggunan */}
      <section></section>

      <footer></footer>
    </>
  );
}
