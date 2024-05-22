import React from 'react';
import styles from "./ComunityInfoCard.module.css";
import icon1 from "../../assets/icon/info.svg";
import icon2 from "../../assets/icon/achieventment.svg";
import icon3 from "../../assets/icon/study.svg";

const list = [
    {title : "Tumbuhkan Percaya Diri", img : icon1, detail : "Lingkungan yang positif serta positif, memberanikan diri show off di depan umum"},
    {title : "Ajang Berkarya dan Kolaborasi", img : icon2, detail : "Berbagi passion dan bakat seni Anda dengan para pecinta seni, sekaligus menciptakan seni pertunjukan yang meriah"},
    {title : "Belajar Kesenian dari awal", img : icon3, detail : "Berlatih bersama dan belajar hal baru, cukup niat dan motivasi untuk bergabung bersama kamiarena semua orang di sini sama-sama belajar dan berkembang bersama."}]

export default function ComunityInfoCard({index}) {
    const data = list[index]
  return (
    <>
        <div className={styles.container}>
            <img src={data.img} alt="" />
            <div className={styles.container_info}>
                <h3 className={styles.title}>{data.title}</h3>
                <p className={styles.detail}>{data.detail}</p>
            </div>
        </div>
    </>
  )
}
