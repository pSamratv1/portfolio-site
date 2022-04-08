import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
