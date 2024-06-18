import React from 'react';
import { Container, Row,Col } from "react-bootstrap";
import './main.css';
import user1 from "../../assets/blog/user-1.png";
import user2 from "../../assets/blog/user-2.png";
import user3 from "../../assets/blog/user-3.png";
import user4 from "../../assets/blog/user-4.png";
import user5 from "../../assets/blog/user-5.png";

const comments = [
  {
    id: 1,
    name: 'Stephen Matthews',
    comment: 'Wah, jadi ingin coba nonton juga. Terima kasih untuk tipsnya!',
    likes: 100,
    image: user2,
  },
  {
    id: 2,
    name: 'Alan Garza',
    comment: 'Silahkan di coba untuk menonton.',
    likes: 100,
    image: user3,
  },
  {
    id: 3,
    name: 'Kathy Rogers',
    comment: 'Cerita yang sangat keren! Pengalaman yang sangat menginspirasi.',
    likes: 100,
    image: user4,
  },
  {
    id: 4,
    name: 'Bob Alexander',
    comment: 'Saya pernah nonton sekali, dan itu memang luar biasa.',
    likes: 100,
    image: user5,
  }
];

const CommentSection = () => {
  return (
    <div className='comment-section'>
        <Container>
            <Row>
                <Col>
                
              
      <div className='comment-input'>
        <img src={user1} alt='User' />
        <input type='text' placeholder='Tambahkan komentar' />
        <button type='submit'>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
          </svg>
        </button>
      </div>
      <div className='comments'>
        {comments.map(comment => (
          <div key={comment.id} className='comment'>
            <img src={comment.image} alt={comment.name} />
            <div className='comment-content'>
              <div className='comment-header'>
                <h4>{comment.name}</h4>
              </div>
              <p>{comment.comment}</p>
              <div className='comment-footer'>
                <span>{comment.likes} likes</span>
                <span>reply</span>
                <span>show reply</span>
              </div>
            </div>
            <div className='comment-like'>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
        
                 </Col>
            </Row>
        </Container>
    </div>
  );
}

export default CommentSection;
