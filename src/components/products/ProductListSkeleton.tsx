import ProductCardSkeleton from './ProductCardSkeleton';
import styles from './styles/productCard.module.css';

interface ProductListSkeletonProps {
  count?: number;
}

const ProductListSkeleton = ({ count = 6 }: ProductListSkeletonProps) => {
  return (
    <div className={styles.productsGrid}>
      {Array.from({ length: count }, (_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductListSkeleton;
