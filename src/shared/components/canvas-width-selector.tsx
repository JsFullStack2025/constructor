import { useContext } from "react"

import { ConstructorOptionsContext } from "@/modules/constructor/context/constructor-options.context"
import { ConstructorTempContext } from "@/modules/constructor/context/constructor-temp.context"

import { Button } from "./ui/button"

export function CanvasWidthSelector() {
	const options = useContext(ConstructorOptionsContext)
	const { temp, setTemp } = useContext(ConstructorTempContext)

	return (
		<div className="flex items-center space-x-1 rounded-md border bg-white p-1">
			{options.screen?.map((option) => (
				<Button
					variant={temp.selectedWidth === option.width ? "secondary" : "ghost"}
					key={option.width}
					onClick={() => setTemp({ ...temp, selectedWidth: option.width })}
					size="icon"
					className="h-8 w-8"
				>
					<option.icon className="h-4 w-4" />
				</Button>
			))}
		</div>
	)
}
