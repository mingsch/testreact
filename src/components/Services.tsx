
import { Utensils, MapPin, ShoppingBag, Truck } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-ming-red/10 text-ming-red mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-ming-black">{title}</h3>
      <p className="text-ming-dark/80">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-ming-light/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Experience convenience and excellent service when you dine with us</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={<Utensils className="h-6 w-6" />} 
            title="Dine-In" 
            description="Enjoy authentic Chinese cuisine in our elegant and comfortable dining space"
          />
          
          <ServiceCard 
            icon={<ShoppingBag className="h-6 w-6" />} 
            title="Takeout" 
            description="Call ahead or order online for convenient pickup at our location"
          />
          
          <ServiceCard 
            icon={<Truck className="h-6 w-6" />} 
            title="Delivery" 
            description="We deliver to Waterloo, Kitchener, and surrounding areas for your convenience"
          />
          
          <ServiceCard 
            icon={<MapPin className="h-6 w-6" />} 
            title="Central Location" 
            description="Conveniently located in the heart of Waterloo, easy parking available"
          />
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-ming-black">Areas We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-ming-red/5 rounded-md">
              <h4 className="font-medium text-ming-black mb-2">Waterloo</h4>
              <ul className="text-ming-dark/80 space-y-1">
                <li>Uptown Waterloo</li>
                <li>University District</li>
                <li>Westvale</li>
                <li>Lakeshore</li>
              </ul>
            </div>
            
            <div className="p-4 bg-ming-red/5 rounded-md">
              <h4 className="font-medium text-ming-black mb-2">Kitchener (Fees may apply)</h4>
              <ul className="text-ming-dark/80 space-y-1">
                <li>Downtown Kitchener</li>
                <li>Highland West</li>
                <li>Laurentian Hills</li>
                <li>Grand River</li>
              </ul>
            </div>
            
            <div className="p-4 bg-ming-red/5 rounded-md">
              <h4 className="font-medium text-ming-black mb-2">Additional Areas (Fees apply)</h4>
              <ul className="text-ming-dark/80 space-y-1">
                <li>St. Jacobs</li>
                <li>Conestogo</li>
                <li>Elmira</li>
              </ul>
            </div>
          </div>
          <p className="text-ming-dark/80 text-sm mt-4 font-bold">Additional charges may apply depending on order and/or location. All credit/debit purchases will be charged an additional $1.50. Please call for details.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
