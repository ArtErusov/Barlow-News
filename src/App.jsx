import './assets/css/main.css';

import Header from './components/Header/Header';
import Main from './pages/main/main';
import React from 'react';

function App() {

  const newsCategories = ["all", "business", "technology", "regionall"]  

  return (
    <React.Fragment>
      <Header />
      <Main  newsCategories={newsCategories}/>
    </React.Fragment>
  )
}

export default App
