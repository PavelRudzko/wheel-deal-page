import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock 
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-automotive-dark">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Need help finding the right part? Our automotive experts are here to help you get back on the road
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-automotive-dark">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-automotive-orange rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-dark mb-2">Phone</h4>
                  <p className="text-muted-foreground">
                    Sales: (555) 123-4567<br />
                    Support: (555) 123-4568
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-automotive-orange rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-dark mb-2">Email</h4>
                  <p className="text-muted-foreground">
                    info@autopartspro.com<br />
                    support@autopartspro.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-automotive-orange rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-dark mb-2">Address</h4>
                  <p className="text-muted-foreground">
                    VIA PISANA VECCHIA 82/1<br />
                    SOLESINO (PD), 35047
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-automotive-orange rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-automotive-dark mb-2">Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 8:00 PM<br />
                    Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-automotive-dark">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="First Name" className="border-gray-300" />
                  </div>
                  <div>
                    <Input placeholder="Last Name" className="border-gray-300" />
                  </div>
                </div>
                
                <Input placeholder="Email Address" type="email" className="border-gray-300" />
                <Input placeholder="Phone Number" type="tel" className="border-gray-300" />
                <Input placeholder="Vehicle Year, Make, Model" className="border-gray-300" />
                
                <Textarea 
                  placeholder="Tell us about the parts you need or any questions you have..."
                  className="min-h-32 border-gray-300"
                />
                
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
