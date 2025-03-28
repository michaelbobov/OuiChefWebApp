'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';

export default function PreferencesPage() {
  const [preferences, setPreferences] = useState({
    dietary: ['Vegetarian'],
    allergies: ['None'],
    cuisineTypes: ['Italian'],
    cookingTime: '30 mins',
    skillLevel: 'Intermediate'
  });

  const dietaryOptions = ['None', 'Vegetarian', 'Vegan', 'Pescatarian', 'Keto', 'Paleo'];
  const allergyOptions = ['None', 'Nuts', 'Dairy', 'Eggs', 'Shellfish', 'Gluten'];
  const cuisineOptions = ['Italian', 'Chinese', 'Mexican', 'Indian', 'Japanese', 'Mediterranean'];
  const timeOptions = ['15 mins', '30 mins', '45 mins', '60 mins', '90+ mins'];
  const skillOptions = ['Beginner', 'Intermediate', 'Advanced'];

  const handleSave = () => {
    // TODO: Save preferences and redirect to generate page
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Cooking Preferences</h1>
              <p className="text-gray-600">
                Tell us about your dietary needs and cooking style to get better recipe recommendations
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              {/* Dietary Preferences */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Dietary Preferences</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {dietaryOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={preferences.dietary.includes(option)}
                        onChange={() => {/* Handle change */}}
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Allergies */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Allergies & Restrictions</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {allergyOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={preferences.allergies.includes(option)}
                        onChange={() => {/* Handle change */}}
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Cuisine Types */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Preferred Cuisines</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {cuisineOptions.map((option) => (
                    <label key={option} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={preferences.cuisineTypes.includes(option)}
                        onChange={() => {/* Handle change */}}
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Cooking Time */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Preferred Cooking Time</h2>
                <select
                  value={preferences.cookingTime}
                  onChange={(e) => {/* Handle change */}}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 rounded-md"
                >
                  {timeOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Skill Level */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Cooking Skill Level</h2>
                <select
                  value={preferences.skillLevel}
                  onChange={(e) => {/* Handle change */}}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-orange-500 focus:border-orange-500 rounded-md"
                >
                  {skillOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                className="w-full bg-orange-500 text-white py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 