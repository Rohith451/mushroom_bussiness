import React from 'react';

// --- Component: AboutSection ---
const AboutSection = () => {
    const styles = {
        aboutGrid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'center',
        },
        image: {
            width: '100%',
            height: 'auto',
            borderRadius: 'var(--border-radius)',
            objectFit: 'cover' as const,
            maxHeight: '400px',
        },
        p: {
            marginBottom: '1rem',
        },
    };

  return (
    <section id="about" className="container" aria-labelledby="about-title">
      <h2 id="about-title">Our Story</h2>
      <div style={styles.aboutGrid} className="about-grid">
        <div>
          <h3>Rooted in Passion</h3>
          <p style={styles.p}>Forest Fungi Farms began with a simple belief: that the best food is grown with care, close to home. We cultivate our mushrooms in a controlled environment that mimics their natural forest habitat, ensuring every harvest is of the highest quality and potency.</p>
          <p style={styles.p}>We are committed to sustainable practices, using organic substrates and recycling all our farm waste. Our mission is to provide our community with fresh, flavorful, and nutritious mushrooms year-round.</p>
        </div>
        <img src="https://placehold.co/600x400/e3daca/2d4d34?text=Our+Farm" alt="A depiction of the mushroom farm environment" style={styles.image} />
      </div>
    </section>
  );
};

export default AboutSection;
