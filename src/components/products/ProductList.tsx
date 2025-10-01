import React, { use } from 'react';

import { getProducts } from '~/actions/productionActions';
import ProductCard from './ProductCard';
import styles from './styles/productCard.module.css';

const ProductList = () => {
  const products = use(getProducts());

  return (
    <div className={styles.productsGrid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
