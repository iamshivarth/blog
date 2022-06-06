import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../routes/Layout/Layout';
import Home from '../routes/Home/Home';
import Authentication from '../routes/Authentication/Authentication';
import Shop from '../routes/Shop/Shop';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signin" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
