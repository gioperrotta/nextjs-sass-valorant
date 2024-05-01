'use client'
import Image from 'next/image'
import styles from './style.module.scss'

import { agent } from '@/data/agentes'
import { Agent } from '../Agent'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

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
    <Swiper className={styles.agents} spaceBetween={16} slidesPerView={4}>
      <SwiperSlide>
        <Agent agent={agent} />
      </SwiperSlide>
      <SwiperSlide>
        <Agent agent={agent} />
      </SwiperSlide>
      <SwiperSlide>
        <Agent agent={agent} />
      </SwiperSlide>
      <SwiperSlide>
        <Agent agent={agent} />
      </SwiperSlide>
      <SwiperSlide>
        <Agent agent={agent} />
      </SwiperSlide>
      <SwiperSlide>
        <Agent agent={agent} />
      </SwiperSlide>
      <SwiperSlide>
        <Agent agent={agent} />
      </SwiperSlide>
      <SwiperSlide>
        <Agent agent={agent} />
      </SwiperSlide>
      <SwiperSlide>
        <Agent agent={agent} />
      </SwiperSlide>
    </Swiper>
  </main>
)
