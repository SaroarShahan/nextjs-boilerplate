import Link from 'next/link';

import AddProductForm from '~/components/products/AddProductForm';
import styles from './page.module.css';

export default function AddProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/products" className={styles.backLink}>
          ← Back to Products
        </Link>
        <h1 className={styles.title}>Add New Product</h1>
        <p className={styles.subtitle}>
          Add a new product to your catalog with all the necessary details.
        </p>
      </div>

      <AddProductForm />
    </div>
  );
}
