import Image from 'next/image'
import styles from './style.module.scss'

import { agent } from '@/data/agentes'
import { Agent } from '../Agent'

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
    <div className={styles.agents}>
      <Agent agent={agent}/>
      <Agent agent={agent}/>
      <Agent agent={agent}/>
      <Agent agent={agent}/>


    </div>
  </main>
)
