import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Cog, 
  Zap, 
  Disc, 
  Filter, 
  Wrench, 
  Car,
  ArrowRight 
} from "lucide-react";

const categories = [
  {
    icon: Cog,
    title: "Engine Parts",
    description: "Pistons, gaskets, timing belts, and complete engine assemblies",
    itemCount: "2,500+ items"
  },
  {
    icon: Disc,
    title: "Brakes & Suspension",
    description: "Brake pads, rotors, shocks, struts, and suspension components",
    itemCount: "1,800+ items"
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Batteries, alternators, starters, and electrical accessories",
    itemCount: "1,200+ items"
  },
  {
    icon: Filter,
    title: "Filters & Fluids",
    description: "Oil filters, air filters, transmission fluid, and lubricants",
    itemCount: "900+ items"
  },
  {
    icon: Car,
    title: "Body Parts",
    description: "Bumpers, lights, mirrors, and exterior accessories",
    itemCount: "3,200+ items"
  },
  {
    icon: Wrench,
    title: "Tools & Equipment",
    description: "Professional tools, diagnostic equipment, and shop supplies",
    itemCount: "650+ items"
  }
];

const ProductCategories = () => {
  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-automotive-dark">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the exact parts you need from our comprehensive inventory of quality automotive components
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 bg-white">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-automotive-orange rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground font-medium">
                      {category.itemCount}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-automotive-dark group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <Button variant="ghost" className="w-full group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    Browse Category <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;