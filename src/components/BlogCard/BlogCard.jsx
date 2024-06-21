import React from 'react';
import styles from './BlogCard.module.css';
import likeIcon from '../../assets/icon/like/off.svg';
import commentIcon from '../../assets/icon/comment.svg';
import sendIcon from '../../assets/icon/send.svg';
import seenIcon from '../../assets/icon/seen.svg';
import Selengkapnya from '../../components/NextButton/Selengkapnya/Selengkapnya';


export default function BlogCard({props}) {
  
  return (
    <>
    <div className={styles.container}>
        <div className={styles.user_section}>
            <div className={styles.userprofile_container}>
                <img src={`${import.meta.env.VITE_SERVER_URL}/${props.creator_profile}`} alt="user profile" className={styles.user_profile}/>
            </div>
            <h3 className={styles.user_username}>{props.creator_name}</h3>
            
        </div>

        <div className={styles.img_container}>
            <img src={`${import.meta.env.VITE_SERVER_URL}/${props.thumbnail_img}`} alt="" />
        </div>

        <div className={styles.user_interaction}>
            <div className={styles.interaction_icon}>
                <div className={styles.left}>
                    <img className={styles.icon} src={likeIcon} alt="" />
                    <img className={styles.icon} src={commentIcon} alt="" />
                    <img className={styles.icon} src={sendIcon} alt="" />
                </div>
                <div className={styles.right}><img className={styles.icon} src={seenIcon} alt="" /> {props.views}</div>
            </div>
            <p className={styles.like}>{props.likes} Suka</p>
        </div>

        <div className={styles.blog_detail}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.content}>{props.preview}</p>
        </div>

        <div className={styles.footer}>
            <Selengkapnya href={`${import.meta.env.VITE_WEBSITE_URL}/blog/${props.id}`} customStyles={styles.next}/>
        </div>
    </div>
</>

  )
}
