
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Bienvenida from './pages/Bienvenida';
import Nabvar from './components/Nabvar';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router> 
        <Nabvar />
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
