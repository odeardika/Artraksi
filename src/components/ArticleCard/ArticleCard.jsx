import React from 'react';
import styles from './ArticleCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function ArticleCard({props}) {
    const navigate = useNavigate();
  return (
    <>
    <div>
        <div className={styles.img_container}>
            <img src={`${import.meta.env.VITE_SERVER_URL}/${props.thumbnail_img}`} alt="thumbnail" />
        </div>
        <div className={styles.author_detail}>
            <img src={`${import.meta.env.VITE_SERVER_URL}/assets/users/default.png`} className={styles.author_img} alt="author" />
            <p className={styles.author_text}>By {props.creator_name}  | {props.upload_date}</p>
        </div>
        <div className={styles.article_detail}>
            <h3>{props.title}</h3>
            <p>{props.preview}</p>
            <a className={styles.next} onClick={() => navigate(`/artikel/${props.id}`)} href={``}>Selengkapnya <span className={styles.next_arrow}>{"->"}</span></a>
        </div>
    </div>
</>

  )
}
