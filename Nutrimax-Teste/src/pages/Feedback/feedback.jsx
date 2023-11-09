import React, { useState } from 'react';
import './feedback.css';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import starFulll from '../../assets/iconStar.svg';
import starVazia from '../../assets/iconStarVazia.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Feedback({ comments, setcomment, setfeedback }) {
  // const [redirect, setRedirect] = useState(0);
  const [newComment, setNewComment] = useState({
    description: "",
    rating: 0,
  });
  const [editIndex, setEditIndex] = useState(null);
  const [rating, setRating] = useState(0);

  const handleCommentChange = (event) => {
    setNewComment({
      ...newComment,
      description: event.target.value,
    });
  };

  const handleCommentSubmit = () => {
    if (newComment.description.trim() !== '') {
      if (editIndex !== null) {
        // Se estiver editando um comentário existente
        const updatedComments = [...comments];
        updatedComments[editIndex] = newComment;
        setcomment(updatedComments);
        setEditIndex(null);
      } else {
        // Se estiver adicionando um novo comentário
        setcomment([...comments, {...newComment, rating: rating}]);
        setfeedback(0);
      }

      setNewComment({
        description: "",
        rating: 0,
      });
    }
  };

  const handleEditComment = (index) => {
    setEditIndex(index);
    setNewComment(comments[index]);
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setcomment(updatedComments);
  };

  const handleStarClick = (star) => {
    setRating(star);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starIcon = i <= rating ? (
        <FontAwesomeIcon className='star starFull' icon={faStar} />
      ) : (
        <FontAwesomeIcon className='star starEmpty' icon={faStar} />
      );

      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          style={{ cursor: 'pointer' }}
        >
          {starIcon}
        </span>
      );
    }
    return stars;
  };

  return (<>
    <div className="containerAll">

      <div className="btn_fechar">
        <FontAwesomeIcon className='arrowLeft' icon={faArrowLeft} /><p onClick={() => setfeedback(0)}>Fechar</p>
      </div>

      <div className="title">
        <h1>Deixe seu <span>comentario</span></h1>
        <p>Escreva no input abaixo o seu feedback em relaação ao nosso site!!</p>
        <hr />
      </div>

      <div className="comment-input">

        <input value={newComment?.description} onChange={handleCommentChange} placeholder="Digite seu comentário..." />
        {/* <StarRating /> */}

        <div>
          <p>Avaliação: {rating} estrelas</p>
          <div>
            {renderStars()}
          </div>
        </div>

        <button className="SendBtn" onClick={handleCommentSubmit}>
          {editIndex !== null ? 'Salvar Edição' : 'Enviar'}
        </button>

      </div>
    </div>


  </>);


}
export default Feedback;
