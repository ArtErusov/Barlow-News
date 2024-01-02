import './assets/css/main.css';

import Header from './components/Header/Header';
import Main from './pages/main/main';
import NewBanner from './components/newBanner/NewBanner';
import React from 'react';

function App() {

  const newsCategories = ["all", "business", "technology", "regionall"]  

  return (
    <React.Fragment>
      <Header newsCategories={newsCategories} />
      <Main />
      <NewBanner />
    </React.Fragment>
  )
}

export default App
