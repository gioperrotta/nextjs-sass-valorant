import Image from 'next/image'
import styles from './main.module.scss'

export const Main = () => (
  <main className={styles.container}>
    <div className={styles.title}>
      <Image
        src= "/background-logo.svg"
        width={140}
        height={99}
        alt='Logo Backgroud Valorant'
      />

      <h1>AGENTES</h1>

    </div>
    <div className={styles.characters}>listagem dos personagens</div>
  </main>
)