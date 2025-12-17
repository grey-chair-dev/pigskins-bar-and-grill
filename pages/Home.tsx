
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Beer, Utensils, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section - Authority First */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden border-b border-orange-600/20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=2070" 
            className="w-full h-full object-cover grayscale-[40%] contrast-[1.2] brightness-[0.3]"
            alt="Pigskins Bar Atmosphere"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="inline-block px-3 py-1 bg-orange-600 text-white font-oswald text-xs tracking-[0.2em] mb-6 rounded-sm shadow-lg">
            ESTABLISHED 2008 • CINCINNATI, OH
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 leading-[0.9] orange-glow">
            LOCAL SPIRIT.<br/>
            <span className="text-orange-500">NO GIMMICKS.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 font-medium mb-10 max-w-2xl mx-auto font-kitchen">
            We don't do reservations. We don't do craft small-plates. We do cold pours and heavy plates for the fans who know the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/menu" 
              className="group w-full sm:w-auto px-10 py-5 bg-orange-600 hover:bg-orange-500 text-white font-black rounded-sm transition-all flex items-center justify-center text-lg"
            >
              BROWSE THE MENU <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <a 
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 border-2 border-zinc-700 hover:border-orange-500 text-white font-black rounded-sm transition-all text-lg flex items-center justify-center"
            >
              <MapPin className="mr-2" size={20} /> GET DIRECTIONS
            </a>
          </div>
        </div>
      </section>

      {/* The "Pro" Differentiators */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">WHY WE'RE THE LOCAL CALL</h2>
          <div className="h-1.5 w-24 bg-orange-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-zinc-900 border-l-4 border-orange-600">
            <Trophy className="text-orange-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4 italic">Audio On. Always.</h3>
            <p className="text-zinc-400 font-kitchen text-sm">Every Sunday. Every Bengals game. We sync the audio to the broadcast. You aren't just watching; you're at the game.</p>
          </div>
          <div className="p-8 bg-zinc-900 border-l-4 border-zinc-700 hover:border-orange-600 transition-colors">
            <Utensils className="text-orange-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4 italic">Kitchen Accountability</h3>
            <p className="text-zinc-400 font-kitchen text-sm">We hand-patty our burgers every morning. No frozen bags. No mystery meat. Real ingredients for real appetites.</p>
          </div>
          <div className="p-8 bg-zinc-900 border-l-4 border-zinc-700 hover:border-orange-600 transition-colors">
            <ShieldCheck className="text-orange-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4 italic">The Neighborhood Post</h3>
            <p className="text-zinc-400 font-kitchen text-sm">The staff knows the regulars, and the regulars know the game. This is the spot where you can show up solo and leave with five new friends.</p>
          </div>
        </div>
      </section>

      {/* Immediate Utility: The "Right Now" Section */}
      <section className="bg-zinc-900/50 py-24 px-4 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">THE GAMEDAY PROMISE</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="p-4 bg-zinc-950 border border-zinc-800">
              <span className="block text-3xl font-black text-orange-500">24</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">4K SCREENS</span>
            </div>
            <div className="p-4 bg-zinc-950 border border-zinc-800">
              <span className="block text-3xl font-black text-orange-500">16</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">LOCAL TAPS</span>
            </div>
            <div className="p-4 bg-zinc-950 border border-zinc-800">
              <span className="block text-3xl font-black text-orange-500">0</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">COVERS</span>
            </div>
            <div className="p-4 bg-zinc-950 border border-zinc-800">
              <span className="block text-3xl font-black text-orange-500">∞</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest">WHO DEY SPIRIT</span>
            </div>
          </div>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Stop by for the game, stay for the pours. We're currently pouring fresh <span className="text-orange-500 font-bold">Rhinegeist</span> and the kitchen is open until midnight.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
