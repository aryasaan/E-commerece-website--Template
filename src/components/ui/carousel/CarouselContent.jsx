import * as React from "react"
import { cn } from "@/lib/utils"
import { useCarousel } from "./CarouselBase"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel()

  return (
    <div ref={carouselRef} className="overflow-hidden w-full">
      <div ref={ref} className={cn("flex", className)} {...props} />
    </div>
  )
})
CarouselContent.displayName = "CarouselContent"

export { CarouselContent }