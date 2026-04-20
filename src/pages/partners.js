import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './partners.module.css';

function Breadcrumb() {
  return (
    <nav className={styles.breadcrumb} aria-label="breadcrumbs">
      <Link href="/">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-label="Home">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      </Link>
      <span className={styles.breadcrumbSep}>›</span>
      <span>Partners</span>
    </nav>
  );
}

function PartnerCard({ name, hostedBy, hostedByUrl, description, url, logoUrl }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {logoUrl && <img src={logoUrl} alt={name} className={styles.logo} />}
        <div>
          <h3 className={styles.cardTitle}>{name}</h3>
          {hostedBy && (
            <p className={styles.hostedBy}>
              Hosted by{' '}
              <a href={hostedByUrl} target="_blank" rel="noopener noreferrer">
                {hostedBy}
              </a>
            </p>
          )}
        </div>
      </div>
      <p className={styles.cardDescription}>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.visitButton}>
        Visit openmobilehub.org ↗
      </a>
    </div>
  );
}

export default function Partners() {
  return (
    <Layout
      title="Partners"
      description="Organizations collaborating with Multipaz on open digital credentials">
      <main className={styles.main}>
        <Breadcrumb />
        <h1>Partners</h1>
        <p className={styles.intro}>
          Multipaz collaborates with leading open source organizations to build a robust,
          interoperable digital credentials ecosystem.
        </p>

        <div className={styles.partnerList}>
          <PartnerCard
            name="Open Mobile Hub (OMH)"
            hostedBy="Linux Foundation"
            hostedByUrl="https://linuxfoundation.org"
            description="Open Mobile Hub simplifies native and cross-platform mobile app development by abstracting away the challenges of platform fragmentation across Android, iOS, and more. OMH provides a unified, open source SDK framework that enables on-the-fly service switching within applications, allowing deployment across multiple device ecosystems with a single codebase."
            url="https://openmobilehub.org"
            logoUrl="https://github.com/openmobilehub.png"
          />
        </div>

        <div className={styles.cta}>
          <strong>Interested in partnering with Multipaz?</strong>
          <p>
            We welcome organizations working on digital identity, mobile development, and open
            standards. Reach out via our{' '}
            <a href="/contributing/contributing">Contributing guide</a> or open a discussion on{' '}
            <a
              href="https://github.com/openwallet-foundation/mdoc-lib/discussions"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </div>
      </main>
    </Layout>
  );
}
