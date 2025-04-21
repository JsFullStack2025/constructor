import { ConstructorElement } from "../context/constructor-temp.context"

export const GRID_COLUMNS = 12
export const GRID_ROWS = 8

export const calculateGridPosition = (
  x: number,
  y: number,
  containerWidth: number,
  containerHeight: number
) => {
  const cellWidth = containerWidth / GRID_COLUMNS
  const cellHeight = containerHeight / GRID_ROWS

  return {
    x: Math.round(x / cellWidth),
    y: Math.round(y / cellHeight),
  }
}

export const calculateElementStyle = (
  element: ConstructorElement,
  containerWidth: number
) => {
  const cellWidth = containerWidth / GRID_COLUMNS
  const cellHeight = (containerWidth * 0.75) / GRID_ROWS // 4:3 aspect ratio

  return {
    position: "absolute" as const,
    left: `${element.x * cellWidth}px`,
    top: `${element.y * cellHeight}px`,
    width: `${element.w * cellWidth}px`,
    height: `${element.h * cellHeight}px`,
  }
}

export const isWithinGridBounds = (
  element: ConstructorElement,
  newX: number,
  newY: number,
  newW: number,
  newH: number
) => {
  return (
    newX >= 0 &&
    newY >= 0 &&
    newX + newW <= GRID_COLUMNS &&
    newY + newH <= GRID_ROWS
  )
} 