import { useState } from "react"

import {
	ConstructorTemp,
	ConstructorTempContext,
	defaultConstructorTemp
} from "../context/constructor-temp.context"

interface ConstructorTempProviderProps {
	children: React.ReactNode
}

export const ConstructorTempProvider: React.FC<
	ConstructorTempProviderProps
> = ({ children }) => {
	const [temp, setTemp] = useState<ConstructorTemp>(defaultConstructorTemp.temp)

	return (
		<ConstructorTempContext.Provider
			value={{
				temp,
				setTemp
			}}
		>
			{children}
		</ConstructorTempContext.Provider>
	)
}
