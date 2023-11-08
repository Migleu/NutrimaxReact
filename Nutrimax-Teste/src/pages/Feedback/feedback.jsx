import React, { useState } from 'react';
import StarRating from '../Estrelas/starRating';
import './feedback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function Feedback({ comments, setcomment, setfeedback }) {
  // const [redirect, setRedirect] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [editIndex, setEditIndex] = useState(null);


  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim() !== '') {
      if (editIndex !== null) {
        // Se estiver editando um comentário existente
        const updatedComments = [...comments];
        updatedComments[editIndex] = newComment;
        setcomment(updatedComments);
        setEditIndex(null);
      } else {
        // Se estiver adicionando um novo comentário
        setfeedback(0);
        setcomment([...comments, newComment]);
      }
      setNewComment('');
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

        <input value={newComment} onChange={handleCommentChange} placeholder="Digite seu comentário..."/>
        <StarRating />

        <button className="SendBtn" onClick={handleCommentSubmit}>
          {editIndex !== null ? 'Salvar Edição' : 'Enviar'}
        </button>

      </div>
    </div>


  </>);
}
export default Feedback;
