import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from "./Blog.module.css";
import HeaderNavbar from "../../components/HeaderNavbar/HeaderNavbar";
import Navtab from "../Blog/NavtabBlog/Navtab";
import BlogCard from "../../components/BlogCard/BlogCard";
import Footer from "../../components/FooterComponent";

export default function BlogPage() {
    return (
        <>
        {/* header with backgroud */}
        <header className={styles.header_blog}>
            <nav className={styles.header_navbar}>
            <HeaderNavbar/>
            </nav>
        </header>

        {/* Blog Page  */}
        <Navtab/>
        
        {/* footer pages */}
        <footer>
            <Footer/>
        </footer>
        </>
    )
}
