import React from 'react';
import styles from './FeedbackCard.module.css';
import full from '../../assets/icon/star/full.svg';
import half from '../../assets/icon/star/half.svg';
import empty from '../../assets/icon/star/empty.svg';


const Rate = (rate) => {
    const star = []
    let emptyStar;
    for (let i = 1; i <= rate ; i++){
        star.push(full)
        if(rate - i === 0.5){
            star.push(half)
            emptyStar = 5 - (rate + 0.5)
        }
    }
    for (let i = 0; i < emptyStar ; i++){
        star.push(empty)
    }
    return star;
}

export default function FeedbackCard({rate, props}) {
    const stars = Rate(rate);
  return (
    <>
      <div className={styles.card}>
        <p className={styles.content}>{props.content}</p>
        <div className={styles.user_info}>
          <div className={styles.img_container}>
            <img src={props.img} alt="" className={styles.user_profile} />
          </div>
          <div>
            <h4 className={styles.username}>{props.username}</h4>
            <div className={styles.rate}>
              {stars.map((star, index) => <img key={index} src={star} alt='' />)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
