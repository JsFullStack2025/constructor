import { v4 as uuidv4 } from "uuid"

const TEST_ELEMENTS = [
  { type: "text", w: 4, h: 2, label: "Текстовое поле" },
  { type: "image", w: 6, h: 4, label: "image" },
  { type: "button", w: 3, h: 1, label: "Кнопка" },
  { type: "divider", w: 12, h: 1, label: "Разделитель" },
]

export function TestSidebar() {
  const handleDragStart = (e: React.DragEvent, element: typeof TEST_ELEMENTS[0]) => {
    const elementData = {
      id: uuidv4(),
      x: 0,
      y: 0,
      ...element
    }
    e.dataTransfer.setData("application/json", JSON.stringify(elementData))
  }

  return (
    <div className="w-64 bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Test Elementleri</h2>
      <div className="space-y-2">
        {TEST_ELEMENTS.map((element, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, element)}
            className="p-3 bg-gray-50 border border-gray-200 rounded cursor-move hover:bg-gray-100 transition-colors"
          >
            <div className="font-medium">{element.label}</div>
            <div className="text-sm text-gray-500">
              {element.w}x{element.h} grid
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 