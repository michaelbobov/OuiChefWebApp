'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProfileData {
  // Personal Info
  name: string;
  email: string;
  
  // Dietary Preferences
  dietary: string[];
  allergies: string[];
  
  // Cooking Preferences
  cookingExperience: string;
  kitchenEquipment: string[];
}

export default function ProfilePage() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileData>({
    name: '',
    email: '',
    dietary: [],
    allergies: [],
    cookingExperience: '',
    kitchenEquipment: []
  });

  const dietaryOptions = ['None', 'Vegetarian', 'Vegan', 'Pescatarian', 'Keto', 'Paleo', 'Mediterranean', 'Halal', 'Kosher'];
  const allergyOptions = ['None', 'Peanuts', 'Tree Nuts', 'Dairy', 'Eggs', 'Soy', 'Wheat', 'Fish', 'Shellfish', 'Sesame'];
  const experienceOptions = ['Beginner', 'Intermediate', 'Advanced', 'Professional'];
  const kitchenEquipmentOptions = [
    'Stove',
    'Oven',
    'Microwave',
    'Air Fryer',
    'Slow Cooker',
    'Instant Pot',
    'Blender',
    'Food Processor',
    'Stand Mixer',
    'Grill'
  ];

  const handleMultiSelect = (category: keyof ProfileData, value: string) => {
    setProfile(prev => {
      const currentValue = prev[category];
      if (Array.isArray(currentValue)) {
        if (value === 'None') {
          return {
            ...prev,
            [category]: currentValue.includes('None') ? [] : ['None']
          };
        }
        const newValue = currentValue.filter(item => item !== 'None');
        return {
          ...prev,
          [category]: newValue.includes(value)
            ? newValue.filter(item => item !== value)
            : [...newValue, value]
        };
      }
      return prev;
    });
  };

  const handleSingleSelect = (category: keyof ProfileData, value: string) => {
    setProfile(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleInputChange = (category: keyof ProfileData, value: string) => {
    setProfile(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleSave = () => {
    // TODO: Save to backend/localStorage
    alert('Profile saved successfully!');
  };

  const renderSection = (
    title: string,
    description: string,
    options: string[],
    category: keyof ProfileData,
    type: 'multi' | 'single' = 'single'
  ) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="grid grid-cols-2 gap-4">
        {options.map(option => (
          <button
            key={option}
            onClick={() => type === 'multi' 
              ? handleMultiSelect(category, option)
              : handleSingleSelect(category, option)
            }
            className={`p-4 rounded-lg border ${
              Array.isArray(profile[category])
                ? (profile[category] as string[]).includes(option)
                  ? 'bg-orange-500 text-white border-orange-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500'
                : profile[category] === option
                  ? 'bg-orange-500 text-white border-orange-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 py-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="fixed top-2 left-4 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center shadow-lg z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 bg-white rounded-xl shadow-sm p-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Profile Settings</h1>
              <p className="text-gray-600">Customize your cooking experience</p>
            </div>
          </div>

          {/* Profile Content */}
          <div className="grid gap-6">
            {/* Personal Information Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                    <p className="text-gray-600">Your basic profile details</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Dietary Preferences Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Dietary Preferences</h2>
                    <p className="text-gray-600">Your dietary restrictions and preferences</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {dietaryOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => handleMultiSelect('dietary', option)}
                      className={`p-4 rounded-lg border transition-all ${
                        profile.dietary.includes(option)
                          ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500 hover:shadow-sm'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Allergies Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Food Allergies</h2>
                    <p className="text-gray-600">Help us keep your recipes safe</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {allergyOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => handleMultiSelect('allergies', option)}
                      className={`p-4 rounded-lg border transition-all ${
                        profile.allergies.includes(option)
                          ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500 hover:shadow-sm'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Cooking Experience Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Cooking Experience</h2>
                    <p className="text-gray-600">Tell us about your cooking skills</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {experienceOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => handleSingleSelect('cookingExperience', option)}
                      className={`p-4 rounded-lg border transition-all ${
                        profile.cookingExperience === option
                          ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500 hover:shadow-sm'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Kitchen Equipment Card */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Kitchen Equipment</h2>
                    <p className="text-gray-600">What tools do you have available?</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {kitchenEquipmentOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => handleMultiSelect('kitchenEquipment', option)}
                      className={`p-4 rounded-lg border transition-all ${
                        profile.kitchenEquipment.includes(option)
                          ? 'bg-orange-500 text-white border-orange-600 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-orange-500 hover:shadow-sm'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:from-orange-600 hover:to-orange-700 transform transition-all duration-200 hover:scale-[1.02] focus:scale-[0.98] shadow-sm hover:shadow-md"
            >
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 