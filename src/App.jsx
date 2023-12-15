import { useState } from 'react';
import Header from './components/Header/Header';
import Main from './pages/main/main';
import './assets/css/main.css';
import NewBanner from './components/newBanner/NewBanner';

function App() {
  return (
    <div className='container'>
      <Header />
      <Main />
      <NewBanner />
    </div>
  )
}

export default App
