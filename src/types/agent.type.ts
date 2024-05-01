
interface Abilty {
  displayIcon: string
  displayName: string
}

export interface Agent {
  role: {
    displayName: string
  }
  displayName: string

  abilities: Abilty[]
  fullPortrait: string
}
