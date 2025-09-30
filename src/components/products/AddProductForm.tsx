'use client';

import { useState } from 'react';
import styles from './styles/addProductForm.module.css';
import { redirect } from 'next/navigation';
import { createProduct } from '~/actions/productionActions';

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadMethod, setUploadMethod] = useState<'file' | 'url'>('file');

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
    redirect('/products');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const newProduct = {
        title: formData.title,
        description: formData.description,
        price: parseFloat(formData.price),
        image: formData.image,
      };

      createProduct(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                // onChange={handleFileChange}
                className={styles.fileInput}
                disabled={isSubmitting}
              />
              <label htmlFor="image-file" className={styles.fileLabel}>
                {/* {selectedFile ? (
                  <>
                    <span className={styles.fileName}>
                      📷 {selectedFile.name}
                    </span>
                    <span className={styles.fileSize}>
                      ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </>
                ) : (
                  <> */}
                <span className={styles.uploadIcon}>📁</span>
                <span className={styles.uploadText}>
                  Click to select an image
                </span>
                <span className={styles.uploadHint}>
                  PNG, JPG, WebP or SVG (max 5MB)
                </span>
                {/* </>
                )} */}
              </label>
            </div>

            {/* Image preview */}
            {/* {imagePreview && (
              <div className={styles.imagePreview}>
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={200}
                  height={200}
                  className={styles.previewImage}
                  unoptimized
                />
              </div>
            )} */}
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
          {isSubmitting ? 'Adding Product...' : 'Add Product'}
        </button>
      </div>
    </form>
  );
}
