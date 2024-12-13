import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer';
import Services from './components/services';
import Skills from './components/skills/skills';
import Projects from './components/projects';
import Testimonials from './components/testimonials';
import Highlights from './components/highlights';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Highlights />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
