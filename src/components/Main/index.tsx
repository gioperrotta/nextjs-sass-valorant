'use client'
import Image from 'next/image'
import styles from './style.module.scss'


import 'swiper/css'
import { Agents } from '../Agents'

export const Main = () => (
  <main className={styles.container}>
    <div className={styles.title}>
      <Image
        src="/background-logo.svg"
        width={140}
        height={99}
        alt='Logo Backgroud Valorant'
      />

      <h1>AGENTES</h1>

    </div>
    <Agents/>

  </main>
)
