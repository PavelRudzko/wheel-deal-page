import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-automotive-dark text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-accent to-automotive-orange rounded-lg"></div>
              <span className="text-xl font-bold">AutoParts Pro</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted partner for quality auto parts and exceptional service. 
              Serving automotive professionals and enthusiasts nationwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-accent">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-accent">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-accent">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-accent">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Products</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-accent transition-colors">Engine Parts</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Brakes & Suspension</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Electrical Systems</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Filters & Fluids</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Body Parts</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tools & Equipment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-accent transition-colors">Part Finder</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Technical Support</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Installation Guides</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Warranty Claims</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bulk Ordering</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Fleet Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Locations</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 AutoParts Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-accent text-sm transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;