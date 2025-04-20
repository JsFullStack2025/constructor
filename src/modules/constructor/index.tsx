import { TopBar } from "@/widgets/top-bar"
import { ScreenWidthOption } from "@/widgets/top-bar/domain/types"

import { defaultConstructorOptions } from "./context/constructor-options.context"
import { Project } from "./domain/types"
import { ConstructorProvider } from "./providers/constructor.provider"

type Props = {
	screen?: ScreenWidthOption[]
	onSave: (data: Project) => void
}

export function Constructor({
	screen = defaultConstructorOptions.screen,
	onSave = defaultConstructorOptions.onSave
}: Props) {
	return (
		<ConstructorProvider screen={screen} onSave={onSave}>
			<TopBar />
			<div>Constructor</div>
		</ConstructorProvider>
	)
}
