"use client"; // This directive is essential for Next.js App Router

import React from 'react';

// --- Component: ContactForm ---
const ContactForm = () => {
  const styles = {
    form: {
      maxWidth: '600px',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column' as const,
      gap: '1rem',
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column' as const,
    },
    label: {
      marginBottom: '0.5rem',
      fontWeight: '600',
    },
    input: {
      padding: '0.8rem',
      border: '2px solid var(--stone)',
      borderRadius: 'var(--border-radius)',
      fontFamily: 'var(--font-body)',
      fontSize: '1rem',
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this form data to an API route 
    // which would handle sending an email or saving to a database.
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Form submitted:', data);
    alert('Thank you for your message! We\'ll get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="container" aria-labelledby="contact-title">
      <h2 id="contact-title">Get in Touch</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input type="text" id="name" name="name" required style={styles.input} className="form-input" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="phone" style={styles.label}>Phone No</label>
          <input type="tel" id="phone" name="phone" required style={styles.input} className="form-input" />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea id="message" name="message" rows={5} required style={styles.input} className="form-input"></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{alignSelf: 'flex-start'}}>Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
