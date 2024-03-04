import '../styles/Nav.css';

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav-flex">
                <li><a href="#hero">Vandring</a></li>
                <li><a href="#content">Om</a></li>
                <li><a href="#contact">Kontakt</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
