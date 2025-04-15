import { useContext } from "react"

import { ConstructorOptionsContext } from "@/modules/constructor/context/constructor-options.context"
import { ConstructorTempContext } from "@/modules/constructor/context/constructor-temp.context"

import { CanvasWidthSelector } from "@/shared/components/canvas-width-selector"

export function Header() {
	const options = useContext(ConstructorOptionsContext)
	const { temp, setTemp } = useContext(ConstructorTempContext)

	return (
		<div className="border-border flex w-full justify-between border-b p-2">
			<div>
				<CanvasWidthSelector
					onSelect={(width) => setTemp({ ...temp, selectedWidth: width })}
					options={options.screen || []}
					selectedWidth={temp.selectedWidth}
				/>
			</div>
			<div>Center</div>
			<div>Right</div>
		</div>
	)
}
