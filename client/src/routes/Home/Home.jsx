import React from "react";
import styles from "./Home.module.css";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import articleMVP from "../../assets/homepage-article.svg";
import komunitasMVP from "../../assets/homepage-komunitas.svg"
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ComunitySectionImg from '../../assets/homepage-comunity.png'
import ComunityInfoCard from "../../components/ComunityInfoCard.jsx/ComunityInfoCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import blog0 from "../../assets/blog/0.png";
import blog1 from "../../assets/blog/1.png";
import blog2 from "../../assets/blog/2.png";
import user0 from "../../assets/user/0.png";
import user1 from "../../assets/user/1.png";
import user2 from "../../assets/user/2.png";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";

const blog = [
  {
    id : 0,
    by : ["Alan Garza", user0],
    title : "Pengalaman Menonton Pertunjukan Wayang Kulit di Yogyakarta",
    img : blog0,
    content : [
      {
        text : "Halo pembaca setia! Kali ini saya ingin berbagi pengalaman yang tak terlupakan saat menonton pertunjukan wayang kulit di Yogyakarta. Sebagai penggemar budaya Jawa, kesempatan ini adalah mimpi yang menjadi kenyataan.",
        type : "p"
      }
    ]
  },
  {
    id : 1,
    by : ["Stephen Matthews", user1],
    title : "Pengalaman Menonton Pertunjukan Wayang Kulit di Yogyakarta",
    img : blog1,
    content : [
      {
        text : "Halo pembaca setia! Kali ini saya ingin berbagi pengalaman yang tak terlupakan saat menonton pertunjukan wayang kulit di Yogyakarta. Sebagai penggemar budaya Jawa, kesempatan ini adalah mimpi yang menjadi kenyataan.",
        type : "p"
      }
    ]
  },
  {
    id : 2,
    by : ["Bob Alexander", user2],
    title : "Pengalaman Menonton Pertunjukan Wayang Kulit di Yogyakarta",
    img : blog2,
    content : [
      {
        text : "Halo pembaca setia! Kali ini saya ingin berbagi pengalaman yang tak terlupakan saat menonton pertunjukan wayang kulit di Yogyakarta. Sebagai penggemar budaya Jawa, kesempatan ini adalah mimpi yang menjadi kenyataan.",
        type : "p"
      }
    ]
  },
]

const userFeedback = [
  {id : 0, username : "Alan Garza", content : "Website ini memberikan informasi yang sangat lengkap tentang berbagai kebudayaan di Indonesia. Saya jadi bisa lebih mengenal dan menghargai keberagaman budaya kita.", img : user0, rate : 5},
  {id : 1, username : "Stephen Matthews", content : "Saya menyukai bagaimana navigasinya sangat intuitif. Saya dengan mudah bisa menemukan artikel, acara, dan komunitas yang saya cari.", img : user1 , rate : 4},
  {id : 2, username : "Bob Alexander", content : "Desain website ini sangat menarik! Saya suka bagaimana gambar-gambar budaya ditampilkan dengan cantik di seluruh halaman.", img : user2, rate : 4.5},
]

export default function Home() {
  return (
    <>
      {/* header with backgroud */}
      <header className={styles.header}>
        <nav className={styles.header_navbar}>
          <HeaderNavbar/>
        </nav>
        <div className={styles.header_info}>
          <h1 className={styles.h1}>Temukan Kesenian di Yogyakarta</h1>
          <h2 className={styles.h2}>Artraksi telah menyediakan berbagai informasi seputar kesenia di daerah Yogyakarta</h2>
        </div>
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
        <h2>Dapatkan cerita terbaru dari <span>pengguna</span></h2>
        <div className={styles.blog_container}>
          {blog.map(blogItem => <BlogCard key={blogItem.id} props={blogItem}/>)}
        </div>
      </section>

      {/* Masukan Penggunan */}
      <section className={styles.feedback}>
        <h2>Masukan dari Pengguna</h2>
        <div className={styles.feedback_container}>
          {userFeedback.map(feedback => <FeedbackCard key={feedback.id} rate={feedback.rate} props={feedback}/>)}
        </div>
      </section>

      <footer></footer>
    </>
  );
}