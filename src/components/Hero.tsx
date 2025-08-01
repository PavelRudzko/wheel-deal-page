import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-autoparts.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-automotive-dark/90 to-automotive-steel/80"></div>
      </div>
      
      <div className="relative container mx-auto px-4 z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Auto Parts
            <span className="block text-accent">for Every Vehicle</span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Quality guaranteed parts from trusted manufacturers. Fast shipping, 
            expert support, and competitive prices for all your automotive needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="hero" size="lg" className="text-lg">
              Shop Now <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg border-white text-white hover:bg-white hover:text-automotive-dark">
              Get Expert Help
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Free Shipping Over $99</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;