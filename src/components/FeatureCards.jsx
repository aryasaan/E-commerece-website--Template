import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const features = [
  {
    title: "Feature 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://source.unsplash.com/random/400x300?feature1",
  },
  {
    title: "Feature 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://source.unsplash.com/random/400x300?feature2",
  },
  {
    title: "Feature 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    image: "https://source.unsplash.com/random/400x300?feature3",
  },
  {
    title: "Feature 4",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
    image: "https://source.unsplash.com/random/400x300?feature4",
  },
];

const FeatureCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;