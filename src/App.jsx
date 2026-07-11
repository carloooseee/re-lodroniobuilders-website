import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Projects from './pages/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects/:category" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
    </Routes>
  );
}

export default App;
