import React from 'react';

// --- Component: Footer ---
const Footer = () => {
    const styles = {
        footer: {
            backgroundColor: 'var(--green-dark)',
            color: 'var(--text-light)',
            textAlign: 'center' as const,
            padding: '2rem 1.5rem',
        },
        p: {
            margin: 0,
            opacity: 0.8,
        }
    };

    return (
        <footer style={styles.footer}>
            <p style={styles.p}>© {new Date().getFullYear()} Forest Fungi Farms. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;
