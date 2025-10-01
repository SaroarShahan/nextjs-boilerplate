import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoIcon}>🚀</span>
            <span className={styles.logoText}>NextJS</span>
          </Link>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/products" className={styles.navLink}>
                Products
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/products/add" className={styles.navLink}>
                Add Product
              </Link>
            </li>
            <li>
              <Link href="/posts" className={styles.navLink}>
                Posts
              </Link>
            </li>
            <li>
              <Link href="/dynamic-posts" className={styles.navLink}>
                Dynamic Posts
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/contact" className={styles.navLink}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
