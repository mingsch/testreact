

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <Map />
            <p className="text-sm text-ming-dark/70 mt-2 italic">
              <MapPin className="inline-block h-4 w-4 mr-1" />
              Toggle between Map and Street View using the controls in the top right corner.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold font-serif mb-6 text-ming-black">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-ming-red/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-ming-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-ming-black">Opening Hours</h4>
                  <div className="text-ming-dark/70 mt-1">
                    <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-2">
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
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-ming-red/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-ming-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-ming-black">Address</h4>
                  <p className="text-ming-dark/70 mt-1">
                    465 Phillip Street, Waterloo, ON N2L 6C7
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-ming-red/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-ming-red" />
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

