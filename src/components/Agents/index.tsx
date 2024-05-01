'use client'
import styles from './style.module.scss'
import { agent } from '@/data/agentes'
import { CardAgent } from '@/components/CardAgent'

import { Swiper, SwiperSlide } from 'swiper/react'

export const Agents = () => (
  <Swiper className={styles.agents} spaceBetween={16} slidesPerView={4}>
  <SwiperSlide>
    <CardAgent {...agent}/>
  </SwiperSlide>
  <SwiperSlide>
    <CardAgent {...agent}/>
  </SwiperSlide>
  <SwiperSlide>
    <CardAgent {...agent} />
  </SwiperSlide>
  <SwiperSlide>
    <CardAgent {...agent} />
  </SwiperSlide>
  <SwiperSlide>
    <CardAgent {...agent} />
  </SwiperSlide>
  <SwiperSlide>
    <CardAgent {...agent} />
  </SwiperSlide>
  <SwiperSlide>
    <CardAgent {...agent} />
  </SwiperSlide>
  <SwiperSlide>
    <CardAgent {...agent} />
  </SwiperSlide>
  <SwiperSlide>
    <CardAgent {...agent} />
  </SwiperSlide>
</Swiper>
)
