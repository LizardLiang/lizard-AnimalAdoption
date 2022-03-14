import { createContext } from 'react'

export const DogInfo = createContext({
  animalList: [],
  setAnimalList: () => {},
  info: {},
  setInfo: () => {}
})

