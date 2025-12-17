
import React from 'react';

const TICKER_ITEMS = [
  { label: 'FINAL', text: 'BENGALS 27 - RAVENS 24', highlight: true },
  { label: 'LIVE', text: 'REDS 5 - CUBS 2 (TOP 8TH)', highlight: true },
  { label: 'NEWS', text: 'JOE BURROW NAMED AFC OFFENSIVE PLAYER OF THE WEEK', highlight: false },
  { label: 'UPCOMING', text: 'BEARCATS VS UCF - SATURDAY 3:30 PM', highlight: false },
  { label: 'PROMO', text: '$12 PITCHERS DURING ALL REDS GAMES', highlight: true },
  { label: 'LIVE', text: 'FC CINCINNATI 1 - INTER MIAMI 1 (HALF)', highlight: true },
  { label: 'FINAL', text: 'BUCKEYES 42 - SPARTANS 10', highlight: false },
];

const SportsTicker: React.FC = () => {
  // We double the items to create a seamless loop
  const displayItems = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div className="bg-black border-b border-zinc-800 h-8 flex items-center overflow-hidden select-none">
      <div className="animate-ticker whitespace-nowrap flex items-center">
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex items-center px-8 border-r border-zinc-800/50">
            <span className={`text-[10px] font-black uppercase tracking-tighter mr-3 px-1.5 py-0.5 rounded-sm ${
              item.label === 'LIVE' ? 'bg-red-600 text-white animate-pulse' : 
              item.label === 'FINAL' ? 'bg-zinc-700 text-zinc-300' :
              'bg-orange-600 text-white'
            }`}>
              {item.label}
            </span>
            <span className={`text-xs font-bold uppercase tracking-widest ${item.highlight ? 'text-zinc-100' : 'text-zinc-400'}`}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsTicker;
