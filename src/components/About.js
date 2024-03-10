import '../styles/About.css';
import mange from '../images/mangemange.jpg';

function About() {
    return (
        <section className="about" id="about">
            <img className="profile-image" src={mange} alt="Profile" />
            <div className="about-text_box">
                <h1 className="about-heading">Magnus Hardstedt</h1>
                <p className="about-text">
                    Pedagog. Handledare. Naturentusiast. Mental och fysisk hälsa. Balans. Personlig utveckling. Välmående.
                </p>
            </div>
        </section>
    );
}

export default About;
