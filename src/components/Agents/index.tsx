'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

import { Agent } from '@/types/agent.type'
import { CardAgent } from '@/components/CardAgent'
import { loadAgents } from '@/services/loadAgents'

import styles from './style.module.scss'

// import { agent } from '@/data/agentes'

export const Agents = () => {
  const [agents, setAgents] = useState<Agent[]>([])

  const loadData = async () => {
    const data = await loadAgents()
    setAgents(data)
  }


  useEffect(() => {
    loadData()
  }, [])


  return (
    <Swiper className={styles.agents} spaceBetween={16} slidesPerView={4} >
      {agents.map(agent => (
        <SwiperSlide key={agent.displayName}>
          <CardAgent {...agent} />
        </SwiperSlide>
      ))}
    </Swiper >
  )
}

