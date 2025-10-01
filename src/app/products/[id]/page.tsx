import Link from 'next/link';
import styles from './page.module.css';
import { getProducts } from '~/actions/productionActions';
import ProductDetails from '~/components/products/ProductDetails';
import { Suspense } from 'react';
import ProductDetailSkeleton from '~/components/products/ProductDetailSkeleton';

export const revalidate = 300;

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

export async function generateStaticParams() {
  try {
    const products = await getProducts();

    return products.map((product) => ({
      id: product.id.toString(),
    }));
  } catch (error) {
    console.warn('Failed to get products for static generation:', error);
    return [];
  }
}
