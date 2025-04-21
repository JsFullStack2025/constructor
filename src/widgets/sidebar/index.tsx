import { MediaTab } from "@/components/ui/media-tab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TemplatesTab } from "@/components/ui/templates-tab"

export function AppSidebar() {
	return (
		<div className="h-full w-64 border-r p-4">
			<Tabs defaultValue="templates" className="w-full">
				<TabsList className="grid w-full grid-cols-2">
					<TabsTrigger value="templates">Шаблоны</TabsTrigger>
					<TabsTrigger value="media">Медиа</TabsTrigger>
				</TabsList>

				<TabsContent value="templates">
					<TemplatesTab />
				</TabsContent>

				<TabsContent value="media">
					<MediaTab />
				</TabsContent>
			</Tabs>
		</div>
	)
}
