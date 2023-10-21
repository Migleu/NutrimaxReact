import React, { useState } from 'react';


function Teste() {
  const [popupActive, setPopupActive] = useState(false);

  const openPopup = () => {
    setPopupActive(true);
    document.body.classList.add('popup-active'); // Adicione a classe 'popup-active' ao body
  }

  const closePopup = () => {
    setPopupActive(false);
    document.body.classList.remove('popup-active'); // Remova a classe 'popup-active' do body
  }

  return (
    <div className="App">
      <button onClick={openPopup}>Abrir Popup</button>

      {popupActive && (
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
      )}
    </div>
  );
}

export default Teste;
