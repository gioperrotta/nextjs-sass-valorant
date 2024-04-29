import { Main } from '@/components/Main'
import styles from './home.module.scss'
import { Header } from '@/components/Header'

const HomePage = () => (
  <div className={styles.container}>

      <Header/>

      <Main/>
  </div>
)

export default HomePage
