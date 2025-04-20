import { Save } from "lucide-react"
import { useContext } from "react"

import { ConstructorOptionsContext } from "@/modules/constructor/context/constructor-options.context"
import { ConstructorTempContext } from "@/modules/constructor/context/constructor-temp.context"

import { Button } from "@/shared/components/ui/button"

export function SaveButton() {
	const { temp } = useContext(ConstructorTempContext)
	const { onSave } = useContext(ConstructorOptionsContext)

	return (
		<Button
			onClick={() =>
				onSave({
					id: "0",
					name: "Example Project",
					elements: temp.elements
				})
			}
			className="h-full"
			variant="ghost"
		>
			<Save />
		</Button>
	)
}
