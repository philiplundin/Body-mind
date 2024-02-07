import './App.css';
import Logo from './components/Logo.js';
import Hero from './components/Hero.js';
import Content from './components/Content.js';
import Nav from './components/Nav.js';
import Contact from './components/Contact.js';

function App() {
  return (
    <div className="App">
      <Logo />
      <Nav />
      <Hero />
      <Content /> 
      <Contact />
    </div>
  );
}

export default App;
