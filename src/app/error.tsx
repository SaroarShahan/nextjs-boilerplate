'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import styles from './error.module.css';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: VoidFunction;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.errorIcon}>⚠️</div>

        <h1 className={styles.title}>Something went wrong!</h1>

        <p className={styles.description}>
          An unexpected error occurred while processing your request. Don&apos;t
          worry, our team has been notified and we&apos;re working to fix it.
        </p>

        <div className={styles.errorDetails}>
          <h2 className={styles.detailsTitle}>Error Details:</h2>
          <div className={styles.errorBox}>
            <code className={styles.errorMessage}>
              {error.message || 'An unknown error occurred'}
            </code>
            {error.digest && (
              <p className={styles.errorId}>
                Error ID: <span className={styles.digest}>{error.digest}</span>
              </p>
            )}
          </div>
        </div>

        <div className={styles.actions}>
          <button onClick={reset} className={styles.retryButton}>
            🔄 Try Again
          </button>
          <Link href="/" className={styles.homeButton}>
            🏠 Go Home
          </Link>
          <Link href="/contact" className={styles.contactButton}>
            📧 Report Issue
          </Link>
        </div>

        <div className={styles.helpSection}>
          <p className={styles.helpText}>
            If this problem persists, please{' '}
            <Link href="/contact" className={styles.contactLink}>
              contact our support team
            </Link>{' '}
            with the error ID above.
          </p>
        </div>
      </div>

      <div className={styles.statusIndicator}>
        <div className={styles.statusIcon}>🔧</div>
        <p className={styles.statusText}>We&apos;re working on it!</p>
      </div>
    </div>
  );
}
