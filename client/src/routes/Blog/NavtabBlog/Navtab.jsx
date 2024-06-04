import React from "react";
import Tabs from "./components/NavTab/Tabs";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BlogCard from "../../../components/BlogCard/BlogCard";
import blog0 from "../../../assets/blog/0.png";
import blog1 from "../../../assets/blog/1.png";
import blog2 from "../../../assets/blog/2.png";
import user0 from "../../../assets/user/0.png";
import user1 from "../../../assets/user/1.png";
import user2 from "../../../assets/user/2.png";
import styles from "./Navtab.module.css";

const blog = [
    {
        id : 0,
        by : ["Alan Garza", user0],
        title : "Pengalaman Menonton Pertunjukan Wayang Kulit di Yogyakarta",
        img : blog0,
        content : [
        {
            text : "Halo pembaca setia! Kali ini saya ingin berbagi pengalaman yang tak terlupakan saat menonton pertunjukan wayang kulit di Yogyakarta. Sebagai penggemar budaya Jawa, kesempatan ini adalah mimpi yang menjadi kenyataan.",
            type : "p"
        }
        ]
    },
    {
        id : 1,
        by : ["Stephen Matthews", user1],
        title : "Pengalaman Menonton Pertunjukan Wayang Kulit di Yogyakarta",
        img : blog1,
        content : [
        {
            text : "Halo pembaca setia! Kali ini saya ingin berbagi pengalaman yang tak terlupakan saat menonton pertunjukan wayang kulit di Yogyakarta. Sebagai penggemar budaya Jawa, kesempatan ini adalah mimpi yang menjadi kenyataan.",
            type : "p"
        }
        ]
    },
    {
        id : 2,
        by : ["Bob Alexander", user2],
        title : "Pengalaman Menonton Pertunjukan Wayang Kulit di Yogyakarta",
        img : blog2,
        content : [
        {
            text : "Halo pembaca setia! Kali ini saya ingin berbagi pengalaman yang tak terlupakan saat menonton pertunjukan wayang kulit di Yogyakarta. Sebagai penggemar budaya Jawa, kesempatan ini adalah mimpi yang menjadi kenyataan.",
            type : "p"
        }
        ]
    },
    ]

function Navtab() {

    return (
        <section className={styles.blog_section}>
            <Tabs>
                <div label="Untukmu">
                    <Row className="card_container">
                        {blog.map(blogItem => (
                            <Col key={blogItem}>
                            <BlogCard key={blogItem.id} props={blogItem}/>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div label="Diikuti">
                    <Row className="card_container">
                        {blog.map(blogItem => (
                            <Col key={blogItem}>
                            <BlogCard key={blogItem.id} props={blogItem}/>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div label="Tag">
                    <Row className="card_container">
                        {blog.map(blogItem => (
                            <Col className="wadah" key={blogItem}>
                            <BlogCard key={blogItem.id} props={blogItem}/>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Tabs>
        </section>
    );
}

export default Navtab;