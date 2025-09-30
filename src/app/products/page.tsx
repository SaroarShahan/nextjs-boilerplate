import styles from './page.module.css';
import { getProducts } from '~/actions/productionActions';
import ProductCard from '~/components/products/ProductCard';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Products</h1>
        <p className={styles.subtitle}>
          Discover our carefully curated collection of premium tech products
          designed to enhance your digital lifestyle.
        </p>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
