import './App.css';
import {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
function App() {
  const [showMenu, setShowMenu] = useState(false);//Para haver comunicacao entre header e o home
  return (
    <BrowserRouter>
        <Header showMenu={showMenu} setShowMenu={setShowMenu}/>
          <Routes showMenu={showMenu} setShowMenu={setShowMenu}/>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
