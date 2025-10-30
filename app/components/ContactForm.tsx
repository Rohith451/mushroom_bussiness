"use client"
import axios from 'axios';
import { useState } from 'react';
import React from 'react';

// --- Component: ContactForm ---
export default function ContactForm(){
  // Initialize state for form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  // State for handling loading/error feedback
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  // --- Styles ---
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
    },
    // Added style for feedback message
    messageStyle: (type: 'success' | 'error' | null) => ({
        padding: '1rem',
        borderRadius: 'var(--border-radius)',
        backgroundColor: type === 'success' ? '#d4edda' : type === 'error' ? '#f8d7da' : 'transparent',
        color: type === 'success' ? '#155724' : type === 'error' ? '#721c24' : 'inherit',
        marginBottom: '1rem',
    })
  };

  // --- Submission Handler ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null); // Clear previous status

    try {
      // NOTE: For this to work, you MUST have an API route at /api/contact 
      // (e.g., in Next.js/Express) that handles the POST request and saves data to MongoDB Atlas.
      const response = await axios.post('/api/contact', {
        name,
        phone,
        message
      });

      console.log('API Response:', response.data);
      
      // 1. Reset state variables (Best Practice)
      setName('');
      setPhone('');
      setMessage('');
      
      // 2. Set success status
      setStatus('success');

    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container" aria-labelledby="contact-title">
      <h2 id="contact-title">Get in Touch</h2>
      
      {/* Feedback Message */}
      {status && (
        <div style={styles.messageStyle(status)}>
            {status === 'success' 
                ? '✅ Thank you for your message! We\'ll get back to you soon.' 
                : '❌ There was an error submitting your message. Please try again.'}
        </div>
      )}

      <form style={styles.form} onSubmit={handleSubmit}>

        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input 
            type="text" 
            id="name"
            value={name} // Control the input value with state
            onChange={(e)=>setName(e.target.value)}
            required 
            style={styles.input} 
            className="form-input" 
            disabled={isSubmitting} // Disable during submission
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="phone" style={styles.label}>Phone No</label>
          <input 
            type="text"
            id="phone"
            value={phone} // Control the input value with state
            onChange={(e)=>setPhone(e.target.value)}
            required 
            style={styles.input} 
            className="form-input" 
            disabled={isSubmitting}
          />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>Message</label>
          <textarea 
            rows={5} 
            id="message"
            value={message} // Control the input value with state
            onChange={(e)=>setMessage(e.target.value)}
            required 
            style={styles.input} 
            className="form-input"
            disabled={isSubmitting}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary" 
          style={{alignSelf: 'flex-start'}}
          disabled={isSubmitting} // Disable button when submitting
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};