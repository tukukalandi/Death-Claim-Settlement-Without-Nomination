/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { slides } from './slides';
import { ChatAssistant } from './components/ChatAssistant';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [jumpInput, setJumpInput] = useState('');
  const [isJumping, setIsJumping] = useState(false);


  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleJumpSubmit = (e: React.FormEvent | React.FocusEvent) => {
    e.preventDefault();
    const slideNum = parseInt(jumpInput, 10);
    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= slides.length) {
      setCurrentSlide(slideNum - 1);
    }
    setIsJumping(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className={`min-h-screen bg-white dark:bg-black flex items-center justify-center font-sans ${isDark ? 'dark' : ''}`}>
      <div 
        className="w-full h-[100dvh] md:h-auto md:aspect-[16/9] max-h-[100dvh] relative bg-slate-100 dark:bg-slate-900 overflow-hidden shadow-2xl flex flex-col"
        style={{ maxWidth: isFullscreen ? '100vw' : '1600px' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-full flex-1 min-h-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Left/Right Click Areas for Navigation */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-24 z-10 cursor-pointer flex items-center justify-start opacity-0 hover:opacity-100 transition-opacity hidden sm:flex" onClick={prevSlide}>
          {currentSlide > 0 && (
            <div className="ml-2 md:ml-4 p-2 md:p-4 rounded-full bg-slate-100/50 dark:bg-slate-900/50 text-slate-950 dark:text-white backdrop-blur-sm">
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          )}
        </div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-24 z-10 cursor-pointer flex items-center justify-end opacity-0 hover:opacity-100 transition-opacity hidden sm:flex" onClick={nextSlide}>
          {currentSlide < slides.length - 1 && (
            <div className="mr-2 md:mr-4 p-2 md:p-4 rounded-full bg-slate-100/50 dark:bg-slate-900/50 text-slate-950 dark:text-white backdrop-blur-sm">
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          )}
        </div>

        {/* Controls Overlay */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-4 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-full border border-slate-300/50 dark:border-slate-700/50 shadow-xl z-20">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-1.5 md:p-2 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <div className="flex items-center text-slate-600 dark:text-slate-300 font-medium font-mono min-w-[4rem] md:min-w-[5rem] justify-center text-sm md:text-base">
            {isJumping ? (
              <form onSubmit={handleJumpSubmit} className="flex items-center">
                <input
                  type="number"
                  min={1}
                  max={slides.length}
                  autoFocus
                  onKeyDown={(e) => e.stopPropagation()}
                  className="w-8 md:w-10 bg-transparent border-b border-red-500 text-center outline-none focus:border-red-400 text-red-600 dark:text-red-400 p-0 m-0"
                  value={jumpInput}
                  onChange={(e) => setJumpInput(e.target.value)}
                  onBlur={handleJumpSubmit}
                />
                <span className="ml-1">/ {slides.length}</span>
              </form>
            ) : (
              <span 
                className="cursor-pointer hover:text-red-600 dark:hover:text-red-400 transition-colors px-2 py-0.5 rounded"
                onClick={() => {
                  setJumpInput(String(currentSlide + 1));
                  setIsJumping(true);
                }}
                title="Jump to slide"
              >
                {currentSlide + 1} / {slides.length}
              </span>
            )}
          </div>
          
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-1.5 md:p-2 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="w-px h-5 md:h-6 bg-slate-300 dark:bg-slate-700 mx-1 md:mx-2" />

          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-1.5 md:p-2 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
          </button>

          <button 
            onClick={toggleFullscreen}
            className="p-1.5 md:p-2 text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 hidden sm:block"
            aria-label="Toggle Fullscreen"
          >
            <Maximize className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Global indicator when controls are hidden */}
        <div className="absolute bottom-4 md:bottom-6 right-4 md:right-8 text-slate-500/50 dark:text-slate-500/50 font-mono text-xs md:text-sm pointer-events-none">
          {currentSlide + 1} / {slides.length}
        </div>
        <ChatAssistant />
      </div>
    </div>
  );
}
