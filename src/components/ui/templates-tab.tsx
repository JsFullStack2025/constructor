"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const TEMPLATES = [
  {
    id: 1,
    name: "Шаблон карточки товара",
    description: "Готовый макет для отображения продукта",
    preview: "/template-placeholder-1.png"
  },
  {
    id: 2,
    name: "Шаблон галереи",
    description: "Макет для отображения изображений в сетке",
    preview: "/template-placeholder-2.png"
  }
];

export function TemplatesTab() {
  const applyTemplate = (templateName: string) => {
    console.log(`Применен шаблон: ${templateName}`);
  };

  return (
    <div className="mt-4 space-y-2">
      <h3 className="font-medium">Библиотека шаблонов</h3>
      
      {TEMPLATES.map((template) => (
        <Dialog key={template.id}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full text-left justify-start">
              {template.name}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div className="space-y-4">
              <h4 className="text-lg font-medium">{template.name}</h4>
              <p>{template.description}</p>
              
              <div className="border rounded-md p-4 bg-gray-50 flex items-center justify-center h-40">
                <span className="text-gray-400">Превью шаблона</span>
              </div>
              
              <Button 
                onClick={() => applyTemplate(template.name)}
                className="w-full"
              >
                Применить шаблон
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}