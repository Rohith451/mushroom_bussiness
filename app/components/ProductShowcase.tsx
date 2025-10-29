import React from 'react';

// In a real project, this data would come from a database or API.
const mockProducts = [
  { id: 1, name: 'Shiitake', description: 'Rich, earthy flavor perfect for stir-fries and soups.', price: '$12/lb', image: 'https://placehold.co/400x300/2d4d34/f4f1eb?text=Shiitake' },
  { id: 2, name: 'Lion\'s Mane', description: 'A unique, seafood-like texture. Great as a meat substitute.', price: '$15/lb', image: 'https://placehold.co/400x300/2d4d34/f4f1eb?text=Lion\'s+Mane' },
  { id: 3, name: 'Oyster', description: 'Delicate and mild, with a velvety texture. Versatile for any dish.', price: '$10/lb', image: 'https://placehold.co/400x300/2d4d34/f4f1eb?text=Oyster' },
  { id: 4, name: 'Maitake', description: 'Also known as Hen of the Woods, with a robust, woodsy flavor.', price: '$14/lb', image: 'https://placehold.co/400x300/2d4d34/f4f1eb?text=Maitake' },
];

// --- Component: ProductShowcase ---
const ProductShowcase = () => {
    const styles = {
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
        },
        card: {
            backgroundColor: 'var(--cream)',
            borderRadius: 'var(--border-radius)',
            boxShadow: 'var(--shadow)',
            overflow: 'hidden',
        },
        cardImage: {
            width: '100%',
            height: '200px',
            objectFit: 'cover' as const,
        },
        cardContent: {
            padding: '1.5rem',
        },
        cardTitle: {
            marginTop: '0',
            marginBottom: '0.5rem',
        },
        cardPrice: {
            color: 'var(--green-dark)',
            fontWeight: '600',
            marginBottom: '1rem',
        }
    };

    return (
        <section id="products" className="container" style={{ backgroundColor: '#fff' }} aria-labelledby="products-title">
            <h2 id="products-title">Our Mushrooms</h2>
            <div style={styles.grid}>
                {mockProducts.map(product => (
                    <div key={product.id} style={styles.card} className="product-card">
                        <img src={product.image} alt={product.name} style={styles.cardImage} />
                        <div style={styles.cardContent}>
                            <h3 style={styles.cardTitle}>{product.name}</h3>
                            <p style={styles.cardPrice}>{product.price}</p>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductShowcase;
