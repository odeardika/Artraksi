import React from 'react';
import styles from './ArticleCard.module.css';
import img from './../../assets/article/0.png';
import userIcon from '../../assets/icon/Avatar.svg';

export default function ArticleCard() {
  return (
    <>
    <div>
        <div className={styles.img_container}>
            <img src={img} alt="" />
        </div>
        <div className={styles.author_detail}>
            <img src={userIcon} className={styles.author_img} alt="" />
            <p className={styles.author_text}>By Tim Artraksi  | 22 jam lalu</p>
        </div>
        <div className={styles.article_detail}>
          <h3>Tari Bedhaya: Keanggunan Sakral dari Keraton Yogyakarta</h3>
          <p>Tari Bedhaya adalah salah satu bentuk tarian klasik Jawa yang berasal dari Keraton...</p>
          <div>Selengkapnya <span>{'->'}</span></div>
        </div>
    </div>
    </>
  )
}
