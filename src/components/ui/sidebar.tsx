"use client"

import { Home, Image, LayoutTemplate, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"


export function AppSidebar() {
  const [activeTab, setActiveTab] = useState("templates")

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="fixed left-4 top-4 z-50">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-0 left-0">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Конструктор</h2>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </SheetTrigger>
          </div>

          <div className="flex-1 flex overflow-hidden">
            <div className="w-16 border-r flex flex-col items-center py-4 space-y-4">
              <Button
                variant={activeTab === "templates" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setActiveTab("templates")}
              >
                <LayoutTemplate className="h-5 w-5" />
              </Button>
              <Button
                variant={activeTab === "media" ? "secondary" : "ghost"}
                size="icon"
                onClick={() => setActiveTab("media")}
              >
                <Image className="h-5 w-5" />
              </Button>
            </div>

            <ScrollArea className="flex-1 p-4">
              {activeTab === "templates" && <TemplatesSection />}
              {activeTab === "media" && <MediaSection />}
            </ScrollArea>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function TemplatesSection() {
  const templates = [
    { id: 1, name: "Карточка товара", icon: <LayoutTemplate className="h-4 w-4" /> },
    { id: 2, name: "Галерея изображений", icon: <Image className="h-4 w-4" /> }
  ]

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Библиотека шаблонов</h3>
      <div className="grid grid-cols-2 gap-3">
        {templates.map((template) => (
          <Button
            key={template.id}
            variant="outline"
            className="flex flex-col items-center gap-2 h-24"
            onClick={() => console.log("Выбран шаблон:", template.name)}
          >
            {template.icon}
            <span className="text-xs">{template.name}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

function MediaSection() {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      console.log("Загружены файлы:", Array.from(files))
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-medium">Медиабиблиотека</h3>
        <Button asChild variant="outline" size="sm">
          <label className="cursor-pointer">
            Загрузить
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
              multiple
            />
          </label>
        </Button>
      </div>
      <div className="border rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground">
          Перетащите изображения сюда или нажмите "Загрузить"
        </p>
      </div>
    </div>
  )
}