
import React from "react";
import Map from "./Map";
import { Clock, Phone, MapPin } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-slate-50">
      <div className="container-custom">
        <h2 className="section-title text-center">Find Us</h2>
        <p className="section-subtitle text-center">
          Visit us today and experience authentic Chinese cuisine at Ming's Restaurant.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 mt-12">
          <div className="lg:col-span-3">
            <Map />
            <p className="text-sm text-ming-dark/70 mt-2 italic">
              <MapPin className="inline-block h-4 w-4 mr-1" />
              Toggle between Map and Street View using the controls in the top right corner.
            </p>
          </div>
          
          <div className="lg:col-span-2 bg-white p-5 sm:p-6 rounded-lg shadow-md self-start">
            <h3 className="text-2xl font-bold font-serif mb-6 text-ming-black">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="bg-ming-red/10 p-2 rounded-full shrink-0">
                  <Clock className="h-5 w-5 text-ming-red" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-ming-black">Opening Hours</h4>
                  <div className="text-ming-dark/70 mt-1 space-y-1">
                    {[
                      ["Monday", "11:00 AM - 8:30 PM"],
                      ["Tuesday", "11:00 AM - 8:30 PM"],
                      ["Wednesday", "11:00 AM - 8:30 PM"],
                      ["Thursday", "11:00 AM - 8:30 PM"],
                      ["Friday", "11:00 AM - 8:30 PM"],
                      ["Saturday", "3:30 PM - 8:30 PM"],
                      ["Sunday & Holidays", "3:30 PM - 8:30 PM"],
                    ].map(([day, hours]) => (
                      <div
                        key={day}
                        className="flex items-baseline justify-between gap-2 whitespace-nowrap text-[12px] sm:text-[13px] lg:text-sm"
                      >
                        <span className="font-medium text-ming-black">{day}</span>
                        <span>{hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-ming-red/10 p-2 rounded-full shrink-0">
                  <MapPin className="h-5 w-5 text-ming-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-ming-black">Address</h4>
                  <p className="text-ming-dark/70 mt-1">
                    465 Phillip Street, Waterloo, ON N2L 6C7
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-ming-red/10 p-2 rounded-full shrink-0">
                  <Phone className="h-5 w-5 text-ming-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-ming-black">Phone</h4>
                  <a 
                    href="tel:+15198887460" 
                    className="text-ming-dark/70 hover:text-ming-red transition-colors text-lg font-medium"
                  >
                    (519) 888-7460
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
