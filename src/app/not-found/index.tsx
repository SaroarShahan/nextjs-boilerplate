'use client';

import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>

        <div className={styles.errorIcon}>🔍</div>

        <h1 className={styles.title}>Page Not Found</h1>

        <p className={styles.description}>
          Oops! The page you&apos;re looking for doesn&apos;t exist. It might
          have been moved, deleted, or you entered the wrong URL.
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            🏠 Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className={styles.backButton}
          >
            ← Go Back
          </button>
        </div>

        <div className={styles.helpSection}>
          <p className={styles.helpText}>
            Still need help?{' '}
            <Link href="/contact" className={styles.contactLink}>
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
