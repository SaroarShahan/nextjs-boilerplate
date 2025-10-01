import styles from './styles/skeleton.module.css';

const ProductCardSkeleton = () => {
  return (
    <div className={styles.skeletonCard}>
      <div className={styles.skeletonImage}></div>
      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle}></div>
        <div className={styles.skeletonDescription}>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLineShort}></div>
        </div>
        <div className={styles.skeletonPrice}></div>
        <div className={styles.skeletonActions}>
          <div className={styles.skeletonButton}></div>
          <div className={styles.skeletonButton}></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
