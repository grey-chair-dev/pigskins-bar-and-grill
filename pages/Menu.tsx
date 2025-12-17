
import React from 'react';
import { MENU_DATA } from '../constants';
import { Info, Star } from 'lucide-react';

const Menu: React.FC = () => {
  const categories = Array.from(new Set(MENU_DATA.map(item => item.category)));

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Accounts for main header (64px) + sticky sub-nav (approx 56px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <header className="bg-zinc-900 py-24 px-4 border-b border-zinc-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs">Freshly Prepared Daily</span>
          <h1 className="text-7xl font-black mb-4 tracking-tighter">THE LARDER</h1>
          <p className="text-zinc-500 text-xl font-kitchen">No heat lamps. No shortcuts. Just food you'll remember.</p>
        </div>
      </header>

      {/* Sticky Category Navigation */}
      <nav className="sticky top-16 z-40 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 shadow-xl overflow-x-auto no-scrollbar">
        <div className="max-w-6xl mx-auto px-4 flex space-x-8 py-4 whitespace-nowrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => scrollToCategory(category.toLowerCase())}
              className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500 pb-1"
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        {/* Expert Tip Section */}
        <div className="mb-20 p-8 bg-orange-600/5 border border-orange-600/20 rounded-sm flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center text-white">
            <Info size={32} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-orange-500 mb-1">PROPRIETOR'S NOTE:</h4>
            <p className="text-zinc-400 font-kitchen text-sm">
              We source our buns from Klosterman Baking Co. and our beef is a proprietary 80/20 blend of chuck and brisket. If you like your burger medium-rare, just say the word. Our wings take 15 minutes because they're cooked to order—never pre-fried.
            </p>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-24">
          {categories.map((category) => (
            <div key={category} id={category.toLowerCase()} className="scroll-mt-32">
              <h2 className="text-4xl font-black mb-10 text-orange-500 border-b-4 border-zinc-800 pb-4 flex justify-between items-baseline">
                {category}
                <span className="text-xs font-normal text-zinc-600 tracking-widest font-kitchen">PAGE {categories.indexOf(category) + 1}</span>
              </h2>
              <div className="space-y-12">
                {MENU_DATA.filter(item => item.category === category).map((item) => (
                  <div key={item.id} className="group relative">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-orange-500 transition-colors uppercase flex items-center flex-wrap">
                        {item.name}
                        {item.popular && (
                          <span className="ml-3 inline-flex items-center bg-orange-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm align-middle tracking-widest shadow-[0_0_15px_rgba(234,88,12,0.4)] animate-pulse">
                            <Star size={10} className="mr-1 fill-white" /> POPULAR
                          </span>
                        )}
                      </h3>
                      <div className="flex-grow border-b border-dotted border-zinc-700 mx-4 h-0 group-hover:border-orange-500/50 transition-colors"></div>
                      <span className="text-zinc-300 font-black text-xl">${item.price}</span>
                    </div>
                    <p className="text-zinc-500 text-base leading-relaxed font-kitchen italic">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 py-12 border-t border-zinc-800 text-center">
          <p className="text-zinc-600 text-xs font-kitchen max-w-2xl mx-auto uppercase tracking-widest leading-loose">
            * NOTICE: OUR KITCHEN HANDLES PEANUTS, SHELLFISH, AND DAIRY. ADVISE YOUR SERVER OF ANY ALLERGIES. CONSUMING RAW OR UNDERCOOKED PROTEINS INCREASES RISK OF FOODBORNE ILLNESS.
          </p>
        </div>
      </section>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Menu;
