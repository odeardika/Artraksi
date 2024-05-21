import React from "react";
import styles from "./Home.module.css";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import articleMVP from "../../assets/homepage-article.svg";
import komunitasMVP from "../../assets/homepage-komunitas.svg"
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ComunitySectionImg from '../../assets/homepage-comunity.png'
import ComunityInfoCard from "../../components/ComunityInfoCard.jsx/ComunityInfoCard";

const articleList = [
  {
    id : 0,
    by : "Atraksi", 
    title : "Tari Bedhaya: Keanggunan Sakral dari Keraton Yogyakarta", 
    img : "",
    content : [
      {
        text : "Tari Bedhaya adalah salah satu bentuk tarian klasik Jawa yang berasal dari Keraton Yogyakarta. Tarian ini tidak hanya dikenal karena keindahan gerakannya, tetapi juga karena nilai-nilai spiritual dan filosofis yang terkandung di dalamnya. Tari Bedhaya adalah representasi sempurna dari harmoni, kesucian, dan keanggunan yang menjadi bagian integral dari budaya Jawa.", 
        type : "p"
      },  
    ]
  }
];


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
      <section className={styles.article_section}>
        <h2>Artikel <span>Terpopuler</span></h2>
        <div className={styles.list_article}>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </section>

      {/* Komunitas */}
      <section className={styles.komunitas_section}>
        <div className={styles.komunitas_detail_container}>
          <h2>Lebih dekat dengan  Pegiat Seni Pertunjukan <span>Yogyakarta</span></h2>
          <div className={styles.komunitas_detail}>
            <ComunityInfoCard index={0}/>
            <ComunityInfoCard index={1}/>
            <ComunityInfoCard index={2}/>
          </div>
        </div>
          <img src={ComunitySectionImg} alt="" />
      </section>

      {/* Blog Preview  */}
      <section className={styles.blog_section}>
      </section>

      {/* Masukan Penggunan */}
      <section></section>

      <footer></footer>
    </>
  );
}
