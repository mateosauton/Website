import Head from 'next/head';
import Link from 'next/link';
import styles from '/Users/Desktop/Personal/Website//styles/Home.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Mateo Sauton</title>
        <meta name="description" content="About Mateo Sauton" />
      </Head>

      <header className={styles.header}>
        <h1>About Mateo Sauton</h1>
      </header>

      <nav className={styles.nav}>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/resume"><a>Resume</a></Link>
        <Link href="/certificates"><a>Certificates</a></Link>
      </nav>

      <main className={styles.main}>
        <section className={styles.content}>
          <h2>Career Journey</h2>
          <h3>2023 - Present: CTO at N1U</h3>
          <p>Leading the development of scalable and secure fintech solutions, and managing an interdisciplinary user/product-focused team.</p>
          <h3>2021 - 2023: Product Manager at Agrotoken</h3>
          <p>Led project management for a stablecoin application, wallet app, and credit card, utilizing Algorand/Ethereum/Polygon blockchain technologies.</p>
          <h3>2019 - 2021: RPA Senior Engineer at Everis</h3>
          <p>Certified Automation Anywhere Master Professional, experienced in Agile and Scrum methodologies.</p>
          <h3>2018 - 2021: Teacher Assistant at Universidad Nacional de San Martin</h3>
          <p>Assisted in the Informatics course for engineers, specializing in C programming on Ubuntu.</p>
          <h3>2016 - 2023: Telecommunications Engineering Student</h3>
          <p>Universidad Nacional de San Martin</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Mateo Sauton</p>
      </footer>
    </div>
  );
}
