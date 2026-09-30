import React, { useState, useEffect } from 'react';
import { Orbit, Radio, Globe } from 'lucide-react';

export const SystemStatusWidget: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside aria-label="Orbital telemetry widget" className="fixed bottom-4 left-4 z-30 hidden md:block">
      <div className="p-3 border border-cyan-500/25 bg-[#05070E]/85 backdrop-blur-md text-[10px] font-mono text-slate-300 shadow-[0_0_20px_rgba(0,0,0,0.6)] flex items-center gap-4 transition-all duration-300">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-white font-semibold">
            SECTOR / 01
          </span>
        </div>

        <span className="text-slate-600">|</span>

        <span className="hidden lg:inline text-cyan-200">
          ORBIT: JHANSI_IN
        </span>

        <span className="text-slate-600 hidden lg:inline">|</span>

        <span className="text-cyan-400">
          IST {time || '15:44:00'}
        </span>

        <span className="text-slate-600">|</span>

        <span className="text-[9px] uppercase tracking-widest text-slate-400">
          VELOCITY: NOMINAL
        </span>
      </div>
    </aside>
  );
};
