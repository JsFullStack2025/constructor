import { ConstructorOptions } from "../domain/types"

import { ConstructorOptionsProvider } from "./constructor-options.provider"
import { ConstructorTempProvider } from "./constructor-temp.provider"

export function ConstructorProvider({
	children,
	options
}: {
	children: React.ReactNode
	options?: ConstructorOptions
}) {
	return (
		<ConstructorTempProvider>
			<ConstructorOptionsProvider options={options}>
				{children}
			</ConstructorOptionsProvider>
		</ConstructorTempProvider>
	)
}
