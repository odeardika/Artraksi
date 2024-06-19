import React, { useState, useEffect } from 'react';
import Footer from "../../components/FooterComponent/FooterComponent";
import "./UserProfile.css"
import Header from '../../components/Header/Header';
import axios from 'axios';

export default function UserProfile() {

    const [activeTab, setActiveTab] = useState('artikel');
    const [user, setUser] = useState({});
    const [artikel, setArtikel] = useState([]);
    const [blog, setBlog] = useState([]);
    const [acara, setAcara] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/user/details`, {
            headers: {
                Authorization: JSON.parse(sessionStorage.getItem('token')),
            },
        }).then((response) => {
            console.log(response.data);
            setUser(response.data.user);
            setAcara(response.data.remainded_event);
            setArtikel(response.data.favorite_article);
        });
    }, []);

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
        <Header/>

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
                        <img src={`${import.meta.env.VITE_SERVER_URL}/${user.profile_img}`} alt="Foto Profil" className="img-thumbnail rounded-circle" />
                        <h5 className="mt-3">{user.username}</h5>
                        <p className="text-muted">{user.email}</p>
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
