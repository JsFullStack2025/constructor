import { Laptop, Smartphone, Tablet } from "lucide-react"
import { createContext } from "react"

import { ScreenWidthOption } from "@/widgets/top-bar/domain/types"

import { Project } from "../domain/types"

export type ConstructorOptionsContextType = {
	screen: ScreenWidthOption[]
	onSave: (data: Project) => void
}

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
	],
	onSave: (data) => {
		console.log(data)
	}
}

export const ConstructorOptionsContext =
	createContext<ConstructorOptionsContextType>(defaultConstructorOptions)
