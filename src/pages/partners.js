import React from 'react';
import Layout from '@theme/Layout';
import styles from './partners.module.css';

function PartnerCard({ name, description, url, logoUrl }) {
  return (
    <div className={styles.card}>
      {logoUrl && <img src={logoUrl} alt={name} className={styles.logo} />}
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit {name} →
      </a>
    </div>
  );
}

export default function Partners() {
  return (
    <Layout
      title="Partners"
      description="Organizations contributing to the Multipaz ecosystem">
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>Partners</h1>
          <p>
            Multipaz is built in the open. These organizations actively contribute
            to its development and ecosystem.
          </p>
        </div>

        <section className={styles.section}>
          <h2>Contributing Organizations</h2>
          <div className={styles.grid}>
            <PartnerCard
              name="Open Mobile Hub"
              description="OMH is an open-source initiative that bridges Android development across GMS and non-GMS devices. The OMH team actively contributes to Multipaz, helping bring digital identity to a broader range of Android devices."
              url="https://openmobilehub.org"
            />
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Become a Partner</h2>
          <p>
            Is your organization building on or contributing to Multipaz?
            We'd love to feature you here and grow the ecosystem together.
          </p>
          <a
            href="https://github.com/openwallet-foundation/mdoc-lib"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer">
            Get in touch on GitHub
          </a>
        </section>
      </main>
    </Layout>
  );
}
