import { useState, useEffect } from "react"
import styles from './Contact.module.css'

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMesssage] = useState('')
  const [reqStatus, setReqStatus] = useState()
  const [reqError, setReqError] = useState()

  async function sendMessageHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event.currentTarget.value);
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form onSubmit={sendMessageHandler} className={styles.form} noValidate>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMesssage(e.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  )
}