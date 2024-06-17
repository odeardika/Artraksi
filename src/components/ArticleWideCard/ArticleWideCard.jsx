import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ArticleWideCard.module.css';
import seenIcon from '../../assets/icon/seen.svg';
import commentIcon from '../../assets/icon/comment.svg';
import sendIcon from '../../assets/icon/send.svg';
import likeIconOff from '../../assets/icon/like/off.svg';
import likeIconOn from '../../assets/icon/like/on.svg';
import axios from 'axios';

export default function ArticleWideCard({props}) {
    const serverURL = import.meta.env.VITE_SERVER_URL;
    const href = `${import.meta.env.VITE_WEBSITE_URL}/artikel/${props.id}`;
    const [isFavorite, setIsFavorite] = React.useState(true);
    const navigate = useNavigate();

    React.useEffect(() => {
        //* check if user logined
        if(!JSON.parse(sessionStorage.getItem('token'))) return setIsFavorite(false);


        //* check if user like the article
        axios.get(`${serverURL}/articles/favorite/check/${props.id}`, {
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
            axios.delete(`${serverURL}/articles/favorite/${props.id}`, {
                headers: {
                    Authorization: JSON.parse(sessionStorage.getItem('token'))
                }
            })

            //* update current like state
            .then((response) => {
                setIsFavorite(false);
            })
            
        }else{
            //* send the request to server and save like into database
            axios.post(`${serverURL}/articles/favorite`, {
                article_id: props.id
            }, {
                headers: {
                    Authorization: JSON.parse(sessionStorage.getItem('token'))
                }
            })
            
            //* update current like state
            .then((response) => {
                setIsFavorite(true);
            })
            

        }
    }
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
                    <img className={styles.like} src={isFavorite ? likeIconOn : likeIconOff} onClick={handleFavorite} alt="like icon" />
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
