import React, { useState } from 'react';
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import BlogCard from '../../components/BlogCard/BlogCard';
import Footer from "../../components/FooterComponent/FooterComponent";
import styles from "./UserProfile.module.css";
import "./UserProfile.css"
import { Row } from 'react-bootstrap';

export default function UserProfile() {

    const [activeTab, setActiveTab] = useState('artikel');
    const [artikel, setArtikel] = useState([
        {
        id: 1,
        judul: 'Tari Incling: Gemerlap Tradisi dan Dinamika Budaya',
        isi: 'Tari Incling adalah salah satu tarian tradisional yang berasal dari Yogyakarta, dikenal karena keunikannya yang mencerminkan dinamika dan...',
        },
        {
        id: 2,
        judul: 'Menjelajahi Keindahan Alam Bromo Tengger Semeru',
        isi: 'Gunung Bromo Tengger Semeru adalah salah satu destinasi wisata alam yang paling populer di Indonesia...',
        },
    ]);
    const [blog, setBlog] = useState([
        {
        id: 1,
        judul: 'Tips Memasak Nasi Goreng yang Lezat dan Mudah',
        isi: 'Nasi goreng adalah salah satu makanan favorit masyarakat Indonesia...',
        },
        {
        id: 2,
        judul: '5 Film Indonesia Terbaik Sepanjang Masa',
        isi: 'Indonesia memiliki banyak film berkualitas yang patut ditonton...',
        },
        {
        id: 3,
        judul: 'Mengapa Bumi Tidak Berbentuk Donat',
        isi: 'jelaslah bahwa Bumi tidak berbentuk donat. Bentuk Bumi yang sebenarnya adalah bulat pipih atau oblate spheroid, yang disebabkan oleh gaya gravitasi dan rotasi Bumi...',
        },
    ]);
    const [acara, setAcara] = useState([
        {
        id: 1,
        judul: 'Konser Musik Indie di Yogyakarta',
        tanggal: '2024-06-15',
        tempat: 'Jalan Malioboro, Yogyakarta',
        },
        {
        id: 2,
        judul: 'Seminar Penting tentang Kewirausahaan',
        tanggal: '2024-06-20',
        tempat: 'Universitas Gadjah Mada, Yogyakarta',
        },
        {
        id: 3,
        judul: 'Seminar parenting keluarga superhero',
        tanggal: '2027-06-20',
        tempat: 'Bumi',
        },
    ]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        switch (activeTab) {
        case 'artikel':
            return (
            <div className="artikel">
                {artikel.map((artikel) => (
                <div key={artikel.id} className="artikel-item">
                    <h3>{artikel.judul}</h3>
                    <p>{artikel.isi}</p>
                </div>
                ))}
            </div>
            );
        case 'blog':
            return (
            <div className="blog">
            {blog.map((blog) => (
            <div key={blog.id} className="blog-item">
                <h3>{blog.judul}</h3>
                <p>{blog.isi}</p>
            </div>
            ))}
            </div>
            );
        case 'acara':
            return (
            <div className="acara">
            {acara.map((acara) => (
            <div key={acara.id} className="acara-item">
                <h3>{acara.judul}</h3>
                <p>Tanggal: {acara.tanggal}</p>
                <p>Tempat: {acara.tempat}</p>
            </div>
            ))}
            </div>
            );
        default:
            return null;
        }
    };

    return (
        <>
        {/* header with backgroud */}
        <header className={styles.header_blog}>
            <nav className={styles.header_navbar}>
            <HeaderNavbar/>
            </nav>
        </header>

        {/*main*/}
        <div className="row">
            <div className="col-lg-8">
                <div className="main">
                <h2>Nama Pengguna</h2>            
                <ul className="navtabmain">
                    <li >
                        <a className={activeTab === 'artikel' ? 'active' : ''} href="#" onClick={(e) => handleTabClick('artikel', e)}>artikel</a>
                    </li>
                    <li >
                        <a className={activeTab === 'blog' ? 'active' : ''} href="#" onClick={(e) => handleTabClick('blog', e)}>blog</a>
                    </li>
                    <li >
                        <a className={activeTab === 'acara' ? 'active' : ''} href="#" onClick={(e) => handleTabClick('acara', e)}>acara</a>
                    </li>
                </ul>
                {renderContent()}
                </div>
            </div>    

            {/*side right*/}
            <div className="col-lg-4">
                <div className="card">
                    <div className="text-center">
                        <img src="https://placehold.co/150x150" alt="Foto Profil" className="img-thumbnail rounded-circle" />
                        <h5 className="mt-3">Nama Pengguna</h5>
                        <p className="text-muted">example@email.com</p>
                        <button className="btn btn-danger btn-block mt-4">Keluar</button>
                    </div>
                </div>
            </div>
        </div>

        {/* footer pages */}
        <footer>
            <Footer/>
        </footer>
        </>
    )
}
