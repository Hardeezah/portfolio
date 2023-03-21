import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './component/Header';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header/>
      <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
