import '../styles/Logo.css';
import logo from '../images/mandala-yinyang.png';

function Logo() {
    return (
        <div className="logo-wrap">
        <p className="logo-text">Body</p>
        <img className="logo-img" src={logo} alt="yin yang" />
        <p className="logo-text">Mind</p>
      </div>
    );
}

export default Logo;
