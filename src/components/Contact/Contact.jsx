import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css';

export default function Contact({ setCursorVariant }) {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendStatus(null);

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
      setSendStatus('success');
      e.target.reset();
    })
    .catch((error) => {
      setSendStatus('error');
      console.error('Erreur EmailJS:', error);
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <span className="section-subtitle">Contact</span>
          <h2 className="section-title">Travaillons ensemble</h2>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.div 
            className="form-group"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="name">Nom complet</label>
            <input
              type="text"
              id="name"
              name="from_name"
              required
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            />
          </motion.div>
          
          <motion.div 
            className="form-group"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="reply_to"
              required
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            />
          </motion.div>
          
          <motion.div 
            className="form-group"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              onMouseEnter={() => setCursorVariant('text')}
              onMouseLeave={() => setCursorVariant('default')}
            ></textarea>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <button
              type="submit"
              className="submit-btn"
              disabled={isSending}
              onMouseEnter={() => setCursorVariant('clickable')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              {isSending ? (
                <span>Envoi en cours...</span>
              ) : (
                <span>Envoyer le message</span>
              )}
            </button>

            {sendStatus === 'success' && (
              <motion.div
                className="alert success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message envoyé avec succès !
              </motion.div>
            )}

            {sendStatus === 'error' && (
              <motion.div
                className="alert error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Une erreur est survenue. Veuillez réessayer.
              </motion.div>
            )}
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}