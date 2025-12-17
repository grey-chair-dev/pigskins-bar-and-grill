
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-32 px-4 bg-zinc-900 border-b border-zinc-800 relative">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Manifesto</span>
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.8]">
            BUILT BY<br/>
            <span className="text-orange-500">CINCINNATI.</span>
          </h1>
          <div className="h-2 w-32 bg-orange-600 mx-auto mb-10"></div>
        </div>
      </section>

      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="space-y-12">
          <p className="text-3xl text-zinc-100 font-bold leading-tight italic">
            "I spent twenty years in commercial kitchens before opening Pigskins. I saw too many bars trade flavor for convenience. I opened this place to do the opposite."
          </p>
          
          <div className="prose prose-invert prose-orange max-w-none">
            <h2 className="text-4xl font-bold text-orange-500 uppercase tracking-tighter">THE PIGSKINS STANDARD</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-kitchen">
              We opened in 2008 with four taps and a grill that didn't know how to quit. Today, we've got more screens and more beer, but the philosophy hasn't moved an inch. We don't believe in "upselling" or "table turnover." We believe in a hot meal, a cold glass, and a place where you don't have to check your bank account just to enjoy the game.
            </p>

            <div className="my-20 relative">
               <img 
                 src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1500" 
                 className="w-full h-[500px] object-cover rounded-sm grayscale-[30%] shadow-2xl" 
                 alt="Kitchen Staff" 
               />
               <div className="absolute -bottom-6 -right-6 bg-orange-600 p-8 hidden md:block max-w-xs shadow-2xl border-4 border-zinc-950">
                  <h4 className="text-white font-black text-xl mb-2">LOCAL SOURCING</h4>
                  <p className="text-orange-100 text-xs font-kitchen">We proudy serve Klosterman buns, Glier's Goetta, and meats sourced from Ohio valley farms.</p>
               </div>
            </div>

            <h2 className="text-4xl font-bold text-orange-500 uppercase tracking-tighter">WHY WE'RE HERE</h2>
            <p className="text-zinc-400 text-lg leading-relaxed font-kitchen">
              Cincinnati is a city that works hard and roots harder. Whether it's a Bengals playoff run or a Tuesday night Reds game, this community deserves a hub that reflects that work ethic. Our staff are more than employees—they're your neighbors. They know your order because they care about your experience.
            </p>

            <div className="mt-20 p-12 bg-zinc-900 border-2 border-dashed border-zinc-700 text-center">
              <p className="text-zinc-500 font-kitchen uppercase tracking-widest text-sm mb-4">A Note From the Owner</p>
              <p className="text-2xl font-black text-white italic underline decoration-orange-600 decoration-4">"If it's not good enough for my table, it's not good enough for yours."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 py-24 px-4 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-6">WANT TO RUN WITH US?</h2>
          <p className="text-zinc-400 text-xl mb-10 font-kitchen">We hire for character, not just a resume. If you know your way around a high-volume kitchen or bar, we want to talk.</p>
          <button className="px-12 py-5 bg-white text-zinc-950 font-black rounded-sm hover:bg-orange-600 hover:text-white transition-all text-xl">
            SEND US A LINE
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
