import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from "next/link"
import React from 'react'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Primary Rendering Pattern </title>
      </Head>

      <div className={styles.genelDiv}>
        <div className={styles.icDiv}>
          <p>
            Use the Buttons Below to Visit a Page with a Different Rendering Pattern 🤌🏻
          </p>

        </div>

      </div>
      <div className={styles.link}>
        <Link href="/route">CSR</Link>
        <Link href="/route">SSG</Link>
        <Link href="/route">SSR</Link>
      </div>



    </>
  );
}
export default Home;