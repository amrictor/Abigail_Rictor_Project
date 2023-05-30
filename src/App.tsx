import React from 'react';
import Loading from './components/ui/Loading';
import { Route, Routes } from 'react-router-dom';
import Movies from './components/Movies';
import Characters from './components/Characters';
import Quotes from './components/Quotes';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/'/>
        <Route path='movies' element={<Movies/>}/>
        <Route path='characters' element={<Characters/>}/>
        <Route path='quotes' element={<Quotes/>}/>
      </Routes>
    </div>
  );
}

export default App;
