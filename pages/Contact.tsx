
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Phone, Mail, MapPin, ExternalLink, ParkingCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-left-4 duration-500">
      <header className="bg-zinc-900 py-16 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">VISIT US</h1>
          <p className="text-zinc-400 text-lg">We're right in the middle of it all. Come say hi.</p>
        </div>
      </header>

      <section className="py-20 px-4 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Info Column */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <MapPin className="text-orange-500 mr-3" /> LOCATION
            </h2>
            <p className="text-xl text-zinc-300 mb-4">{BUSINESS_INFO.address}</p>
            <a 
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-orange-500 font-bold hover:underline"
            >
              OPEN IN GOOGLE MAPS <ExternalLink size={16} className="ml-1" />
            </a>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Phone className="text-orange-500 mr-3" /> CONTACT
            </h2>
            <div className="space-y-4">
              <p className="text-zinc-400 flex items-center">
                <span className="font-bold text-white w-24">Phone:</span>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="hover:text-orange-500">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="text-zinc-400 flex items-center">
                <span className="font-bold text-white w-24">Email:</span>
                <a href="mailto:info@pigskinscincy.com" className="hover:text-orange-500">
                  info@pigskinscincy.com
                </a>
              </p>
            </div>
          </div>

          <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <ParkingCircle className="text-orange-500 mr-2" /> PARKING NOTES
            </h3>
            <p className="text-zinc-400">
              Free street parking is available after 6 PM. There is also a dedicated lot directly behind the building for Pigskins customers. Look for the orange signs!
            </p>
          </div>
        </div>

        {/* Map Column (Placeholder) */}
        <div className="h-[400px] lg:h-full min-h-[400px] bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden relative group">
          <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center text-center p-8">
            <div>
              <MapPin size={48} className="text-orange-500 mx-auto mb-4 animate-bounce" />
              <p className="text-zinc-400 font-medium">Interactive Map View Placeholder</p>
              <p className="text-zinc-500 text-sm mt-2">Integrating Google Maps API...</p>
            </div>
          </div>
          {/* Overlay to encourage clicking to actual maps */}
          <a 
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-zinc-950/20 group-hover:bg-zinc-950/0 transition-colors flex items-end p-8"
          >
            <div className="bg-white text-zinc-950 px-4 py-2 rounded-lg font-bold shadow-lg flex items-center">
              VIEW ON MAP <ExternalLink size={16} className="ml-2" />
            </div>
          </a>
        </div>
      </section>

      {/* Large CTA */}
      <section className="bg-zinc-900 py-20 border-t border-zinc-800 text-center">
        <h2 className="text-5xl font-black mb-6">READY TO WATCH THE GAME?</h2>
        <p className="text-zinc-400 text-xl mb-10 max-w-2xl mx-auto px-4">
          Tables fill up fast on Sundays. We recommend arriving 45 minutes before kickoff to grab your favorite spot.
        </p>
        <a 
           href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`}
           className="px-10 py-5 bg-orange-600 hover:bg-orange-700 text-white font-black rounded-xl transition-all text-xl"
        >
          CALL US NOW
        </a>
      </section>
    </div>
  );
};

export default Contact;
