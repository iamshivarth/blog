import React from 'react';
import './CtgCard.scss';

const CtgCard = ({ category }) => {
  return (
    <div
      className="category__container background__image"
      style={{ backgroundImage: `url(${category.imgURL})` }}
    >
      <div className="category_body__container">
        <h2>{category.title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CtgCard;
