import { Header } from "@/widgets/header"

import { defaultConstructorOptions } from "./context/constructor-options.context"
import { ConstructorOptions } from "./domain/types"
import { ConstructorProvider } from "./providers/constructor.provider"
import { ConstructorCanvas } from "./ui/canvas"
import { TestSidebar } from "./ui/test-sidebar"

type Props = {
	options?: ConstructorOptions
}

export function Constructor({ options = defaultConstructorOptions }: Props) {
	return (
		<ConstructorProvider options={options}>
			<Header />
			<div className="flex">
				<TestSidebar />
				<div className="flex-1 p-4">
					<ConstructorCanvas />
				</div>
			</div>
		</ConstructorProvider>
	)
}
