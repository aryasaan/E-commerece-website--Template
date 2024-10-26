import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

const CarouselContext = React.createContext(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
  return context
}

const Carousel = React.forwardRef(({ className, ...props }, ref) => {
  const autoplayPlugin = React.useMemo(() => Autoplay({ delay: 5000, stopOnInteraction: false }), [])
  const [carouselRef, api] = useEmblaCarousel({ loop: true }, [autoplayPlugin])

  return (
    <CarouselContext.Provider value={{ carouselRef, api }}>
      <div ref={ref} className={cn("w-full", className)} {...props} />
    </CarouselContext.Provider>
  )
})
Carousel.displayName = "Carousel"

export { Carousel, useCarousel }