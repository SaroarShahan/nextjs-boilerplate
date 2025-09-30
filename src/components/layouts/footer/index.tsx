import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Next Boilerplate</h3>
            <p className={styles.description}>
              A modern Next.js boilerplate with TypeScript and CSS modules.
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className={styles.link}>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className={styles.link}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.link}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Connect</h4>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="https://github.com/saroarshahan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/saroarshahan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/saroarshahan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:saroar.shahan@gmail.com"
                  className={styles.link}
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Next Boilerplate. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              Privacy Policy
            </a>
            <a href="#" className={styles.bottomLink}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
