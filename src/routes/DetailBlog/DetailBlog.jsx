import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Header from '../../components/Header/Header';
import FooterComponent from '../../components/FooterComponent/FooterComponent';
import "./main.css"
import BlogCard from '../../components/BlogCard/BlogCard';
import axios from 'axios';



const DetailBlog = () => {
  const [data, setData] = React.useState({});
  const [contents, setContents] = React.useState([]);
  const [otherBlogs, setOtherBlogs] = React.useState([]);
  const { id } = useParams();

  React.useEffect(() => {
  axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/detail/${id}`).then((response) => {
    setData(response.data);
    setContents(response.data.contents);
  })

  axios.get(`${import.meta.env.VITE_SERVER_URL}/blog/others/${id}`).then((response) => {
    console.log(response.data);
    setOtherBlogs(response.data);
  })

  }, []);


  return (
    <div className='detail'>
      <Header />
        <div className='user w-100 min-vh-50'>
         <Container>
            <Row>
            <Col>
              <div className='profil pt-5 px-2'>
                <img src={`${import.meta.env.VITE_SERVER_URL}/${data.creator_profile}`} alt={`user profile`} className="profil-image" />
              <div className="profil-info">
              <div className="profil-name">
                <p>{data.creator_name}</p>
              </div>
                  <p className="profil-status">{`Penulis Blog`}</p>
              </div>
              </div>
            </Col>
             </Row>
        </Container>
        </div>
        <div className=' hero w-100  pt-2'>
            <Container>
                <Row >
                    <Col>
                    <img src={`${import.meta.env.VITE_SERVER_URL}/${data.thumbnail_img}`} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="desk w-100 min-vh-100">
            <Container>
                <Row>
                    <Col className='pb-3'>
                      <h1 className='title'>{data.title}</h1>
                      {contents.map((data) => {
                        return (
                          <p key={data.id} className='paragraph'>{data.text}</p>
                        )
                      })}

                    </Col>
                </Row>
            </Container>
        </div>
        
        {/* comentsection */}
        <div className='py-4'> 
        {/* <CommentSection /> */}
        </div >
        <div className='blog-container w-100 min-vh-100' >
          <div>
            <div className=' text-center py-5'>
              <h1>Blog Lainya</h1>
              <p className='pt-3'>Berikut merupakan rekomendasi Blog untuk anda</p>
            </div>
        
            <div className='other-card-container'>
              {otherBlogs.map((data) => {
                return (
                  <BlogCard key={data.id} props={data} />
                )
              })}
            </div>

          </div>
        </div>
        

      <FooterComponent />
    </div>
  )}
export default DetailBlog