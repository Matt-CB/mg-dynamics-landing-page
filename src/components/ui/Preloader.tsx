import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Easing function for smooth loading (ease-out cubic)
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    
    let startTime: number | null = null;
    const duration = 2500; // total 2.5 seconds loading experience
    let reqId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);
      
      const easedProgress = easeOutCubic(rawProgress);
      setProgress(Math.floor(easedProgress * 100));

      if (rawProgress < 1) {
        reqId = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsReady(true), 400); // Small pause at 100%
      }
    };

    reqId = requestAnimationFrame(animate);

    return () => {
      if (reqId) cancelAnimationFrame(reqId);
    };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isReady && (
        <motion.div
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#F5F5F7] text-black pointer-events-none"
          initial={{ opacity: 1, y: 0 }}
          exit={{ 
            y: '-100%', 
            transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] } 
          }}
        >
          {/* Central Architectural/Precision Graphic (Structural Grid Build-up) */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[280px] h-[280px] md:w-[500px] md:h-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Corner Brackets */}
            <motion.div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t-[1px] border-l-[1px] border-black/30" initial={{ opacity: 0, x: -10, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} />
            <motion.div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t-[1px] border-r-[1px] border-black/30" initial={{ opacity: 0, x: 10, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} />
            <motion.div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b-[1px] border-l-[1px] border-black/30" initial={{ opacity: 0, x: -10, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} />
            <motion.div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b-[1px] border-r-[1px] border-black/30" initial={{ opacity: 0, x: 10, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} />

            {/* Horizontal Lines */}
            {[0, 20, 40, 60, 80, 100].map((pos, i) => (
              <motion.div
                key={`h-${i}`}
                className="absolute left-0 h-[1px] bg-black/[0.08] w-full"
                style={{ top: `${pos}%`, originX: i % 2 === 0 ? 0 : 1 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: [0.77, 0, 0.175, 1] }}
              />
            ))}

            {/* Vertical Lines */}
            {[0, 20, 40, 60, 80, 100].map((pos, i) => (
              <motion.div
                key={`v-${i}`}
                className="absolute top-0 w-[1px] bg-black/[0.08] h-full"
                style={{ left: `${pos}%`, originY: i % 2 === 0 ? 0 : 1 }}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: [0.77, 0, 0.175, 1] }}
              />
            ))}

            {/* Pulsing Nodes at Key Intersections */}
            {[20, 40, 60, 80].map((x) => 
              [20, 40, 60, 80].map((y) => (
                <motion.div
                  key={`node-${x}-${y}`}
                  className="absolute w-[3px] h-[3px] bg-black/30 -ml-[1px] -mt-[1px]"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0.5], scale: [0, 1.5, 1] }}
                  transition={{ duration: 0.8, delay: 1 + (x+y)*0.003, ease: "easeOut" }}
                />
              ))
            )}

            {/* Central Core (Data Matrix / AI Core) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
              {/* Containment Frame */}
              <motion.div 
                className="absolute w-12 h-12 md:w-16 md:h-16 border-[1px] border-black/10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.0, ease: [0.77, 0, 0.175, 1] }}
              />
              {/* Inner Matrix Grid */}
              <div className="grid grid-cols-3 gap-1 md:gap-[6px]">
                {[...Array(9)].map((_, i) => (
                  <motion.div
                    key={`core-block-${i}`}
                    className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 1.2 + (i * 0.05), 
                      ease: [0.77, 0, 0.175, 1]
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Scanning Line */}
            <motion.div
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/40 to-transparent"
              initial={{ top: "0%", opacity: 0 }}
              animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2.5, delay: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
            />
          </motion.div>

          <div className="absolute inset-x-0 bottom-12 flex justify-between px-12 items-end w-full">
            <motion.div 
              className="flex flex-col gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-[10px] tracking-[0.3em] font-semibold uppercase opacity-50 mb-1">
                System Initialization
              </div>
              <div className="text-[9px] tracking-[0.2em] font-mono text-black/40 h-4 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={Math.floor(progress / 15)} // Change text several times during load
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="uppercase whitespace-nowrap"
                  >
                    {progress < 15 ? "> BOOTING CORE..." :
                     progress < 30 ? "> VALIDATING NETWORK_GRAPH..." :
                     progress < 45 ? "> LOADING ROBOTICS_MODULE..." :
                     progress < 60 ? "> SYNCHRONIZING REAL_ESTATE..." :
                     progress < 80 ? "> ASSEMBLING ECOSYSTEM..." :
                     progress < 100 ? "> CALIBRATING IMPACT_METRICS..." :
                     "> SYSTEM READY"}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
            
            <div className="flex flex-col items-end">

              <motion.div 
                className="text-8xl md:text-[120px] font-sans font-medium tracking-tighter leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {progress}%
              </motion.div>
              <div className="h-[2px] bg-black mt-4 transition-all duration-100 ease-out origin-right" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
