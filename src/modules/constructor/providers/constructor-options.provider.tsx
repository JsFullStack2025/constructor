import {
	ConstructorOptionsContext,
	defaultConstructorOptions
} from "../context/constructor-options.context"
import { ConstructorOptions } from "../domain/types"

export function ConstructorOptionsProvider({
	options = defaultConstructorOptions,
	children
}: {
	options?: ConstructorOptions
	children: React.ReactNode
}) {
	return (
		<ConstructorOptionsContext.Provider
			value={{ ...defaultConstructorOptions, ...options }}
		>
			{children}
		</ConstructorOptionsContext.Provider>
	)
}
