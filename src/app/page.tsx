'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import AIPopularPicks from './components/AIPopularPicks';
import { motion } from 'framer-motion';

export default function Home() {
  const [isGenerating, setIsGenerating] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-emerald-50 to-emerald-100">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">Personalized Recipes</h3>
              <p className="text-emerald-700">Get recipes tailored to your preferences, dietary restrictions, and available ingredients.</p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">Time-Saving</h3>
              <p className="text-emerald-700">No more endless recipe searching. Get exactly what you need, when you need it.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-emerald-900 mb-2">Smart Suggestions</h3>
              <p className="text-emerald-700">Discover new recipes and cooking techniques based on your preferences.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-emerald-900 text-center mb-12"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-semibold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Tell Us Your Preferences</h3>
              <p className="text-emerald-700">Share your dietary needs, favorite cuisines, and cooking style.</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-semibold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">AI Magic</h3>
              <p className="text-emerald-700">Our AI analyzes your preferences and creates personalized recipes.</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-semibold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Get Your Recipe</h3>
              <p className="text-emerald-700">Receive detailed instructions and ingredient lists tailored to you.</p>
            </motion.div>

            {/* Step 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-emerald-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-emerald-600 font-semibold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-emerald-900 mb-2">Cook & Enjoy</h3>
              <p className="text-emerald-700">Follow the instructions and create delicious meals at home.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Popular Picks Section */}
      <AIPopularPicks />

      {/* Trust Indicators Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-emerald-900 mb-2">2,000+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-900 mb-2">500+</div>
              <div className="text-gray-600">Recipes Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-900 mb-2">4.8/5</div>
              <div className="text-gray-600">User Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-900 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              Trusted by home chefs worldwide to create personalized recipes that match their preferences and dietary needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
