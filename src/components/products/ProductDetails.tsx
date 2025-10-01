import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getProduct } from '~/actions/productionActions';

import styles from './styles/productDetails.module.css';

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

export const revalidate = 60;

const ProductDetails = async ({ params }: ProductDetailsProps) => {
  const { id } = await params;
  const product = await getProduct(+id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
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
  );
};

export default ProductDetails;
