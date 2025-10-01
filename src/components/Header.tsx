import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-accent to-automotive-orange rounded-lg"></div>
            <span className="text-xl font-bold text-automotive-dark">AutoParts Pro</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">Home</a>
            <a href="#products" className="text-foreground hover:text-accent transition-colors">Products</a>
            <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+39 328 931 2672</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>info@zarinatradeautoparts.eu</span>
              </div>
            </div>
            <Button variant="hero" size="sm">Get Quote</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
