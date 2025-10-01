'use client';

import { useState, useEffect } from 'react';
import styles from './styles/addProductForm.module.css';
import { getProduct, updateProduct } from '~/actions/productionActions';
import { useParams } from 'next/navigation';
import EditProductFormSkeleton from './EditProductFormSkeleton';

export default function EditProductForm() {
  const { id: productId } = useParams<{ id: string }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('url');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
  });

  // Load existing product data
  useEffect(() => {
    const loadProduct = async () => {
      try {
        const product = await getProduct(parseInt(productId!));
        if (product) {
          setFormData({
            title: product.title,
            description: product.description || '',
            price: product.price.toString(),
            image: product.image || '',
          });
        }
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProduct();
  }, [productId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    window.history.back();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const updatedProductData = {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        image: formData.image,
      };

      await updateProduct(parseInt(productId), updatedProductData);
    } catch (error) {
      console.error('Error updating product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <EditProductFormSkeleton />;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="title" className={styles.label}>
          Product Title *
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          className={`${styles.input}`}
          placeholder="Enter product title"
          disabled={isSubmitting}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="description" className={styles.label}>
          Description *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          className={`${styles.textarea}`}
          placeholder="Enter product description"
          rows={4}
          disabled={isSubmitting}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="price" className={styles.label}>
          Price ($) *
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
          className={`${styles.input}`}
          placeholder="0.00"
          step="0.01"
          min="0"
          disabled={isSubmitting}
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.label}>Product Image *</label>

        {/* Upload method toggle */}
        <div className={styles.uploadMethodToggle}>
          <button
            type="button"
            onClick={() => setUploadMethod('file')}
            className={`${styles.toggleButton} ${
              uploadMethod === 'file' ? styles.toggleActive : ''
            }`}
          >
            📁 Upload File
          </button>
          <button
            type="button"
            onClick={() => setUploadMethod('url')}
            className={`${styles.toggleButton} ${
              uploadMethod === 'url' ? styles.toggleActive : ''
            }`}
          >
            🔗 Image URL
          </button>
        </div>

        {uploadMethod === 'file' ? (
          <div className={styles.fileUploadSection}>
            {/* File upload area */}
            <div className={`${styles.fileUploadArea}`}>
              <input
                type="file"
                id="image-file"
                accept="image/*"
                className={styles.fileInput}
                disabled={isSubmitting}
              />
              <label htmlFor="image-file" className={styles.fileLabel}>
                <span className={styles.uploadIcon}>📁</span>
                <span className={styles.uploadText}>
                  Click to select an image
                </span>
                <span className={styles.uploadHint}>
                  PNG, JPG, WebP or SVG (max 5MB)
                </span>
              </label>
            </div>
          </div>
        ) : (
          <div className={styles.urlInputSection}>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className={`${styles.input}`}
              placeholder="/images/products/product-name.svg"
              disabled={isSubmitting}
            />
            <small className={styles.hint}>
              Use a path like &quot;/images/products/your-image.svg&quot; or a
              full URL
            </small>
          </div>
        )}
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={handleCancel}
          className={styles.cancelButton}
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? 'Updating Product...' : 'Update Product'}
        </button>
      </div>
    </form>
  );
}
