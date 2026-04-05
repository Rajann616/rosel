import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Flower2, Film, Video } from 'lucide-react';

export default function App() {
  const videoUrl = "/lv_7600306943520967937_20260405135152.mp4";

  return (
    <div className="min-h-screen bg-[#fff0f3] font-sans text-[#590d22] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden selection:bg-[#ff8fa3] selection:text-white">
      {/* Floating Cherry Blossom Petals */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="absolute text-[#ffb3c6]/40 pointer-events-none z-0"
          initial={{ top: -50, left: `${Math.random() * 100}%`, rotate: 0 }}
          animate={{
            top: '100vh',
            left: `${Math.random() * 100}%`,
            rotate: 360
          }}
          transition={{
            duration: 15 + Math.random() * 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
        >
          <Flower2 className="w-8 h-8 fill-current" />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -4, 0] }}
        transition={{ 
          opacity: { duration: 0.6 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
        className="w-full max-w-xl bg-white/90 backdrop-blur-sm border border-[#ffccd5] shadow-[8px_8px_0px_0px_rgba(255,179,198,0.4)] rounded-2xl p-6 sm:p-10 relative z-10"
      >
        {/* Swaying Decorative Flowers */}
        <motion.div
          animate={{ rotate: [-8, 8, -8], transformOrigin: "bottom center" }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-6 -left-6 text-[#ffb3c6] opacity-90"
        >
          <Flower2 className="w-14 h-14 fill-current" />
        </motion.div>
        <motion.div
          animate={{ rotate: [8, -8, 8], transformOrigin: "bottom center" }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-6 -right-6 text-[#ffb3c6] opacity-90"
        >
          <Flower2 className="w-14 h-14 fill-current" />
        </motion.div>

        <div className="text-center mb-8 relative">
          <motion.h1 
            animate={{ 
              textShadow: [
                "0px 2px 4px rgba(201,24,74,0.1)", 
                "0px 2px 12px rgba(201,24,74,0.5)", 
                "0px 2px 4px rgba(201,24,74,0.1)"
              ] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-cursive text-4xl sm:text-5xl text-[#c9184a] mb-2"
          >
            My Wildest Dream
          </motion.h1>
          <motion.p 
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="font-vintage text-lg text-[#ff758f] italic"
          >
            Like cherry blossoms blooming in the early spring...
          </motion.p>
        </div>

        <div className="flex flex-col items-center">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            animate={{ 
              boxShadow: [
                "0px 0px 0px rgba(255,204,213,0)", 
                "0px 0px 20px rgba(255,179,198,0.6)", 
                "0px 0px 0px rgba(255,204,213,0)"
              ] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="bg-[#fff0f3] p-3 shadow-sm border border-[#ffccd5] rounded-xl relative w-full"
          >
            <div className="bg-white flex items-center justify-center overflow-hidden rounded-lg border border-[#ffccd5] relative group">
              <video src={videoUrl} controls autoPlay loop className="w-full h-auto max-h-[70vh] object-contain" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
