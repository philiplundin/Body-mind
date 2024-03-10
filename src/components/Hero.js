import '../styles/Hero.css';
import heroData from '../assets/hero-text.json';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-box">
        <h1 className="hero-heading">{heroData.heading}</h1>
        <p className="hero-text">{heroData.paragraph}</p>
      </div>
      <a href='#usp'><i className='arrow' /></a>
    </section>
  );
}

export default Hero;
