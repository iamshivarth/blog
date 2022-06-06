import React from 'react';

import Directory from '../../components/Directory/Directory';

const Home = () => {
  const categories = [
    {
      id: '12db54frt',
      title: 'HATS',
      imgURL: 'https://i.ibb.co/cvpntL1/hats.png'
    },
    {
      id: '32mn67yui',
      title: 'JACKETS',
      imgURL: 'https://i.ibb.co/px2tCc3/jackets.png'
    },
    {
      id: '58gh67frt',
      title: 'SNEAKERS',
      imgURL: 'https://i.ibb.co/0jqHpnp/sneakers.png'
    },
    {
      id: '49to52bst',
      title: 'WOMENS',
      imgURL: 'https://i.ibb.co/GCCdy8t/womens.png'
    },
    {
      id: '90nu83gce',
      title: 'MENS',
      imgURL: 'https://i.ibb.co/R70vBrQ/men.png'
    }
  ];

  return (
    <div>
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
