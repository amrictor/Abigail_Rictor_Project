import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Movies from 'components/Movies';
import Characters from 'components/Characters';
import Quotes from 'components/Quotes';
import Navigation from 'components/Navigation';
import Home from 'components/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='characters' element={<Characters/>}/>
        <Route path='quotes' element={<Quotes/>}/>
      </Routes>
    </div>
  );
}

export default App;
