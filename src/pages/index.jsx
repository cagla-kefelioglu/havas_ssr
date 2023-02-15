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

      <div className={styles.tabBar}>
        <Link href="/route">Go Back</Link>
        <p>
          Client-side Rendered Post</p>

      </div>
      <div className={styles.home}>
        <figure className={styles.figur}><img src="" alt="" /></figure>
        <h2 className={styles.h2}>Example Post with Hygraph and NextJS</h2>
        <p>Berkay Urun</p>
        <p>Feb 1st, 2023</p>
        <div className={styles.bar}></div>
        <p className={styles.paragraf}>Donec sed tortor vitae ligula interdum varius. Sed varius quam metus, non faucibus dolor fringilla et. Nulla facilisi. Sed non massa semper, mollis augue eu, tempus leo. Duis id enim bibendum, sollicitudin augue vel, volutpat lacus. Duis et sapien sit amet dolor maximus molestie et et sapien. Mauris consectetur cursus imperdiet.
<br></br><br></br>
Integer interdum lacus id nulla iaculis tincidunt. Morbi id mauris et enim pretium semper et a ipsum. Aenean iaculis magna sed sodales lacinia. Donec dictum sodales lorem, eu fermentum nisl imperdiet et. Proin finibus dolor ac dignissim molestie. Donec ultrices quam fringilla sagittis aliquet. Maecenas ex libero, finibus eu tortor ac, imperdiet luctus sem.

Morbi placerat libero vehicula dapibus blandit. Nullam est ex, finibus nec diam ac, porttitor euismod libero. Nulla sit amet nisl dolor. Aliquam erat volutpat. Nunc eget orci velit. Sed mollis odio tincidunt tortor imperdiet, vel tristique nisi congue. In vel dui dictum, aliquet elit ac, lacinia libero. Donec ultrices quis nunc ac lacinia. Suspendisse ultricies lorem augue, ut venenatis orci luctus at.</p>
      </div>



    </>
  );
}
export default Home;