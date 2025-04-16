import { ScreenWidthOption } from "@/widgets/top-bar/domain/types"

import {
	ConstructorOptionsContext,
	defaultConstructorOptions
} from "../context/constructor-options.context"
import { Project } from "../domain/types"

type Props = {
	screen?: ScreenWidthOption[]
	onSave: (data: Project) => void
	children: React.ReactNode
}

export function ConstructorOptionsProvider({
	screen = defaultConstructorOptions.screen,
	onSave = defaultConstructorOptions.onSave,
	children
}: Props) {
	return (
		<ConstructorOptionsContext.Provider value={{ screen, onSave }}>
			{children}
		</ConstructorOptionsContext.Provider>
	)
}
