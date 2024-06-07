import React from 'react';
import styles from './ArticleWideCard.module.css';
import seenIcon from '../../assets/icon/seen.svg';
import commentIcon from '../../assets/icon/comment.svg';
import likeIcon from '../../assets/icon/like.svg';
import sendIcon from '../../assets/icon/send.svg';

export default function ArticleWideCard({props}) {
    const serverURL = import.meta.env.VITE_SERVER_URL;
    const href = `${import.meta.env.VITE_WEBSITE_URL}/artikel/${props.id}`;
  return (
    <>
        <article className={styles.container}>
            <div>
                <a href={href}><img src={`${serverURL}/${props.thumbnail_img}`} className={styles.thumbnail_img} alt={`${props.title} image`} /></a>
            </div>
            <div>
                <div className={styles.detail}>
                    <div className={styles.property}>
                        <a href={href}>
                            <h3>{props.title}</h3>
                            <p>{props.preview}</p>
                        </a>
                    </div>
                    <img src={likeIcon} alt="like icon" />
                </div>
                <div className={styles.more_detail}>
                    <label>{props.upload_date}</label>
                    <div>
                        <div><img src={seenIcon} alt="seen icon" />{props.views}</div>
                        <div><img src={commentIcon} alt="comment icon" />{0}</div>
                        <img src={sendIcon} alt="send icon" />
                    </div>
                </div>
            </div>
        </article>

    </>
  )
}
