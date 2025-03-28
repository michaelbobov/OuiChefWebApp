'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const router = useRouter();

  const handleStartCooking = () => {
    router.push('/generate');
  };

  return (
    <section className="bg-gradient-to-b from-emerald-50 to-emerald-100 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-800 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-700 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-16 md:pt-32 pb-20 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Phone Mockup - Positioned higher and wider */}
          <motion.div 
            initial={{ opacity: 0, x: -100, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block w-64 h-[500px] relative -mt-20 -ml-32"
          >
            <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden transform -rotate-6">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-[2.5rem] flex items-center justify-center">
                <div className="w-32 h-4 bg-gray-800 rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-emerald-50 p-4">
                <div className="space-y-4">
                  <div className="h-4 bg-emerald-200 rounded w-3/4"></div>
                  <div className="h-4 bg-emerald-200 rounded w-1/2"></div>
                  <div className="h-4 bg-emerald-200 rounded w-2/3"></div>
                  <div className="h-4 bg-emerald-200 rounded w-1/3"></div>
                  <div className="h-4 bg-emerald-200 rounded w-4/5"></div>
                  <div className="h-4 bg-emerald-200 rounded w-2/3"></div>
                  <div className="h-4 bg-emerald-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-900 rounded-b-[2.5rem]"></div>
            </div>
          </motion.div>

          {/* Center Content - Made more prominent */}
          <div className="max-w-3xl mx-auto text-center relative z-10 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-7xl font-bold text-emerald-900 mb-4 md:mb-6 leading-tight"
            >
              Your Personal Chef, Powered by AI
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-2xl text-gray-700 mb-8 md:mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Tell us what you like, and we'll create personalized recipes just for you. No more recipe hunting - just delicious meals tailored to your taste.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex justify-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={handleStartCooking}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-500 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-emerald-600 hover:scale-105 hover:shadow-lg active:scale-100"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Start Cooking
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Phone Mockup - Positioned lower and wider */}
          <motion.div 
            initial={{ opacity: 0, x: 100, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:block w-64 h-[500px] relative -mb-20 -mr-32"
          >
            <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden transform rotate-6">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 rounded-t-[2.5rem] flex items-center justify-center">
                <div className="w-32 h-4 bg-gray-800 rounded-full"></div>
              </div>
              <div className="absolute inset-0 bg-emerald-50 p-4">
                <div className="space-y-4">
                  <div className="h-4 bg-emerald-200 rounded w-2/3"></div>
                  <div className="h-4 bg-emerald-200 rounded w-1/2"></div>
                  <div className="h-4 bg-emerald-200 rounded w-3/4"></div>
                  <div className="h-4 bg-emerald-200 rounded w-1/3"></div>
                  <div className="h-4 bg-emerald-200 rounded w-4/5"></div>
                  <div className="h-4 bg-emerald-200 rounded w-2/3"></div>
                  <div className="h-4 bg-emerald-200 rounded w-1/2"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-6 bg-gray-900 rounded-b-[2.5rem]"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 