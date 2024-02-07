import '../styles/Contact.css';

function Contact() {
    return (
        <div className='contact'>
            <form className="contact-form" action="https://formsubmit.co/bodymindtest123@outlook.com" method="POST">
                <h1 className='contact-h1'>Kontaktförfrågan</h1>
                <div className='contact-divider' />

                <div className="contact-group">
                    <label className="contact-label">
                        Namn
                        <input className="contact-input" type="text" name="name" required />
                    </label>

                    <label className="contact-label">
                        Email
                        <input className="contact-input" type="email" name="email" required />
                    </label>
                </div>

                <label className="contact-label">
                    Meddelande
                </label>
                <textarea className="contact-textarea" name="message" required />
                
                <button className="contact-button" type="submit">Skicka kontaktförfrågan</button>
            </form>
        </div>
    );
}

export default Contact;
