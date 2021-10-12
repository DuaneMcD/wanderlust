import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import wicon from '../public/images/wanderlust_W_.ico';
import wanderlust from '../public/images/wanderlust_beer_garden_textonly_Wanderlust.svg';
import beer_garden from '../public/images/wanderlust_beer_garden_textonly_Beer Garden.svg';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wanderlust Beer Garden, Easton Pa</title>
        <meta
          name='description'
          content='Wanderlust Beer Garden | Easton, Pa'
        />
        <link rel='icon' href={wicon} />
      </Head>

      <h1 className={styles.title}>
        <Image src={wanderlust} width='800' alt='logo'></Image>
      </h1>
      <h2 className={styles.subtitle}>
        <Image src={beer_garden} width='700' alt='logo'></Image>
      </h2>

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
