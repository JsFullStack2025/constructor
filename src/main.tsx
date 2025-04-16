import { createRoot } from "react-dom/client"

import { Constructor } from "./modules/constructor"

createRoot(document.getElementById("root")!).render(
	<main>
		<Constructor
			onSave={(data) => {
				console.log(data)
			}}
		/>
	</main>
)
