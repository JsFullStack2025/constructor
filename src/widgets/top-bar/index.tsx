import { CanvasWidthSelector } from "@/shared/components/canvas-width-selector"

import { SaveButton } from "@/features/save-button"

export function TopBar() {
	return (
		<div className="border-border flex w-full justify-between border-b p-2">
			<div className="flex items-center gap-2">
				<SaveButton />
			</div>
			<div className="flex items-center gap-2">
				<CanvasWidthSelector />
			</div>
			<div className="flex items-center gap-2">Right</div>
		</div>
	)
}
