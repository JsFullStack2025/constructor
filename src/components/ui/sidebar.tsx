"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MediaTab } from "./media-tab";
import { TemplatesTab } from "./templates-tab";

export function AppSidebar() {
  return (
    <div className="w-64 h-full border-r p-4">
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
  );
}