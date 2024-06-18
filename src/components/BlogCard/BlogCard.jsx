import React from 'react';
import styles from './BlogCard.module.css';
import likeIcon from '../../assets/icon/like/off.svg';
import commentIcon from '../../assets/icon/comment.svg';
import sendIcon from '../../assets/icon/send.svg';
import seenIcon from '../../assets/icon/seen.svg';


export default function BlogCard({props}) {
  
  return (
    <>
    <div className={styles.container}>
        <div className={styles.user_section}>
            <div className={styles.userprofile_container}>
                <img src={props.by[1]} alt="" className={styles.user_profile}/>
            </div>
            <h3 className={styles.user_username}>{props.by[0]}</h3>
            <div className={styles.follow}>ikuti</div>
        </div>

        <div className={styles.img_container}>
            <img src={props.img} alt="" />
        </div>

        <div className={styles.user_interaction}>
            <div className={styles.interaction_icon}>
                <div className={styles.left}>
                    <img className={styles.icon} src={likeIcon} alt="" />
                    <img className={styles.icon} src={commentIcon} alt="" />
                    <img className={styles.icon} src={sendIcon} alt="" />
                </div>
                <div className={styles.right}><img className={styles.icon} src={seenIcon} alt="" /> {100}</div>
            </div>
            <p className={styles.like}>{500} Suka</p>
        </div>

        <div className={styles.blog_detail}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.content}>{props.content[0].text}</p>
        </div>

        <div className={styles.footer}>
            <p className={styles.comment}>Lihat {5} komentar...</p>
            <p className={styles.next}>Selengkapnya <span className={styles.next_arrow}>{'->'}</span></p>
        </div>
    </div>
</>

  )
}
