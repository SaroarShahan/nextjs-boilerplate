import { Suspense } from 'react';
import styles from './page.module.css';
import ProductList from '~/components/products/ProductList';
import ProductListSkeleton from '~/components/products/ProductListSkeleton';

export const revalidate = 300; // Revalidate every 5 minutes

export default async function ProductsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Products</h1>
        <p className={styles.subtitle}>
          Discover our carefully curated collection of premium tech products
          designed to enhance your digital lifestyle.
        </p>
      </div>

      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
