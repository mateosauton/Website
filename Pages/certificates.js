import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Certificates() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mateo Sauton's Certificates</title>
        <meta name="description" content="Mateo Sauton's Certificates" />
      </Head>

      <header className={styles.header}>
        <h1>Certificates</h1>
      </header>

      <nav className={styles.nav}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/resume"><a>Resume</a></Link>
        <Link href="/certificates"><a>Certificates</a></Link>
      </nav>

      <main className={styles.main}>
        <section className={styles.content}>
          <h2>Certificates</h2>
          <ul>
            <li>2023 - Product Management from XYZ University</li>
            <li>2022 - Agile and Scrum Certification from ABC Institute</li>
            <li>2021 - Blockchain Development from DEF Academy</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Mateo Sauton</p>
      </footer>
    </div>
  );
}
