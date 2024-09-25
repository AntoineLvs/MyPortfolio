import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Offres from './pages/Offres';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Recipes from './pages/Recipes';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/offres" element={<Offres />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
