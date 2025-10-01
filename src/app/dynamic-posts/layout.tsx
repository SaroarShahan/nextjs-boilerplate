import Link from 'next/link';

import styles from './dynamic-posts.module.css';

export default function DynamicPostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-1">
      <div className={styles.header}>
        <h2>BrandName</h2>

        <ul className={styles.menu}>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
