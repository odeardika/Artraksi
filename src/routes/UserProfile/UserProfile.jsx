import React, { useState, useEffect } from 'react';
import Footer from "../../components/FooterComponent/FooterComponent";
import ArticleWideCard from '../../components/ArticleWideCard/ArticleWideCard';
import "./UserProfile.css"
import Header from '../../components/Header/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {

    const [activeTab, setActiveTab] = useState('artikel');
    const [user, setUser] = useState({});
    const [artikel, setArtikel] = useState([]);
    const [blog, setBlog] = useState([]);
    const [acara, setAcara] = useState([]);
    const [isProfileHover, setIsProfileHover] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if(!JSON.parse(sessionStorage.getItem('token'))) return navigate('/login');
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
                    <ArticleWideCard key={artikel.id} props={artikel} customClass={"artikel-item"}/>
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
            <div className="event">
            {acara.map((props) => (
                <div className="event-container-card" key={props.id}>
                    <img src={`${import.meta.env.VITE_SERVER_URL}/${props.event_thumbnail}`} alt={`${props.title} image`} className=""/>
                    <div className="event-detail">
                        <h5 className="">{props.title}</h5>
                        <p>{props.event_date} - Selesai</p>
                        <p>{props.event_location_detail} | {props.event_location} </p>
                    </div>
                    <a className="next" href={`${import.meta.env.VITE_WEBSITE_URL}/acara/${props.id}`}>
                        Selengkapnya 
                        <span className="next_arrow">
                        {"->"}
                        </span>
                    </a>
                </div>
            ))}
            </div>
            );
        default:
            return null;
        }
    };

    const handleUploadProfileImage = (event) => {
        
        console.log(event.target.files[0]);
        axios.putForm(`${import.meta.env.VITE_SERVER_URL}/user/profile`, {
            'file' : event.target.files[0]
        },{
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: JSON.parse(sessionStorage.getItem('token')),
            },
        }).then((response) => {
            console.log(response.data);
        })
    };

    const handleProfileMouseLeave = () => {
        setIsProfileHover(false);
    } 
    const handleProfileMouseEnter = () => {
        setIsProfileHover(true);
    }

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        navigate('/');
        
    }

    return (
        <>
        {/* header with backgroud */}
        <Header/>

        {/*main*/}
        <div className="profile-container">
            <div className="col-lg-8">
                <div className="main">
                <h2>{user.username}</h2>            
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
                {/* {activeTab === 'artikel' && artikel.map((artikel) => (
                    <ArticleWideCard key={artikel.id} props={artikel}/>
                ))} */}
                {renderContent()}
                </div>
            </div>    
            

            {/*side right*/}
            <div className="col-lg-4">
                <div className="card">
                    <div className="text-center">
                        <div className='edit-profile' onMouseEnter={handleProfileMouseEnter} onMouseLeave={handleProfileMouseLeave}>
                            <img className={`img-thumbnail rounded-circle ${isProfileHover ? 'profile-hover' : ''}`} src={`${import.meta.env.VITE_SERVER_URL}/${user.profile_img}`} alt="Foto Profil"  />
                            {isProfileHover && <label htmlFor={`file-input`} >Upload</label>}
                            <input id="file-input" name='file' type="file" placeholder='' onInput={handleUploadProfileImage} hidden />
                        </div>

                        <h5 className="mt-3">{user.username}</h5>
                        <p className="text-muted">{user.email}</p>
                        {/* //TODO logout user  */}
                        <button className="btn btn-danger btn-block mt-4" onClick={handleLogout}>Keluar</button>
                    </div>
                </div>
            </div>
        </div>

        {/* footer pages */}
            <Footer/>
        </>
    )
}
