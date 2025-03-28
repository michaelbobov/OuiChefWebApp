'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Preferences {
  timeOfDay: string[];
  servings: string;
  calories: string;
  cookingTime: string;
  cuisineTypes: string[];
  recipeStyles: string[];
  ingredients: string[];
  specialInstructions: string;
  strictIngredients: boolean;
}

const defaultPreferences: Preferences = {
  timeOfDay: [],
  servings: '',
  calories: '',
  cookingTime: '',
  cuisineTypes: [],
  recipeStyles: [],
  ingredients: [],
  specialInstructions: '',
  strictIngredients: false
};

export default function GeneratePage() {
  const router = useRouter();
  const [preferences, setPreferences] = useState<Preferences>(defaultPreferences);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedPreferences = localStorage.getItem('recipePreferences');
      if (savedPreferences) {
        const parsed = JSON.parse(savedPreferences);
        setPreferences({
          timeOfDay: Array.isArray(parsed.timeOfDay) ? parsed.timeOfDay : [],
          servings: parsed.servings || '',
          calories: parsed.calories || '',
          cookingTime: parsed.cookingTime || '',
          cuisineTypes: Array.isArray(parsed.cuisineTypes) ? parsed.cuisineTypes : [],
          recipeStyles: Array.isArray(parsed.recipeStyles) ? parsed.recipeStyles : [],
          ingredients: Array.isArray(parsed.ingredients) ? parsed.ingredients : [],
          specialInstructions: parsed.specialInstructions || '',
          strictIngredients: parsed.strictIngredients || false
        });
      }
    } catch (error) {
      console.error('Error loading preferences:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleChangePreferences = () => {
    router.push('/onboarding');
  };

  const handleGenerateRecipe = () => {
    // TODO: Implement recipe generation
    console.log('Generating recipe with preferences:', preferences);
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <div className="animate-pulse">
                  <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
                Generate Your Recipe
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Get personalized recipes based on your preferences and available ingredients
              </p>
            </div>

            {/* Current Preferences Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-emerald-100">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-semibold text-emerald-900">Current Preferences</h2>
                <button 
                  onClick={handleChangePreferences}
                  className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-2 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit Preferences
                </button>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <span className="text-gray-600 w-32 font-medium">Meal time:</span>
                  <div className="flex-1">
                    {preferences.timeOfDay.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {preferences.timeOfDay.map((time) => (
                          <span
                            key={time}
                            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-emerald-500 text-white shadow-sm"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-500 italic">Not specified</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <span className="text-gray-600 w-32 font-medium">Servings:</span>
                  <div className="flex-1">
                    {preferences.servings ? (
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-emerald-500 text-white shadow-sm">
                        {preferences.servings} {parseInt(preferences.servings) === 1 ? 'person' : 'people'}
                      </span>
                    ) : (
                      <span className="text-gray-500 italic">Not specified</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <span className="text-gray-600 w-32 font-medium">Cook time:</span>
                  <div className="flex-1">
                    {preferences.cookingTime ? (
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-emerald-500 text-white shadow-sm">
                        {preferences.cookingTime} minutes
                      </span>
                    ) : (
                      <span className="text-gray-500 italic">Not specified</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <span className="text-gray-600 w-32 font-medium">Calories:</span>
                  <div className="flex-1">
                    {preferences.calories ? (
                      <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-emerald-500 text-white shadow-sm">
                        {preferences.calories}
                      </span>
                    ) : (
                      <span className="text-gray-500 italic">Not specified</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <span className="text-gray-600 w-32 font-medium">Cuisines:</span>
                  <div className="flex-1">
                    {preferences.cuisineTypes.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {preferences.cuisineTypes.map((cuisine) => (
                          <span
                            key={cuisine}
                            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-emerald-500 text-white shadow-sm"
                          >
                            {cuisine}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-500 italic">Not specified</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <span className="text-gray-600 w-32 font-medium">Recipe styles:</span>
                  <div className="flex-1">
                    {preferences.recipeStyles.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {preferences.recipeStyles.map((style) => (
                          <span
                            key={style}
                            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-emerald-500 text-white shadow-sm"
                          >
                            {style}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-gray-500 italic">Not specified</span>
                    )}
                  </div>
                </div>
                <div className="flex items-start p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                  <span className="text-gray-600 w-32 font-medium">Ingredients:</span>
                  <div className="flex-1">
                    {preferences.ingredients.length > 0 ? (
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {preferences.ingredients.map((ingredient) => (
                            <span
                              key={ingredient}
                              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-emerald-500 text-white shadow-sm"
                            >
                              {ingredient}
                            </span>
                          ))}
                        </div>
                        {preferences.strictIngredients && (
                          <div className="mt-2 text-amber-600 text-sm flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            Using strict ingredients mode
                          </div>
                        )}
                      </div>
                    ) : (
                      <span className="text-gray-500 italic">Not specified</span>
                    )}
                  </div>
                </div>
                {preferences.specialInstructions && (
                  <div className="flex items-start p-4 bg-emerald-50/50 rounded-xl border border-emerald-100">
                    <span className="text-gray-600 w-32 font-medium">Special instructions:</span>
                    <div className="flex-1">
                      <p className="text-gray-700">{preferences.specialInstructions}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Generate Button */}
            <div className="flex justify-center">
              <button
                onClick={handleGenerateRecipe}
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-emerald-500 rounded-xl overflow-hidden transition-all duration-300 ease-out hover:bg-emerald-600 hover:scale-105 hover:shadow-lg active:scale-100"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate Recipe
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 