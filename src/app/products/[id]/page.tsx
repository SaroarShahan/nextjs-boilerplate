import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { getProducts, getProduct } from '~/actions/productionActions';

// Enable ISR with 60 seconds revalidation
export const revalidate = 60;

// Generate static params for SSG
export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const productId = parseInt(id);

  const product = await getProduct(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/products" className={styles.backLink}>
          ← Back to Products
        </Link>
        <div className={styles.actions}>
          <Link
            href={`/products/${product.id}/edit`}
            className={styles.editButton}
          >
            ✏️ Edit Product
          </Link>
        </div>
      </div>

      <div className={styles.productContainer}>
        <div className={styles.imageSection}>
          {product.image ? (
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={400}
                className={styles.productImage}
                priority
              />
            </div>
          ) : (
            <div className={styles.imagePlaceholder}>
              <span className={styles.placeholderIcon}>📦</span>
              <p>No image available</p>
            </div>
          )}
        </div>

        <div className={styles.infoSection}>
          <div className={styles.productHeader}>
            <h1 className={styles.productTitle}>{product.title}</h1>
            <div className={styles.priceContainer}>
              <span className={styles.price}>${product.price}</span>
            </div>
          </div>

          <div className={styles.productDescription}>
            <h3 className={styles.sectionTitle}>Description</h3>
            <p className={styles.description}>
              {product.description || 'No description available.'}
            </p>
          </div>

          <div className={styles.productMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Product ID:</span>
              <span className={styles.metaValue}>#{product.id}</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Price:</span>
              <span className={styles.metaValue}>${product.price}</span>
            </div>
          </div>

          <div className={styles.actionButtons}>
            <Link
              href={`/products/${product.id}/edit`}
              className={styles.primaryButton}
            >
              Edit Product
            </Link>
            <Link href="/products" className={styles.secondaryButton}>
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
