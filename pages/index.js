import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Blockkart</title>
        <meta name="description" content="Blockkart | The decentralized Ecommerce platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Blockkart.
        </h1>

        <p className={styles.description}>
          Next generation decentralized ecommerce platform.
        </p>
        <p className={styles.description}>
          Built on SKALE blockchain.
        </p>
      </main>

      <footer className={styles.footer}>
          Powered by SKALE blockchain.
      </footer>
    </div>
  )
}
