'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './style.module.scss'

import { CardAgent } from '@/components/CardAgent'

import { Agent } from '@/types/agent.type'

// import { agent } from '@/data/agentes'

export const Agents = () => {
  const [agents, setAgents] = useState<Agent[]>([])
  const loadAgents = async () => {
    const url = 'https://valorant-api.com/v1/agents?language=pt-BR'
    const response = await fetch(url).then(data => data.json())
    const data = response.data as Agent[]
    setAgents(data.filter(agent => agent.fullPortrait))

  }

  useEffect(() => {
    loadAgents()
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

