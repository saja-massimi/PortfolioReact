import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Services from './components/services';
import Skills from './components/skills';
import Projects from './components/projects';
import Testimonials from './components/testimonials';
import Highlights from './components/highlights';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Skills />
      <Projects/>
      <Testimonials/>
      <Highlights/>
      <Footer />
    </div>
  );
}

export default App;
