import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '/Users/Desktop/Personal/Website//styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mateo Sauton</title>
        <meta name="description" content="Mateo Sauton's personal website" />
      </Head>

      <header className={styles.header}>
        <h1>Mateo Sauton</h1>
        <p>Chief Technology Officer at n1u</p>
      </header>

      <nav className={styles.nav}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/resume"><a>Resume</a></Link>
        <Link href="/certificates"><a>Certificates</a></Link>
      </nav>

      <main className={styles.main}>
        <section className={styles.intro}>
          <Image src="/A_product_manager_solving_fintech_and_blockchain_p.png" alt="Product Manager Solving Fintech and Blockchain Problems" width={600} height={400} />
          <p>Leading Innovation in Fintech and Blockchain - Achieving Greatness Through Expertise and Passion.</p>
        </section>

        <section className={styles.summary}>
          <h2>Professional Summary</h2>
          <p>As a dedicated and innovative professional with extensive experience in product management and telecommunications engineering, I have successfully led projects in the fintech and blockchain sectors. My work at n1u, Agrotoken, and Everis has been driven by a passion for technological advancement and user-focused solutions.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Mateo Sauton</p>
      </footer>
    </div>
  );
}
