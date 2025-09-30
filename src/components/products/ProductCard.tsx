'use client';

import Link from 'next/link';
import Image from 'next/image';

import styles from './styles/productCard.module.css';
import { deleteProduct } from '~/actions/productionActions';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleDeleteProduct = async (productId: number) => {
    await deleteProduct(productId);
  };

  return (
    <div className={styles.productCard}>
      <Link href={`/products/${product.id}`} className={styles.productLink}>
        {product.image && (
          <div className={styles.productImage}>
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className={styles.productImg}
            />
          </div>
        )}
        <h3 className={styles.productName}>{product.title}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.productPrice}>${product.price}</div>
      </Link>
      <div className={styles.productActions}>
        <Link
          href={`/products/${product.id}/edit`}
          className={styles.editButton}
        >
          ✏️ Edit
        </Link>
        <button
          className={styles.deleteButton}
          onClick={() => handleDeleteProduct(product.id)}
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
