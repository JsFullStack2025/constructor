import { ScreenWidthOption } from "@/widgets/top-bar/domain/types"

import { Project } from "../domain/types"

import { ConstructorOptionsProvider } from "./constructor-options.provider"
import { ConstructorTempProvider } from "./constructor-temp.provider"

type Props = {
	children: React.ReactNode
	screen?: ScreenWidthOption[]
	onSave: (data: Project) => void
}

export function ConstructorProvider({ children, screen, onSave }: Props) {
	return (
		<ConstructorTempProvider>
			<ConstructorOptionsProvider screen={screen} onSave={onSave}>
				{children}
			</ConstructorOptionsProvider>
		</ConstructorTempProvider>
	)
}
