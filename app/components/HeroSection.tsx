"use client"; // This directive is essential for Next.js App Router

import React from 'react';

// --- Component: HeroSection ---
const HeroSection = () => {
  const styles = {
    hero: {
      backgroundColor: 'var(--stone)',
      textAlign: 'center' as const,
      padding: '6rem 1.5rem',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '85vh',
    },
    h1: {
      fontSize: 'clamp(2.5rem, 5vw, 4rem)',
      margin: '0 0 1rem 0',
    },
    p: {
      fontSize: '1.2rem',
      maxWidth: '600px',
      marginBottom: '2rem',
      lineHeight: 1.5,
    },
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="hero" style={styles.hero} aria-labelledby="hero-title">
      <h1 id="hero-title" style={styles.h1}>From Our Farm to Your Table</h1>
      <p style={styles.p}>Discover the rich, nuanced flavors of locally and sustainably grown gourmet mushrooms.</p>
      <a href="#products" className="btn btn-primary" onClick={handleScrollClick}>Explore Our Varieties</a>
    </section>
  );
};

export default HeroSection;
