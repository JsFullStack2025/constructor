import { useContext, useRef, useState } from "react"
import { ConstructorOptionsContext } from "../context/constructor-options.context"
import { ConstructorTempContext } from "../context/constructor-temp.context"
import { calculateElementStyle, calculateGridPosition, GRID_COLUMNS, GRID_ROWS } from "../domain/canvas.utils"
import { ConstructorElement } from "../context/constructor-temp.context"

export function ConstructorCanvas() {
  const { temp, setTemp } = useContext(ConstructorTempContext)
  const options = useContext(ConstructorOptionsContext)
  const canvasRef = useRef<HTMLDivElement>(null)
  const [draggedElement, setDraggedElement] = useState<string | null>(null)

  const selectedWidth = temp.selectedWidth || 1024
  const containerWidth = selectedWidth

  const handleDragStart = (e: React.DragEvent, elementId: string) => {
    setDraggedElement(elementId)
    e.dataTransfer.setData("text/plain", elementId)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    
    try {
      const elementData = JSON.parse(e.dataTransfer.getData("application/json")) as ConstructorElement
      
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        const { x, y } = calculateGridPosition(
          e.clientX - rect.left,
          e.clientY - rect.top,
          containerWidth,
          rect.height
        )

        const newElement = {
          ...elementData,
          x,
          y
        }

        setTemp({
          ...temp,
          elements: [...temp.elements, newElement]
        })
      }
    } catch (error) {
      // Если JSON не может быть разобран, выполнить операцию перемещения существующего элемента
      const elementId = e.dataTransfer.getData("text/plain")
      
      if (canvasRef.current && elementId) {
        const rect = canvasRef.current.getBoundingClientRect()
        const { x, y } = calculateGridPosition(
          e.clientX - rect.left,
          e.clientY - rect.top,
          containerWidth,
          rect.height
        )

        const updatedElements = temp.elements.map((element) =>
          element.id === elementId
            ? { ...element, x, y }
            : element
        )

        setTemp({ ...temp, elements: updatedElements })
      }
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  return (
    <div
      ref={canvasRef}
      className="relative bg-white border border-gray-200 rounded-lg shadow-sm"
      style={{
        width: `${containerWidth}px`,
        height: `${containerWidth * 0.75}px`,
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${GRID_COLUMNS}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: GRID_COLUMNS * GRID_ROWS }).map((_, i) => (
          <div
            key={i}
            className="border border-gray-100"
          />
        ))}
      </div>

      {/* Elements */}
      {temp.elements.map((element) => (
        <div
          key={element.id}
          draggable
          onDragStart={(e) => handleDragStart(e, element.id)}
          className="absolute bg-white border border-gray-300 rounded cursor-move hover:border-blue-500 transition-colors"
          style={calculateElementStyle(element, containerWidth)}
        >
          {/* Element content will be handled by the parent component */}
          <div className="w-full h-full flex items-center justify-center">
            {element.type}
          </div>
        </div>
      ))}
    </div>
  )
} 