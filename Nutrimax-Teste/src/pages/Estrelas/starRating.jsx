import React, { useState } from 'react';
import starFulll from '../../assets/iconStar.svg';
import starVazia from '../../assets/iconStarVazia.svg';
import './starRating.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (star) => {
    setRating(star);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starIcon = i <= rating ? (
        <img src={starFulll} />
      ) : (
        <img src={starVazia} alt="Estrela vazia" />
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

  return (
    <div>
      <p>Avaliação: {rating} estrelas</p>
      <div>
        {renderStars()}
      </div>
    </div>
  );
};

export default StarRating;
