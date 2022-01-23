import { useState } from "react";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const footerLinks = [
    {
      link: "/Resume",
      title: "Resume",
      id: 1,
    },
    {
      link: "/",
      title: "Home",
      id: 2,
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <form onSubmit={handleSubmit}>
          <div className={styles.input}>
            <label>Your Name</label>
            <input
              type="text"
              value={name}
              name="name"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className={styles.input}>
            <label>Your Email</label>
            <input
              type="text"
              value={email}
              name="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className={styles.message}>
            <label>Your Message</label>
            <textarea
              required
              value={message}
              name="message"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>

          <div className={styles.input}>
            <input type="submit" name="Submit" className={styles.submit} />
          </div>
        </form>
      </div>

      <div className={styles.footerlinks}>
        <Footer footerLinks={footerLinks} />
      </div>
    </div>
  );
};

export default Contact;
