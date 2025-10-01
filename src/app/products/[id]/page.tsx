import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { getProducts, getProduct } from '~/actions/productionActions';
import ProductDetails from '~/components/products/ProductDetails';
import { Suspense } from 'react';
import ProductDetailSkeleton from '~/components/products/ProductDetailSkeleton';

// Enable ISR with 60 seconds revalidation
export const revalidate = 60;

// Generate static params for SSG
export async function generateStaticParams() {
  try {
    const products = await getProducts();

    return products.map((product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.warn('Failed to get products for static generation:', error);
    // Return empty array if database is not accessible during build
    return [];
  }
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/products" className={styles.backLink}>
          ← Back to Products
        </Link>
      </div>

      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetails params={params} />
      </Suspense>
    </div>
  );
}
