import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Category from './pages/Category';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
