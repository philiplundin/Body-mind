import '../styles/Content.css';
import mange from '../images/mangemange.jpg';

function Content() {
    return (
        <div className="content">
            <div className="content-text_box">
                <h1 className="content-heading">Vem är jag</h1>
                <p className="content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <img className="profile-image" src={mange} alt="Profile" />
        </div>
    );
}

export default Content;
