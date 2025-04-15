import React from "react"

import { ScreenWidthOption } from "@/widgets/header/domain/types"

import { Button } from "./ui/button"

interface CanvasWidthSelectorProps {
	options: ScreenWidthOption[]
	onSelect: (width: number) => void
	selectedWidth?: number
}

export const CanvasWidthSelector: React.FC<CanvasWidthSelectorProps> = ({
	options,
	onSelect,
	selectedWidth
}) => {
	return (
		<div className="flex items-center space-x-1 rounded-md border bg-white p-1">
			{options.map((option) => (
				<Button
					variant={selectedWidth === option.width ? "secondary" : "ghost"}
					key={option.width}
					onClick={() => onSelect(option.width)}
					size="icon"
					className="h-8 w-8"
				>
					<option.icon className="h-4 w-4" />
				</Button>
			))}
		</div>
	)
}
