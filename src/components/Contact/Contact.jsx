import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dr8ukaf', // Service ID
      'template_8izfr7u', // Template ID
      form.current,
      'Nbscd8-M3iMereGeB', // User ID
      {
        reply_to: e.target.reply_to.value
      }
    )
    .then((result) => {
      alert('Message envoyé avec succès !');
      e.target.reset();
    }, (error) => {
      alert('Une erreur est survenue, veuillez réessayer.');
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contactez-moi</h2>
        
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label>Nom</label>
            <input type="text" name="from_name" required />
          </div>
          
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="reply_to" required />
          </div>
          
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" required></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary">
            Envoyer le message
          </button>
        </form>
      </div>
    </section>
  );
}