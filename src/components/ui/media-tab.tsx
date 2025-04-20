"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function MediaTab() {
  const [files, setFiles] = useState<File[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const images = Array.from(selectedFiles).filter(file => 
        file.type.match('image.*')
      );
      setFiles(images);
      console.log("Выбранные изображения:", images);
    }
  };

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Медиа</h3>
        <Button asChild>
          <label className="cursor-pointer">
            Загрузить
            <input 
              type="file" 
              accept="image/png, image/jpeg, image/webp" 
              onChange={handleImageUpload}
              className="hidden"
              multiple
            />
          </label>
        </Button>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        {files.map((file, index) => (
          <div key={index} className="border rounded-md p-2">
            <img 
              src={URL.createObjectURL(file)} 
              alt={file.name}
              className="w-full h-20 object-cover rounded"
            />
            <p className="text-xs truncate mt-1">{file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}