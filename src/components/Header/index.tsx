import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import styles from './style.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/riot-games.svg"
          width={52}
          height={26}
          alt="Logo da riot games"
        />

        <span className={styles.divider}/>

        <Image
          src="/valorant.svg"
          width={22}
          height={26}
          alt="Logo do valorant"
        />

        <nav className={styles.nav}>
          <a href='#'>Game</a>
          <a href='#'>Champions</a>
          <a href='#'>News</a>
          <a href='#'>Patch notes</a>
          <a href='#'>Shop</a>
          <a href='#'>Support</a>
        </nav>

        <div className={styles.user}>
          <picture>
            <Image
              className='styles.image'
              src="/avatar.jpeg"
              alt="Imagem Avatar"
              layout="fill"
            />

          </picture>
          <strong>Gio Perrotta</strong>
          <ChevronUp size={24} />
        </div>



      </div>

    </header>

  )
}
