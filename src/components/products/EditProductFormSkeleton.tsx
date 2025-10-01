import styles from './styles/skeleton.module.css';

const EditProductFormSkeleton = () => {
  return (
    <div className={styles.skeletonForm}>
      {/* Title input group */}
      <div className={styles.skeletonFormGroup}>
        <div className={styles.skeletonLabel}></div>
        <div className={styles.skeletonInput}></div>
      </div>

      {/* Description textarea group */}
      <div className={styles.skeletonFormGroup}>
        <div className={styles.skeletonLabel}></div>
        <div className={styles.skeletonTextarea}></div>
      </div>

      {/* Price input group */}
      <div className={styles.skeletonFormGroup}>
        <div className={styles.skeletonLabel}></div>
        <div className={styles.skeletonInput}></div>
      </div>

      {/* Image upload group */}
      <div className={styles.skeletonFormGroup}>
        <div className={styles.skeletonLabel}></div>

        {/* Upload method toggle */}
        <div className={styles.skeletonToggleGroup}>
          <div className={styles.skeletonToggleButton}></div>
          <div className={styles.skeletonToggleButton}></div>
        </div>

        {/* Input field */}
        <div className={styles.skeletonInput}></div>
      </div>

      {/* Current image preview */}
      <div className={styles.skeletonFormGroup}>
        <div className={styles.skeletonLabel}></div>
        <div className={styles.skeletonImagePreview}></div>
      </div>

      {/* Action buttons */}
      <div className={styles.skeletonButtonGroup}>
        <div className={styles.skeletonCancelButton}></div>
        <div className={styles.skeletonSubmitButton}></div>
      </div>
    </div>
  );
};

export default EditProductFormSkeleton;
