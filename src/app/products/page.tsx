import Link from 'next/link';
import styles from './page.module.css';

const sampleProducts = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description:
      'Premium noise-cancelling wireless headphones with superior sound quality and long battery life.',
    price: '$199.99',
    icon: '🎧',
  },
  {
    id: '2',
    name: 'Smart Watch',
    description:
      'Advanced fitness tracking smartwatch with heart rate monitoring and GPS functionality.',
    price: '$299.99',
    icon: '⌚',
  },
  {
    id: '3',
    name: 'Laptop Stand',
    description:
      'Ergonomic aluminum laptop stand with adjustable height and cooling ventilation.',
    price: '$79.99',
    icon: '💻',
  },
  {
    id: '4',
    name: 'Wireless Mouse',
    description:
      'Precision wireless mouse with ergonomic design and customizable buttons.',
    price: '$49.99',
    icon: '🖱️',
  },
  {
    id: '5',
    name: 'Bluetooth Speaker',
    description:
      'Portable waterproof Bluetooth speaker with 360-degree sound and 12-hour battery.',
    price: '$89.99',
    icon: '🔊',
  },
  {
    id: '6',
    name: 'USB-C Hub',
    description:
      'Multi-port USB-C hub with HDMI, USB 3.0, and fast charging capabilities.',
    price: '$59.99',
    icon: '🔌',
  },
];

export default function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Products</h1>
        <p className={styles.subtitle}>
          Discover our carefully curated collection of premium tech products
          designed to enhance your digital lifestyle.
        </p>
      </div>

      <div className={styles.productsGrid}>
        {sampleProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Link
              href={`/products/${product.id}`}
              className={styles.productLink}
            >
              <div className={styles.productImage}>{product.icon}</div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>{product.description}</p>
              <div className={styles.productPrice}>{product.price}</div>
            </Link>
            <button className={styles.productButton}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
