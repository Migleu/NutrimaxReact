import React, { useState } from 'react';
import './feedback.css';


function Feedback({comments, setcomment}) {
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

  return ( <>
    <div className="containerAll">
  <div className="btn_fechar"><button>Fechar</button></div>
      <div className="comment-input">
        <input
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Digite seu comentário..."
        />
        <button className="SendBtn" onClick={handleCommentSubmit}>
          {editIndex !== null ? 'Salvar Edição' : 'Enviar'}
        </button>
      </div>
      </div>
    

      </>);
}
export default Feedback;
