import React, { useState } from 'react';
import HandTracker from './components/HandTracker';
import TarotExperience from './components/TarotExperience';
import { AppState, GestureType, HandData } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.INTRO);
  const [handData, setHandData] = useState<HandData>({
    gesture: GestureType.UNKNOWN,
    position: { x: 0, y: 0 },
    velocity: { x: 0, y: 0 }
  });

  const handleStart = () => {
    setAppState(AppState.EXPERIENCE);
  };

  return (
    <div className="w-screen h-screen bg-[#050505] text-white relative overflow-hidden">
      
      {/* Background Aesthetic for Intro */}
      {appState === AppState.INTRO && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-20 filter blur-sm"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
           
           <h1 className="relative font-cinzel text-5xl md:text-7xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-amber-100 to-emerald-200 tracking-wider text-center drop-shadow-lg">
             ARCANA GESTUS
           </h1>
           <p className="relative font-serif text-emerald-100/60 text-lg md:text-xl italic mb-12 tracking-wide text-center max-w-xl">
             "Where your hand guides the threads of fate. Reveal the unseen through movement."
           </p>
           
           <button 
             onClick={handleStart}
             className="relative group px-12 py-4 bg-transparent border border-emerald-500/30 overflow-hidden transition-all duration-500 hover:border-emerald-400"
           >
             <span className="absolute inset-0 w-full h-full bg-emerald-900/20 group-hover:bg-emerald-900/40 transition-all duration-500"></span>
             <span className="relative font-cinzel text-emerald-100 tracking-[0.2em] text-sm group-hover:text-white transition-colors">
               ENTER THE VOID
             </span>
           </button>
           
           <div className="relative mt-16 flex gap-8 text-xs text-emerald-500/40 font-mono tracking-widest uppercase">
              <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center">✊</div>
                 <span>Stack</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center">✋</div>
                 <span>Shuffle</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                 <div className="w-8 h-8 border border-current rounded-full flex items-center justify-center">☝️</div>
                 <span>Select</span>
              </div>
           </div>
        </div>
      )}

      {/* Experience Layer */}
      {appState === AppState.EXPERIENCE && (
        <>
          <HandTracker onHandUpdate={setHandData} />
          <TarotExperience handData={handData} />
          
          {/* Subtle vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
          
          {/* Logo Watermark */}
          <div className="absolute top-6 left-6 pointer-events-none opacity-50">
             <h2 className="font-cinzel text-emerald-500/50 text-xs tracking-[0.3em]">ARCANA</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
