import './App.css';
import Logo from './components/Logo.js';
import Hero from './components/Hero.js';
import Content from './components/Content.js';
import Nav from './components/Nav.js';

function App() {
  return (
    <div className="App">
      <Logo />
      <Nav />
      <Hero />
      <Content /> 
    </div>
  );
}

export default App;
