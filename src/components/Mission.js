import '../styles/Mission.css';
import missionData from '../assets/mission-text.json';

function Mission() {
    return (
        <section className="mission">
            <h1 className="mission-heading">Mitt mission</h1>
            <p className="mission-paragraph">
                {missionData.paragraph1}
            </p>
            <p className="mission-paragraph">
                {missionData.paragraph2}
            </p>
            <p className="mission-paragraph">
                {missionData.paragraph3}
            </p>
        </section>
    );
}

export default Mission;
