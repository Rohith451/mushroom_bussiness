"use client"; // This directive is ESSENTIAL to fix the onClick error in Next.js App Router

import React, { CSSProperties, MouseEventHandler } from 'react';

// Define types for better organization and error checking
interface StyleMap {
  header: CSSProperties;
  logo: CSSProperties;
  nav: CSSProperties;
  navLink: CSSProperties;
}

// --- Component: Header ---
const Header: React.FC = () => {
  // Styles object with explicit type
  const styles: StyleMap = {
    header: {
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      // Note: Tailwind is usually preferred in Next.js, but using the provided CSS object here.
      backgroundColor: 'var(--cream)',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
      // The 'as const' assertion is correct for satisfying the TypeScript type for 'sticky'
      position: 'sticky' as const, 
      top: 0,
      zIndex: 10,
    },
    logo: {
      fontFamily: 'var(--font-heading)',
      fontSize: '1.5rem',
      fontWeight: '500',
      color: 'var(--green-dark)',
      textDecoration: 'none',
      cursor: 'default',
    },
    nav: {
      display: 'flex',
      gap: '1.5rem',
    },
    navLink: {
      fontFamily: 'var(--font-body)',
      textDecoration: 'none',
      color: 'var(--text-dark)',
      fontWeight: '600',
      paddingBottom: '0.25rem',
      borderBottom: '2px solid transparent',
      transition: 'border-bottom 0.2s',
      // Add a hover effect for better UX
      ':hover': {
        borderBottom: '2px solid var(--green-dark)',
      }
    } as CSSProperties, // Asserting as CSSProperties to allow the ':hover' pseudo-class (if using a library that supports it)
  };

  // Explicitly typing the event handler
  const handleLinkClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    
    // Check if targetId is null/undefined before querying the DOM
    if (!targetId) {
        console.error("Navigation link missing href attribute.");
        return;
    }
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      console.warn(`Could not find element with ID: ${targetId}`);
    }
  };

  return (
    <header style={styles.header}>
      <span style={styles.logo}>Forest Fungi</span>
      <nav style={styles.nav} className="header-nav">
        {['About', 'Products', 'Contact'].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={styles.navLink}
            className="nav-link"
            onClick={handleLinkClick}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
