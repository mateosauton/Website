import Head from 'next/head';
import Link from 'next/link';
import styles from '/Users/Desktop/Personal/Website//styles/Home.module.css';

export default function Resume() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mateo Sauton's Resume</title>
        <meta name="description" content="Mateo Sauton's Resume" />
      </Head>

      <header className={styles.header}>
        <h1>Resume</h1>
      </header>

      <nav className={styles.nav}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/resume"><a>Resume</a></Link>
        <Link href="/certificates"><a>Certificates</a></Link>
      </nav>

      <main className={styles.main}>
        <section className={styles.content}>
          <h2>Download My Resume</h2>
          <p>Download my resume <a href="/Mateo_Sauton_CV.pdf" download>here</a>.</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Mateo Sauton</p>
      </footer>
    </div>
  );
}
