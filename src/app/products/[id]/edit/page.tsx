import Link from 'next/link';
import EditProductForm from '~/components/products/EditProductForm';
import styles from './page.module.css';

interface EditProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditProductPage({
  params,
}: EditProductPageProps) {
  const { id } = await params;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/products" className={styles.backLink}>
          ← Back to Products
        </Link>
        <h1 className={styles.title}>Edit Product</h1>
        <p className={styles.subtitle}>Update the product details below.</p>
      </div>

      <EditProductForm productId={id} />
    </div>
  );
}
