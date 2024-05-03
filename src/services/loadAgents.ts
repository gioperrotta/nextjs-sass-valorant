import type { Agent } from "@/types/agent.type"

const LOCAL_KEY = '@valorant/agents'

export const loadAgents = async () => {
  const localData = window.localStorage.getItem(LOCAL_KEY);

  if (localData !== null) {
    return JSON.parse(localData)
  }

  const url = 'https://valorant-api.com/v1/agents?language=pt-BR'
  const response = await fetch(url).then(data => data.json())
  let data = response.data as Agent[]
  data = data.filter(agent => agent.fullPortrait)
  window.localStorage.setItem(LOCAL_KEY, JSON.stringify(data))

  return data
}
