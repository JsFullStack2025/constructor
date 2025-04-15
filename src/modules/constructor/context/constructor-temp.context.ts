import { createContext } from "react"

export interface ConstructorTemp {
	elements: never[]
	selectedWidth?: number
}

export type ConstructorTempContextType = {
	temp: ConstructorTemp
	setTemp: (temp: ConstructorTemp) => void
}

export const defaultConstructorTemp: ConstructorTempContextType = {
	temp: {
		elements: [],
		selectedWidth: 1024
	},
	setTemp: () => {}
}

export const ConstructorTempContext = createContext<ConstructorTempContextType>(
	defaultConstructorTemp
)
