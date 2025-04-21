import { createContext } from "react"

export interface ConstructorElement {
	id: string
	x: number
	y: number
	w: number
	h: number
	type: string
}

export interface ConstructorTemp {
	elements: ConstructorElement[]
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
