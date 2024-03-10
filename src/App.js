import './App.css';
import Logo from './components/Logo.js';
import Hero from './components/Hero.js';
import Nav from './components/Nav.js';
import About from './components/About.js';
import Mission from './components/Mission.js';
import Contact from './components/Contact.js';
import USPs from './components/USPs.js';

function App() {
  return (
    <div className="App">
      <Logo />
      <Nav />
      <Hero />
      <USPs />
      <About /> 
      <Mission /> 
      <Contact />
    </div>
  );
}

export default App;
