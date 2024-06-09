import React from 'react';
import styles from './DetailArticle.module.css';
import Header from '../../components/Header/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import likeIcon from '../../assets/icon/like.svg';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import FooterComponent from '../../components/FooterComponent/FooterComponent';

export default function DetailArticle() {
    const { id } = useParams();
    const backendURL = import.meta.env.VITE_SERVER_URL;

    const [article, setArticle] = React.useState({});
    const [content, setContent] = React.useState([]);
    const [recomendation, setRecomendation] = React.useState([]);

    React.useEffect(() => {
        axios.get(`${backendURL}/articles/${id}`)
        .then((response) => {
            setArticle(response.data);
        });

        axios.get(`${backendURL}/articles/contents/${id}`)
        .then((response) => {
            setContent(response.data);
        });

        axios.get(`${backendURL}/articles/recomendation/${id}`)
        .then((response) => {
            console.log(response.data);
            setRecomendation(response.data);
        });
    }, []);
  return (
    <>
        <Header />
        <h1 className={styles.title}>{article.title}</h1>
        <div className={styles.article_detail}>
            <div className={styles.author_detail}>
                <img src={`${backendURL}/${article.creator_profile}`} alt="author" className={styles.author_img} />
                <div>
                    <h2>{article.creator_name}</h2>
                    <p>{"Penulis Artikel"}</p>
                </div>
            </div>
            <div className={styles.other_detail}>
                <img src={likeIcon} alt="like icon" />
                <p>0</p>
            </div>
        </div>

        <img src={`${backendURL}/${article.thumbnail_img}`} alt="article" className={styles.thumbnail_img} />

        <div className={styles.content_container}>
            {content.map((content) => (
                <div key={content.id}>
                    {(content.text_type === "paragraph")? <p className={styles.content_container_p}>{content.text}</p> : <h2 className={styles.content_container_h2}>{content.text}</h2>}
                </div>
            ))}
        </div>
        <hr className={styles.hr}/>

        

        <section className={styles.related_article}>
            <h3 className={styles.related_article_h3}>Artikel Lainnya</h3>
            <p className={styles.related_article_p}>kami telah menyusun artikel terbaik berdasarkan topik minat Anda</p>

            <div className={styles.article_container}>
                {recomendation.map((article) => <ArticleCard key={article.id} props={article} />)}
            </div>
        </section>
        
        <FooterComponent />
    </>
  )
}
