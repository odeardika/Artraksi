import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import "./main.css";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import articleMVP from "../../assets/homepage-article.svg";
import komunitasMVP from "../../assets/homepage-komunitas.svg"
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import ComunitySectionImg from '../../assets/homepage-comunity.png'
import ComunityInfoCard from "../../components/ComunityInfoCard.jsx/ComunityInfoCard";
import BlogCard from "../../components/BlogCard/BlogCard";
import user0 from "../../assets/user/0.png";
import user1 from "../../assets/user/1.png";
import user2 from "../../assets/user/2.png";
import FeedbackCard from "../../components/FeedbackCard/FeedbackCard";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import axios from "axios";


import { Container, Row, Col } from "react-bootstrap";



const userFeedback = [
  {id : 0, username : "Alan Garza", content : "Website ini memberikan informasi yang sangat lengkap tentang berbagai kebudayaan di Indonesia. Saya jadi bisa lebih mengenal dan menghargai keberagaman budaya kita.", img : user0, rate : 5},
  {id : 1, username : "Stephen Matthews", content : "Saya menyukai bagaimana navigasinya sangat intuitif. Saya dengan mudah bisa menemukan artikel, acara, dan komunitas yang saya cari.", img : user1 , rate : 4},
  {id : 2, username : "Bob Alexander", content : "Desain website ini sangat menarik! Saya suka bagaimana gambar-gambar budaya ditampilkan dengan cantik di seluruh halaman.", img : user2, rate : 4.5},
]

export default function Home() {
  const [articles, setArticles] = React.useState([]);
  const [blogs, setBlogs] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/articles/top`)
      .then(res => {
        setArticles(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/trending/3`)
    .then(response => {
      setBlogs(response.data);
    })
  }
  , []);



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
          <div className="artikel w-100 min-vh-100 d-flex align-items-center">
    <Container>
        <Row className="header-box d-flex align-items-center">
            <Col lg="6">
                <img src={articleMVP} alt="Artikel Kebudayaan Yogyakarta" className="img-fluid" />
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
                <h3 className="mb-4">Artikel Kebudayaan Yogyakarta</h3>
                <p className="mb-4">
                    Telusuri pesona budaya Yogyakarta melalui artikel kami yang mendalam. Temukan cerita-cerita menarik tentang tradisi, seni, dan sejarah yang membentuk identitas unik kota ini. Dari seni wayang hingga keindahan arsitektur kraton, jelajahi dan pahami kekayaan budaya istimewa Yogyakarta.
                </p>
                <button className="btn btn-success btn-lg-5" onClick={() => navigate('/artikel')}>Selengkapnya</button>
            </Col>
        </Row>
    </Container>
</div>

<div className="komunitas w-100 min-vh-100 d-flex align-items-center">
    <Container>
        <Row className="header-box d-flex align-items-center">
            <Col lg="6" className="pt-lg-0 pt-5">
                <h3 className="mb-4">Komunitas Seni Pertunjukan</h3>
                <p className="mb-4">
                    Temukan komunitas kebudayaan Yogyakarta dan terhubunglah dengan para pecinta budaya lokal. Teman-teman baru dan diskusi yang mendalam tentang seni, tradisi, dan acara budaya. Jadilah bagian dari upaya melestarikan dan memperkenalkan kekayaan budaya istimewa Yogyakarta kepada dunia.
                </p>
                <button className="btn btn-success btn-lg-5 mb-3" onClick={() => navigate('/komunitas')}>Selengkapnya</button>
            </Col>
            <Col lg="6" className="text-end">
                <img src={komunitasMVP} alt="Komunitas Seni Pertunjukan Yogyakarta" className="img-fluid" />
            </Col>
        </Row>
    </Container>
</div>

    
      {/* Populer Article */}
      <section className={styles.article_section}>
        <h2>Artikel <span>Terpopuler</span></h2>
        <div className={styles.list_article}>
          {articles.map(article => <ArticleCard key={article.id} props={article} />)}
        </div>
      </section>


         {/* Komunitas */}
         <section className={styles.komunitas_section}>
      <Container>
        <Row>
          <Col md={12} lg={6} className={styles.komunitas_detail_container}>
            <h2>Lebih dekat dengan Pegiat Seni Pertunjukan <span>Yogyakarta</span></h2>
            <div className={styles.komunitas_detail}>
                <ComunityInfoCard index={0}/>
                <ComunityInfoCard index={1}/>
                <ComunityInfoCard index={2}/>
            </div>
          </Col>
          <Col md={12} lg={6} className="text-center">
            <img src={ComunitySectionImg} alt="Komunitas Seni Pertunjukan Yogyakarta" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>


     {/* Blog Preview  */}

      <section className={styles.blog_section}>
      <h2>Dapatkan cerita terbaru dari <span>pengguna</span></h2>
      <div className={styles.blog_container}>
        {blogs.map(blogItem => <BlogCard key={blogItem.id} props={blogItem} />)}
      </div>
    </section>

     {/* Masukan Penggunan */}
     <section className={styles.feedback}>
      <h2>Masukan dari Pengguna</h2>
      <div className={styles.feedback_container}>
        {userFeedback.map(feedback => <FeedbackCard key={feedback.id} rate={feedback.rate} props={feedback} />)}
      </div>
    </section>
      
        {/* Footer */}  
        <FooterComponent/>
    </>
  );
}
