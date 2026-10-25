
import { Clock, MapPin, Phone } from "lucide-react";
import { publicAsset } from "@/lib/publicAsset";

const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">About Ming's</h2>
          <p className="section-subtitle">Serving authentic Chinese cuisine since 1984</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed font-medium text-gray-800">
              Established in 1984, Ming's Chinese Restaurant has been a cornerstone of the Waterloo community for over 40 years. Our journey began with a simple mission: to share authentic Chinese flavors with our neighbors while creating a warm, welcoming atmosphere for every guest.
            </p>
            
            <p className="text-lg leading-relaxed font-medium text-gray-800">
              At Ming's, we take pride in our traditional recipes while embracing modern culinary techniques to create dishes that are both authentic and innovative.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-ming-red/10 rounded-full p-3">
                  <Clock className="h-6 w-6 text-ming-red" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Opening Hours</h4>
                  <div className="text-gray-800 grid grid-cols-2 gap-2 mt-1">
                    <div>Monday</div>
                    <div>11:00 AM - 8:30 PM</div>
                    
                    <div>Tuesday</div>
                    <div>11:00 AM - 8:30 PM</div>
                    
                    <div>Wednesday</div>
                    <div>11:00 AM - 8:30 PM</div>

                    <div>Thursday</div>
                    <div>11:00 AM - 8:30 PM</div>
                    
                    <div>Friday</div>
                    <div>11:00 AM - 8:30 PM</div>
                    
                    <div>Saturday</div>
                    <div>3:30 PM - 8:30 PM</div>
                    
                    <div>Sunday & Holidays</div>
                    <div>3:30 PM - 8:30 PM</div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-ming-red/10 rounded-full p-3">
                  <MapPin className="h-6 w-6 text-ming-red" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-800">465 Phillip Street, Waterloo, ON N2L 6C7</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-ming-red/10 rounded-full p-3">
                  <Phone className="h-6 w-6 text-ming-red" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Contact</h4>
                  <p className="text-gray-800">
                    <a href="tel:+15198887460" className="hover:text-ming-red transition-colors">(519) 888-7460</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-lg shadow-xl h-[400px] md:h-[500px]">
            <img src={publicAsset("/images/interior.png")} alt="Ming's Restaurant Interior" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};

export default About;
