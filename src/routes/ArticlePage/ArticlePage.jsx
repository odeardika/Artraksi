import React, { useState, useEffect } from 'react';
import styles from './ArticlePage.module.css';
import Header from '../../components/Header/Header';
import axios from 'axios';
import Selengkapnya from '../../components/NextButton/Selengkapnya/Selengkapnya';
import SearchBar from '../../components/SearchBar/SearchBar';
import ArticleWideCard from '../../components/ArticleWideCard/ArticleWideCard';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import FooterComponent from '../../components/FooterComponent/FooterComponent';


export default function ArticlePage() {
  const [favoriteArticle, setFavoriteArticle] = useState([]);
  const [listArticle, setListArticle] = useState([]);
  const [trendingArticles, setTrendingArticles] = useState([]);

  const serverURL = import.meta.env.VITE_SERVER_URL;
  const websiteURL = import.meta.env.VITE_WEBSITE_URL;

  useEffect(() => {
    axios.get(`${serverURL}/articles/most-liked`)
    .then(response => {
      setFavoriteArticle(response.data);
    });
    
    axios.get(`${serverURL}/articles/new/3`)
    .then(response => {
      setListArticle(response.data);
    });

    axios.get(`${serverURL}/articles/trending`)
    .then(response => {
      setTrendingArticles(response.data)
    })

  }, []);

  //* HANDLE SEARCH
  const handleSearch = (searchInput) => {
    //TODO get article based on search input
    axios.get(`${serverURL}/articles/search?search=${searchInput}`)
    
    //TODO save the result article to the state variable
    .then((response) => {
      setListArticle(response.data)
    })
  };

  return (
    <>
      <Header />
      <div className={styles.favorite_container}>
        <div className={styles.favorite_img_container}>
          <img className={styles.favorite_img} src={`${serverURL}/${favoriteArticle.thumbnail_img}`} alt={`${favoriteArticle.title}'s image`} />
        </div>
        <div className={styles.favorite_detail_container}>
          <h3>Paling disukai</h3>
          <h2>{favoriteArticle.title}</h2>
          <p>{favoriteArticle.preview}</p>
          <Selengkapnya href={`${websiteURL}/artikel/${favoriteArticle.id}`} customStyles={styles.favorite_next} />
        </div>
      </div>
      <section className={styles.newest_container}>
        <div className={styles.search_container}>
          <h2>Artikel Terbaru</h2>
          <SearchBar handleSearch={handleSearch}/>
        </div>
        {(listArticle.length > 0)? (
          <div className={styles.newest_article_container}>
          {listArticle.map((article, index) => <ArticleWideCard key={index} props={article} />)}
        </div>
        ) : (
          <div className={styles.newest_article_container}>
            <p className={styles.no_article}>Artikel tidak ditemukan</p>
          </div>
        )}
      </section>
      <section className={styles.tranding_container}>
        <h2>Trending Artikel</h2>
        <div className={styles.trending_article_container}>
          {trendingArticles.map(article => <ArticleCard key={article.id} props={article} />)}
        </div>
      </section>

      <FooterComponent />
      
    </>
  )
}
