import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wanderlust Beer Garden, Easton Pa</title>
        <meta
          name='description'
          content='Wanderlust Beer Garden | Easton, Pa'
        />
        <link rel='icon' href='/wanderlust_W_.ico' />
      </Head>

      <h1 className={styles.title}>Wanderlust</h1>
      <h2 className={styles.subtitle}>Beer Garden</h2>

      <footer className={styles.footer}>
        <a
          href='https://duanemcdonald.com'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by <strong>Duane McDonald</strong>
        </a>
      </footer>
    </div>
  );
}
