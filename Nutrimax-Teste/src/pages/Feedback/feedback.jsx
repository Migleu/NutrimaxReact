import React, { useState } from 'react';
import './feedback.css';
import Navbar from '../NavBar/navbar';

function Feedback() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <>
      <Navbar/>
    <div className="container-all">
      <div className="comment-input">
        <input
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Digite seu comentário..."
        />
        <button onClick={handleCommentSubmit}>Enviar</button>
      </div>

      <div className="feedbacksComent">
        <h2>Comentários</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Feedback;
