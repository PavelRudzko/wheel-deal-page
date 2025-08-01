import { Card, CardContent } from "@/components/ui/card";
import { 
  Truck, 
  Shield, 
  Clock, 
  Users, 
  Search, 
  Award 
} from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Same-day processing and free shipping on orders over $99. Express options available."
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "All parts backed by manufacturer warranties and our 30-day satisfaction guarantee."
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer service and technical support from automotive experts."
  },
  {
    icon: Search,
    title: "Part Finder",
    description: "Advanced search tools and VIN lookup to find the exact parts for your vehicle."
  },
  {
    icon: Users,
    title: "Expert Advice",
    description: "Professional installation guidance and technical support from certified mechanics."
  },
  {
    icon: Award,
    title: "Trusted Brands",
    description: "Authorized dealer for top manufacturers like Bosch, ACDelco, Motorcraft, and more."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-automotive-dark">
            Why Choose AutoParts Pro?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional service and the highest quality parts for your automotive needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-automotive-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-automotive-dark">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;