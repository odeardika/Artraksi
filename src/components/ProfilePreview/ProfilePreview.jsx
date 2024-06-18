import React from 'react';
import styles from './ProfilePreview.module.css';
import { useNavigate } from 'react-router-dom';

export default function ProfilePreview({img}) {
    const navigate = useNavigate();
    return (
    <>
        <div className={styles.container}>
            <img className={styles.profile} src={img} alt="profile image" onClick={() => navigate('/profile')}/>
        </div>
    </>
  )
}
