import { createRoot } from "react-dom/client"

import { Button } from "./shared/components/ui/button"

createRoot(document.getElementById("root")!).render(
	<main>
		<Button>Hello World</Button>
	</main>
)
