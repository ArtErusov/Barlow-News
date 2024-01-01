import './assets/css/main.css';

import Header from './components/Header/Header';
import Main from './pages/main/main';
import NewBanner from './components/newBanner/NewBanner';

function App() {

  const newsCategories = ["all", "business", "technology", "regionall"]  

  return (
    <div className='container'>
      <Header newsCategories={newsCategories} />
      <Main />
      <NewBanner />
    </div>
  )
}

export default App
