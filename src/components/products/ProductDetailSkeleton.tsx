import styles from './styles/skeleton.module.css';

const ProductDetailSkeleton = () => {
  return (
    <div className={styles.productDetailSkeleton}>
      <div className={styles.productDetailContent}>
        <div className={styles.productDetailImage}>
          <div className={styles.skeletonDetailImageLarge}></div>
        </div>

        <div className={styles.productDetailInfo}>
          <div className={styles.skeletonDetailTitle}></div>
          <div className={styles.skeletonDetailPrice}></div>

          <div className={styles.skeletonDetailDescription}>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLine}></div>
            <div className={styles.skeletonLineShort}></div>
          </div>

          <div className={styles.skeletonDetailMeta}>
            <div className={styles.skeletonMetaItem}></div>
            <div className={styles.skeletonMetaItem}></div>
          </div>

          <div className={styles.skeletonDetailActions}>
            <div className={styles.skeletonButton}></div>
            <div className={styles.skeletonButton}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
