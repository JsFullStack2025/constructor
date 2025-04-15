import { Header } from "@/widgets/header"

import { defaultConstructorOptions } from "./context/constructor-options.context"
import { ConstructorOptions } from "./domain/types"
import { ConstructorProvider } from "./providers/constructor.provider"

type Props = {
	options?: ConstructorOptions
}

export function Constructor({ options = defaultConstructorOptions }: Props) {
	return (
		<ConstructorProvider options={options}>
			<Header />
			<div>Constructor</div>
		</ConstructorProvider>
	)
}
