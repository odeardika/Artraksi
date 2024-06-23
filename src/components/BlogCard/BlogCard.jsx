import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BlogCard.module.css';
import likeIconOff from '../../assets/icon/like/off.svg';
import likeIconOn from '../../assets/icon/like/on.svg';
import commentIcon from '../../assets/icon/comment.svg';
import sendIcon from '../../assets/icon/send.svg';
import seenIcon from '../../assets/icon/seen.svg';
import Selengkapnya from '../../components/NextButton/Selengkapnya/Selengkapnya';
import axios from 'axios';

export default function BlogCard({props , customClass}) {
    const [isFavorite, setIsFavorite] = React.useState(false);
    const [likes, setLikes] = React.useState(props.likes);

    const navigate = useNavigate();

    React.useEffect(() => {
        //* check if user logined
        if(!JSON.parse(sessionStorage.getItem('token'))) return setIsFavorite(false);


        //* check if user like the blog
        axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/like/check/${props.id}`, {
            headers: {
                Authorization: JSON.parse(sessionStorage.getItem('token'))
            }
        })
        
        //* set like icon
        .then((response) => {
            setIsFavorite(response.data.is_favorite);
        })

    }, []);

    const handleFavorite = () => {
        //* check if user logined
        if(!JSON.parse(sessionStorage.getItem('token'))) return navigate('/login');
        
        //* check the currect like state
        if(isFavorite) {
            //* send the request to server and delete like from database
            axios.delete(`${import.meta.env.VITE_SERVER_URL}/blog/like/${props.id}`, {
                headers: {
                    Authorization: JSON.parse(sessionStorage.getItem('token'))
                }
            })

            //* update current like state
            .then((response) => {
                setIsFavorite(false);
                setLikes(likes - 1);
            })
            
        }else{
            //* send the request to server and save like into database
            axios.post(`${import.meta.env.VITE_SERVER_URL}/blog/like`, {
                blog_id: props.id
            }, {
                headers: {
                    Authorization: JSON.parse(sessionStorage.getItem('token'))
                }
            })
            
            //* update current like state
            .then((response) => {
                setIsFavorite(true);
                setLikes(likes + 1);
            })
            

        }
    }

  return (
    <>
    <div className={`${styles.container} ${customClass}`}>
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
                    <img className={styles.like} src={isFavorite ? likeIconOn : likeIconOff} onClick={handleFavorite} alt="like icon" />
                    <img className={styles.icon} src={commentIcon} alt="" />
                    <img className={styles.icon} src={sendIcon} alt="" />
                </div>
                <div className={styles.right}><img className={styles.icon} src={seenIcon} alt="" /> {props.views}</div>
            </div>
            <p className={styles.like}>{likes} Suka</p>
        </div>

        <div className={styles.blog_detail}>
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.content}>{props.preview}</p>
        </div>

        <div className={styles.footer}>
            <Selengkapnya href={`/blog/${props.id}`} customStyles={styles.next}/>
        </div>
    </div>
</>

  )
}
