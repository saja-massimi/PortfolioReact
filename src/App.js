import Navbar from './components/navbar/navbar';
import Footer from './components/footer';
import Services from './components/services/services';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Testimonials from './components/testimonials';
import Highlights from './components/highlights';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
      <Navbar />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Highlights />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
