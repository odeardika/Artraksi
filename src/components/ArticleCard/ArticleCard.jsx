import React from 'react';
import styles from './ArticleCard.module.css';

export default function ArticleCard({props}) {
  return (
    <>
    <div>
        <div className={styles.img_container}>
            <img src={`${import.meta.env.VITE_SERVER_URL}/${props.thumbnail_img}`} alt="" />
        </div>
        <div className={styles.author_detail}>
            <img src={`${import.meta.env.VITE_SERVER_URL}/${props.creator_profile}`} className={styles.author_img} alt="" />
            <p className={styles.author_text}>By {props.creator_name}  | {props.upload_date}</p>
        </div>
        <div className={styles.article_detail}>
            <h3>{props.title}</h3>
            <p>{props.preview}</p>
            <div>Selengkapnya <span>{'->'}</span></div>
        </div>
    </div>
</>

  )
}
