import React from 'react';

import shopData from '../../shop-data.json';

const Shop = () => {
  return (
    <div>
      {shopData.map((data) => {
        const { id, name, imageUrl, price } = data;
        return (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
