import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { ProfilUser } from './index';
import "./main.css"
// import hero1 from "../../assets/blog/hero.png"
import CommentSection from './ComentSection.jsx';
import { BlogDetail } from './index';



const DetailBlog = () => {
  return (
    <div className='detail'>
        <div className='user w-100 min-vh-50'>
         <Container>
            <Row>
         {ProfilUser.map((data) => (
            <Col key={data.id}>
              <div className='profil pt-5 px-2'>
                <img src={data.image} alt={data.user} className="profil-image" />
              <div className="profil-info">
              <div className="profil-name">
                <p>{data.user}</p>
                <p className="profil-follow">{data.follow}</p>
              </div>
                  <p className="profil-status">{data.status}</p>
              </div>
              </div>
            </Col>
          ))}
             </Row>
        </Container>
        </div>
        <div className=' hero w-100  pt-2'>
            <Container>
                <Row >
                    <Col>
                    {/* <img src={hero1} alt="" /> */}
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="desk w-100 min-vh-100">
            <Container>
                <Row>
                    <Col className='pb-3'><h1>Pengalaman Menonton Pertunjukan Wayang Kulit di Yogyakarta</h1>
              <p>Halo pembaca setia! Kali ini saya ingin berbagi pengalaman yang tak terlupakan saat menonton pertunjukan wayang kulit di Yogyakarta. Sebagai penggemar budaya Jawa, kesempatan ini adalah mimpi yang menjadi kenyataan.</p>
              <p>Pada hari Sabtu malam, saya dan teman-teman memutuskan untuk menonton wayang kulit di Pura Pakualaman. Pertunjukan ini cukup populer, jadi kami memesan tiket beberapa minggu sebelumnya. Pertunjukan ini mulai pukul 10 malam, dengan harapan bisa menikmati suasana malam Yogyakarta sebelum pertunjukan dimulai.</p>
              <p>Setibanya di lokasi, suasana sudah sangat ramai. Banyak penonton, baik wisatawan lokal maupun asing, yang antusias menunggu pertunjukan dimulai. Kami duduk di tempat yang cukup strategis, dekat dengan layar besar yang akan memperjelas visualisasi bayangan wayang.</p>
              <p>Pertunjukan dimulai dengan iringan gamelan yang magis, membawa kami masuk ke dalam cerita. Dalang memainkan setiap karakter dengan apik dan penuh penjiwaan. Malam itu, cerita yang ditampilkan adalah bagian dari Mahabharata, yang menampilkan perjuangan Pandawa melawan Kurawa.</p>
              <p>Saya sangat terkesan adalah detail dan keindahan wayang kulit itu sendiri. Menikmati wayang kulit adalah lebih dari sekadar hiburan. Dialog begitu kaya akan filosofi kehidupan dan budaya Jawa. Malam itu benar-benar menjadi pengalaman yang mendalam dan mendidik.</p>
              <p>Salah satu hal yang menarik adalah interaksi antara dalang dan penonton. Sesekali dalang menyisipkan humor yang membuat suasana menjadi lebih ceria dan penonton tertawa. Bahkan, ada beberapa penonton yang diberikan kesempatan untuk naik ke panggung untuk mencoba memainkan wayang. Ini semua menjadi pengalaman yang unik dan menyenangkan.</p>
              <p>Malam itu benar-benar membuat saya akan kekayaan budaya Indonesia, khususnya Yogyakarta. Wayang kulit bukan hanya sebuah pertunjukan, tetapi juga warisan budaya yang harus terus dilestarikan. Bagi kalian yang belum pernah menonton, saya sangat merekomendasikan untuk merasakan sendiri magisnya wayang kulit di Yogyakarta.</p>
                    </Col>
                </Row>
            </Container>
        </div>
        
        {/* comentsection */}
        <div className='py-4'> 
        <CommentSection />
        </div >
        <div className='blog w-100 min-vh-100' >
          <Container>
            <Row>
              <Col className=' text-center py-5'>
                <h1>Blog Lainya</h1>
                <p className='pt-3'>Berikut merupakan rekomendasi Blog untuk anda</p>
              </Col>
            </Row>

            <Row >
            {BlogDetail.map((data) => {
              return (
                <Col key={data.id} className='shadow rounded-3 mb-5'>
                  <div className='profils py-2 px-2'>
                    <img src={data.profil} alt='' />
                    <div>
                      <p className='mb-1'>{data.name}</p>
                    </div>
                    <div>
                      <p className='mb-1 text-primary'>{data.status}</p>
                    </div>
                  </div>
                  <img src={data.image} alt='' className='potos mb-2' />
                  <div className='iconbetwen d-flex justify-content-between align-items-center px-2'>
                    <div className='icons'>
                      <i className={data.icon1}></i>
                      <div>
                        <i className={data.icon2}></i>
                      </div>
                      <div>
                        <i className={data.icon3}></i>
                      </div>
                    </div>
                    <i className='fa-solid fa-eye'></i>
                    <span className='ms-2'>769</span>
                  </div>
                  <p className='pembaca py-0 px-2'>{data.pembaca}</p>
                  <h5 className='titles py-0 px-2'>{data.title}</h5>
                  <p className='desk mb-4 px-2'>{data.desk}</p>
                  <div className='px-2 d-flex justify-content-between align-items-center'>
                    <p>{data.komentar}</p>
                    <button className='btn btn-transparent btn-custom mb-3'>
                      {data.button}
                      <i className='fa-solid fa-arrow-right ms-2'></i>
                    </button>
                  </div>

                  
                </Col>
              );
            })}
          </Row>

          </Container>
        </div>
        

    </div>






        )
                        }
export default DetailBlog