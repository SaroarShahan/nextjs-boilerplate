import Link from 'next/link';
import EditProductForm from '~/components/products/EditProductForm';
import styles from './page.module.css';

export default async function EditProductPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/products" className={styles.backLink}>
          ← Back to Products
        </Link>
        <h1 className={styles.title}>Edit Product</h1>
        <p className={styles.subtitle}>Update the product details below.</p>
      </div>

      <EditProductForm />
    </div>
  );
}
