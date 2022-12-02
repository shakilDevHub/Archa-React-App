import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact/Contact';
import Blogs from './Pages/Blog/Blogs';
import Projects from './Pages/Projects';
import Error from './Pages/Error';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Services/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/blog' element={<Blogs/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}


// https://www.pornhub.com/video/search?search=alyx+star&min_duration=10
export default App;
