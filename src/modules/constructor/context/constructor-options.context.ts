import { Laptop, Smartphone, Tablet } from "lucide-react"
import { createContext } from "react"

import { ConstructorOptions } from "../domain/types"

export type ConstructorOptionsContextType = ConstructorOptions

export const defaultConstructorOptions: ConstructorOptionsContextType = {
	screen: [
		{
			icon: Laptop,
			width: 1024
		},
		{
			icon: Tablet,
			width: 768
		},
		{
			icon: Smartphone,
			width: 320
		}
	]
}

export const ConstructorOptionsContext =
	createContext<ConstructorOptionsContextType>(defaultConstructorOptions)
