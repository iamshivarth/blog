import React from 'react';
import CtgCard from '../CtgCard/CtgCard';
import './Directory.scss';

const Directory = ({ categories }) => {
  return (
    <div className="categories__container">
      {categories.map((category) => (
        <CtgCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
