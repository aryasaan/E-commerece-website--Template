import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

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
];

const HeroCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroCarousel;