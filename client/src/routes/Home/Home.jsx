import React from "react";
import styles from "./Home.module.css";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import articleMVP from "../../assets/homepage-article.svg";
import komunitasMVP from "../../assets/homepage-komunitas.svg"


export default function Home() {
  return (
    <>
      {/* header with backgroud */}
      <header className={styles.header}>
        <nav className={styles.header_navbar}>
          <HeaderNavbar/>
        </nav>
        <h1 className={styles.h1}>Temukan Kesenian di Yogyakarta</h1>
        <h2 className={styles.h2}>Artraksi telah menyediakan berbagai informasi seputar kesenia di daerah Yogyakarta</h2>
      </header>

      {/* Show MVP section */}
      <section className={styles.mvp_preview}>
        {/* for article */}
        <article className={styles.article}>
        <img src={articleMVP} alt="Article" />
          <div className={styles.mvp_desc}>
            <h3>Artikel Kebudayaan Yogyakarta</h3>
            <p>Telusuri pesona budaya Yogyakarta melalui artikel kami yang mendalam. Temukan cerita-cerita menarik tentang tradisi, seni, dan sejarah yang membentuk identitas unik kota ini. Dari seni wayang hingga keindahan arsitektur kraton, jelajahi dan pahami kekayaan budaya istimewa Yogyakarta.</p>
            <div className={styles.button}>Selengkapnya</div>
          </div>
        </article>
        {/* for komunitas */}
        <article className={styles.komunitas}>
          <div className={styles.mvp_desc}>
            <h3>Komunitas Seni Pertunjukan</h3>
            <p className={styles.komunitas_desc}>Temukan komunitas kebudayaan Yogyakarta dan terhubunglah dengan para pecinta budaya lokal. Teman-teman baru dan diskusi yang mendalam tentang seni, tradisi, dan acara budaya. Jadilah bagian dari upaya melestarikan dan memperkenalkan kekayaan budaya istimewa Yogyakarta kepada dunia.</p>
            <div className={styles.button}>Selengkapnya</div>
          </div>
          <img src={komunitasMVP} alt="Article" />
        </article>
      </section>

      {/* Populer Article */}
      <section className={styles}></section>

      {/* Blog Preview  */}
      <section></section>

      {/* Masukan Penggunan */}
      <section></section>

      <footer></footer>
    </>
  );
}
