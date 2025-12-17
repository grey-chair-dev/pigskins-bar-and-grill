
import React from 'react';
import { UPCOMING_EVENTS } from '../constants';
import { Calendar, Clock, MapPin, Tv } from 'lucide-react';

const Events: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-right-4 duration-500">
      <header className="bg-zinc-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-6 tracking-tighter">GAME DAY</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Cincinnati's home for the Bengals, Reds, Bearcats, and FC Cincinnati. 
            We never charge a cover. Just bring your passion.
          </p>
        </div>
      </header>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 flex items-center">
          <Calendar className="mr-3 text-orange-500" /> UPCOMING BROADCASTS & EVENTS
        </h2>
        
        <div className="space-y-6">
          {UPCOMING_EVENTS.map((event) => (
            <div 
              key={event.id}
              className={`p-6 rounded-2xl border transition-all ${
                event.highlight 
                  ? 'bg-orange-600/10 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.1)]' 
                  : 'bg-zinc-900 border-zinc-800'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-2">
                    {event.highlight && (
                      <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest">Featured</span>
                    )}
                    <div className="flex items-center text-zinc-500 text-sm">
                      <Clock size={14} className="mr-1" /> {event.date} @ {event.time}
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">{event.title}</h3>
                  <p className="text-zinc-400 max-w-2xl">{event.description}</p>
                </div>
                <div className="flex items-center space-x-3">
                   <div className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300">
                     <Tv size={20} />
                   </div>
                   <button className="px-6 py-3 bg-zinc-100 text-zinc-950 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all text-sm">
                     RESERVE TABLE
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">DRINK SPECIALS</h3>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Bengals Gameday Buckets (5)</span>
                <span className="text-white font-bold">$18</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Reds Draft Pitchers</span>
                <span className="text-white font-bold">$12</span>
              </li>
              <li className="flex justify-between border-b border-zinc-800 pb-2">
                <span>Cincinnati Chili Shooters</span>
                <span className="text-white font-bold">$5</span>
              </li>
            </ul>
          </div>
          <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 flex flex-col justify-center text-center">
            <MapPin className="mx-auto text-orange-500 mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-2">WATCH IT HERE</h3>
            <p className="text-zinc-400">Can't make it to the stadium? This is the next best thing. Sound is ALWAYS on for big games.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
