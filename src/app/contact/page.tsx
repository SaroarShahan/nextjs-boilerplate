'use client';

import { useState } from 'react';
import styles from './page.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contact Us</h1>
        <p className={styles.subtitle}>
          We&apos;d love to hear from you. Send us a message and we&apos;ll
          respond as soon as possible.
        </p>
      </div>

      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2 className={styles.sectionTitle}>Get in Touch</h2>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📧</div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Email</h3>
              <p className={styles.infoText}>hello@nextjsboilerplate.com</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📱</div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Phone</h3>
              <p className={styles.infoText}>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.infoIcon}>📍</div>
            <div className={styles.infoContent}>
              <h3 className={styles.infoTitle}>Office</h3>
              <p className={styles.infoText}>
                123 Tech Street
                <br />
                San Francisco, CA 94105
                <br />
                United States
              </p>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <h3 className={styles.socialTitle}>Follow Us</h3>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}>
                🐙
              </a>
              <a href="#" className={styles.socialIcon}>
                🐦
              </a>
              <a href="#" className={styles.socialIcon}>
                💼
              </a>
              <a href="#" className={styles.socialIcon}>
                📘
              </a>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.input}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.textarea}
                rows={6}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting
                ? 'Sending...'
                : isSubmitted
                ? 'Message Sent!'
                : 'Send Message'}
            </button>
          </form>

          {isSubmitted && (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✅</div>
              <p>
                Thank you for your message! We&apos;ll get back to you soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
