import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const slides = [
  {
    image: "https://source.unsplash.com/random/1200x400?business",
    title: "Welcome to Our Platform",
    description: "Discover amazing features and services",
  },
  {
    image: "https://source.unsplash.com/random/1200x400?technology",
    title: "Innovation at Its Best",
    description: "Leading the way in technological advancement",
  },
  {
    image: "https://source.unsplash.com/random/1200x400?creative",
    title: "Creative Solutions",
    description: "Bringing your ideas to life",
  },
  {
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    title: "Remote Work Solutions",
    description: "Work from anywhere, anytime",
  },
  {
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Modern Technology",
    description: "Cutting-edge solutions for your needs",
  },
  {
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Advanced Infrastructure",
    description: "Built on robust technology",
  },
  {
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    title: "Expert Development",
    description: "Professional solutions for your business",
  },
];

const HeroCarousel = () => {
  return (
    <div className="w-full mt-16">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[300px] sm:h-[400px] w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-4 text-center">
                  <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">{slide.title}</h2>
                  <p className="text-lg sm:text-xl">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;