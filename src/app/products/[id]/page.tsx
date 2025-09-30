'use client';

import { useState, use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import styles from './page.module.css';

// Sample product data - in a real app, this would come from an API or database
const products = [
  {
    id: '1',
    name: 'Wireless Headphones',
    description:
      'Premium noise-cancelling wireless headphones with superior sound quality and long battery life.',
    fullDescription:
      'Experience audio like never before with our premium wireless headphones. Featuring advanced noise-cancelling technology, these headphones deliver crystal-clear sound quality with deep bass and crisp highs. The comfortable over-ear design ensures long listening sessions without fatigue, while the 30-hour battery life keeps your music playing all day long.',
    price: '$199.99',
    originalPrice: '$249.99',
    icon: '🎧',
    category: 'Audio',
    brand: 'AudioTech',
    inStock: true,
    stockCount: 15,
    rating: 4.8,
    reviews: 127,
    features: [
      'Active Noise Cancellation',
      '30-hour Battery Life',
      'Bluetooth 5.0 Connectivity',
      'Quick Charge (15 min = 3 hours)',
      'Premium Leather Ear Cups',
      'Built-in Microphone',
    ],
    specifications: [
      { label: 'Driver Size', value: '40mm Dynamic' },
      { label: 'Frequency Response', value: '20Hz - 20kHz' },
      { label: 'Impedance', value: '32 Ohms' },
      { label: 'Weight', value: '280g' },
      { label: 'Connectivity', value: 'Bluetooth 5.0, 3.5mm Jack' },
      { label: 'Charging Port', value: 'USB-C' },
    ],
    images: ['🎧', '🎵', '🔊', '🎶'],
  },
  {
    id: '2',
    name: 'Smart Watch',
    description:
      'Advanced fitness tracking smartwatch with heart rate monitoring and GPS functionality.',
    fullDescription:
      'Stay connected and track your fitness goals with our advanced smartwatch. Featuring built-in GPS, heart rate monitoring, and comprehensive fitness tracking, this watch is your perfect companion for an active lifestyle. The vibrant AMOLED display and customizable watch faces ensure you stay stylish while staying healthy.',
    price: '$299.99',
    originalPrice: '$349.99',
    icon: '⌚',
    category: 'Wearables',
    brand: 'TechTime',
    inStock: true,
    stockCount: 8,
    rating: 4.6,
    reviews: 89,
    features: [
      'Built-in GPS',
      'Heart Rate Monitor',
      'Sleep Tracking',
      '7-day Battery Life',
      'Water Resistant (50m)',
      'App Notifications',
    ],
    specifications: [
      { label: 'Display', value: '1.4" AMOLED' },
      { label: 'Resolution', value: '454 x 454 pixels' },
      { label: 'Battery', value: '7 days typical use' },
      { label: 'Water Rating', value: '5ATM + IP68' },
      { label: 'Sensors', value: 'GPS, Heart Rate, Accelerometer' },
      { label: 'Connectivity', value: 'Bluetooth 5.0, Wi-Fi' },
    ],
    images: ['⌚', '📱', '💓', '🏃'],
  },
  // Add more products as needed
];

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductDetailsPage({ params }: ProductPageProps) {
  const resolvedParams = use(params);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'specifications'>(
    'description'
  );

  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={
          index < Math.floor(rating) ? styles.starFilled : styles.starEmpty
        }
      >
        ⭐
      </span>
    ));
  };

  return (
    <div className={styles.container}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>
          Home
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <Link href="/products" className={styles.breadcrumbLink}>
          Products
        </Link>
        <span className={styles.breadcrumbSeparator}>/</span>
        <span className={styles.breadcrumbCurrent}>{product.name}</span>
      </nav>

      <div className={styles.productContainer}>
        {/* Product Images */}
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
            <div className={styles.imageDisplay}>
              {product.images[selectedImageIndex]}
            </div>
          </div>
          <div className={styles.thumbnailGrid}>
            {product.images.map((image, index) => (
              <button
                key={index}
                className={`${styles.thumbnail} ${
                  index === selectedImageIndex ? styles.thumbnailActive : ''
                }`}
                onClick={() => setSelectedImageIndex(index)}
              >
                {image}
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className={styles.productInfo}>
          <div className={styles.productHeader}>
            <div className={styles.category}>{product.category}</div>
            <h1 className={styles.productTitle}>{product.name}</h1>
            <div className={styles.brand}>by {product.brand}</div>
          </div>

          <div className={styles.rating}>
            <div className={styles.stars}>{renderStars(product.rating)}</div>
            <span className={styles.ratingScore}>{product.rating}</span>
            <span className={styles.reviewCount}>
              ({product.reviews} reviews)
            </span>
          </div>

          <div className={styles.pricing}>
            <span className={styles.currentPrice}>{product.price}</span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>
                {product.originalPrice}
              </span>
            )}
            <span className={styles.discount}>
              Save{' '}
              {Math.round(
                (1 -
                  parseFloat(product.price.slice(1)) /
                    parseFloat(product.originalPrice!.slice(1))) *
                  100
              )}
              %
            </span>
          </div>

          <div className={styles.stock}>
            {product.inStock ? (
              <span className={styles.inStock}>
                ✅ In Stock ({product.stockCount} available)
              </span>
            ) : (
              <span className={styles.outOfStock}>❌ Out of Stock</span>
            )}
          </div>

          <div className={styles.description}>
            <p>{product.description}</p>
          </div>

          <div className={styles.features}>
            <h3 className={styles.featuresTitle}>Key Features:</h3>
            <ul className={styles.featuresList}>
              {product.features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>
                  <span className={styles.featureIcon}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Quantity and Add to Cart */}
          <div className={styles.purchaseSection}>
            <div className={styles.quantitySelector}>
              <label className={styles.quantityLabel}>Quantity:</label>
              <div className={styles.quantityControls}>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className={styles.quantityValue}>{quantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.stockCount}
                >
                  +
                </button>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <button
                className={styles.addToCartButton}
                disabled={!product.inStock}
              >
                Add to Cart
              </button>
              <button
                className={styles.buyNowButton}
                disabled={!product.inStock}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className={styles.detailsSection}>
        <div className={styles.tabNav}>
          <button
            className={`${styles.tabButton} ${
              activeTab === 'description' ? styles.tabButtonActive : ''
            }`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`${styles.tabButton} ${
              activeTab === 'specifications' ? styles.tabButtonActive : ''
            }`}
            onClick={() => setActiveTab('specifications')}
          >
            Specifications
          </button>
        </div>

        <div className={styles.tabContent}>
          {activeTab === 'description' && (
            <div className={styles.descriptionTab}>
              <h3>Product Description</h3>
              <p>{product.fullDescription}</p>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className={styles.specificationsTab}>
              <h3>Technical Specifications</h3>
              <table className={styles.specsTable}>
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index} className={styles.specRow}>
                      <td className={styles.specLabel}>{spec.label}</td>
                      <td className={styles.specValue}>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Back to Products */}
      <div className={styles.backSection}>
        <Link href="/products" className={styles.backButton}>
          ← Back to Products
        </Link>
      </div>
    </div>
  );
}
