'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

type PreferenceCategory = 'timeOfDay' | 'servings' | 'calories' | 'cookingTime' | 'cuisineTypes' | 'recipeStyles' | 'ingredients' | 'specialInstructions' | 'strictIngredients';

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

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [preferences, setPreferences] = useState<Preferences>({
    timeOfDay: [],
    servings: '1',
    calories: '',
    cookingTime: '30',
    cuisineTypes: [],
    recipeStyles: [],
    ingredients: [],
    specialInstructions: '',
    strictIngredients: false
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const timeOfDayOptions = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
  const servingsOptions = ['1', '2', '3-4', '5-6', '7+'];
  const calorieOptions = [
    'Under 300',
    '300-500',
    '500-700',
    '700-900',
    'Over 900'
  ];
  const cookingTimeOptions = ['15 mins', '30 mins', '45 mins', '60 mins', '90+ mins'];
  const cuisineOptions = ['Italian', 'Chinese', 'Japanese', 'Mexican', 'Indian', 'French', 'Thai', 'Mediterranean', 'American', 'Korean'];
  const recipeStyleOptions = [
    'Balanced',
    'Protein',
    'Low-Carb',
    'Volume',
    'Indulgent',
    'Gut-Support',
    'Fancy',
    'Dessert',
    'Veggie'
  ];

  const commonIngredients = [
    'Chicken',
    'Beef',
    'Fish',
    'Rice',
    'Pasta',
    'Vegetables',
    'Eggs',
    'Cheese',
    'Tomatoes',
    'Onions',
    'Garlic',
    'Herbs',
    'Spices',
    'Nuts',
    'Seafood',
    'Beans',
    'Potatoes',
    'Bread',
    'Fruits',
    'Dairy'
  ];

  const filteredIngredients = commonIngredients.filter(ingredient =>
    ingredient.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getCurrentTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 11) return 'Breakfast';
    if (hour >= 11 && hour < 16) return 'Lunch';
    if (hour >= 16 && hour < 22) return 'Dinner';
    return 'Snacks';
  };

  useEffect(() => {
    // Set initial time of day based on current time
    const currentTimeOfDay = getCurrentTimeOfDay();
    setPreferences(prev => ({
      ...prev,
      timeOfDay: [currentTimeOfDay]
    }));
  }, []);

  const handleMultiSelect = (category: PreferenceCategory, value: string) => {
    setPreferences(prev => {
      const currentValue = prev[category];
      if (Array.isArray(currentValue)) {
        // For timeOfDay, only allow one selection
        if (category === 'timeOfDay') {
          return {
            ...prev,
            [category]: [value]
          };
        }
        return {
          ...prev,
          [category]: currentValue.includes(value)
            ? currentValue.filter((item: string) => item !== value)
            : [...currentValue, value]
        };
      }
      return prev;
    });
  };

  const handleSingleSelect = (category: PreferenceCategory, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleTextInput = (category: PreferenceCategory, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleIngredientSelect = (ingredient: string) => {
    if (!preferences.ingredients.includes(ingredient)) {
      setPreferences(prev => ({
        ...prev,
        ingredients: [...prev.ingredients, ingredient]
      }));
    }
    setSearchQuery('');
    setShowDropdown(false);
  };

  const removeIngredient = (ingredient: string) => {
    setPreferences(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter(item => item !== ingredient)
    }));
  };

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Save preferences and redirect to generate page
      localStorage.setItem('recipePreferences', JSON.stringify(preferences));
      router.push('/generate');
    }
  };

  const handleBack = () => {
    if (currentStep === 1) {
      router.push('/generate');
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-emerald-900">What Time of Day Is It?</h2>
            <p className="text-gray-600 mb-4">
              Select the current time of day to get recipes that match your schedule.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {timeOfDayOptions.map(option => (
                <button
                  key={option}
                  onClick={() => handleMultiSelect('timeOfDay', option)}
                  className={`p-4 rounded-lg border ${
                    preferences.timeOfDay.includes(option)
                      ? 'bg-emerald-700 text-white border-emerald-800'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-500'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-emerald-900">What Are You Craving Right Now?</h2>
            <p className="text-gray-600 mb-4">
              Feeling like Italian? Or maybe some Thai? Choose multiple to get a fusion.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {cuisineOptions.map(option => (
                <button
                  key={option}
                  onClick={() => handleMultiSelect('cuisineTypes', option)}
                  className={`p-4 rounded-lg border ${
                    preferences.cuisineTypes.includes(option)
                      ? 'bg-emerald-700 text-white border-emerald-800'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-500'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 text-emerald-900">How Many People Are You Cooking For?</h2>
            <div className="space-y-8">
              {/* Servings Counter */}
              <div>
                <p className="text-lg font-medium text-gray-900 mb-4">
                  How many People are you Serving
                </p>
                <div className="bg-white rounded-xl p-6 flex items-center justify-center space-x-8 border border-gray-300">
                  <button
                    onClick={() => {
                      const current = parseInt(preferences.servings) || 1;
                      if (current > 1) {
                        handleTextInput('servings', (current - 1).toString());
                      }
                    }}
                    className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-200 transition-colors shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-300">
                    <div className="flex flex-col items-center">
                      <div className="text-5xl font-bold text-emerald-700 w-20 text-center">
                        {preferences.servings || '1'}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">servings</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const current = parseInt(preferences.servings) || 1;
                      handleTextInput('servings', (current + 1).toString());
                    }}
                    className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-200 transition-colors shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Cook Time Counter */}
              <div>
                <p className="text-lg font-medium text-gray-900 mb-4">
                  How much time do you have?
                </p>
                <div className="bg-white rounded-xl p-6 flex items-center justify-center space-x-8 border border-gray-300">
                  <button
                    onClick={() => {
                      const current = parseInt(preferences.cookingTime) || 15;
                      if (current > 15) {
                        handleTextInput('cookingTime', (current - 15).toString());
                      }
                    }}
                    className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-200 transition-colors shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-300">
                    <div className="flex flex-col items-center">
                      <div className="text-5xl font-bold text-emerald-700 w-20 text-center">
                        {preferences.cookingTime || '30'}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">minutes</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const current = parseInt(preferences.cookingTime) || 15;
                      handleTextInput('cookingTime', (current + 15).toString());
                    }}
                    className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center hover:bg-emerald-200 transition-colors shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-emerald-900">Preferred Calories Per Serving</h2>
            <p className="text-gray-600 mb-4">
              Choose your target calorie range per serving. This helps us suggest recipes that match your dietary goals.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {calorieOptions.map(option => (
                <button
                  key={option}
                  onClick={() => handleSingleSelect('calories', option)}
                  className={`p-4 rounded-lg border ${
                    preferences.calories === option
                      ? 'bg-emerald-700 text-white border-emerald-800'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-500'
                  }`}
                >
                  {option} calories
                </button>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6 text-emerald-900">What Style of Food Are You Looking For?</h2>
            <p className="text-gray-600 mb-4">
              Choose the style of food you're craving. Want something fancy? Or maybe some comfort food?
            </p>
            <div className="grid grid-cols-2 gap-4">
              {recipeStyleOptions.map(option => (
                <button
                  key={option}
                  onClick={() => handleMultiSelect('recipeStyles', option)}
                  className={`p-4 rounded-lg border ${
                    preferences.recipeStyles.includes(option)
                      ? 'bg-emerald-700 text-white border-emerald-800'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-emerald-500'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 text-emerald-900">What Ingredients Do You Have?</h2>
            <p className="text-gray-600 mb-4">
              Search for ingredients you have available. We'll suggest recipes that use these ingredients.
            </p>
            
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder="Search ingredients..."
                className="w-full p-4 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-colors"
              />
              {showDropdown && searchQuery && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredIngredients.map(ingredient => (
                    <button
                      key={ingredient}
                      onClick={() => handleIngredientSelect(ingredient)}
                      className="w-full px-4 py-2 text-left hover:bg-emerald-50 transition-colors"
                    >
                      {ingredient}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Selected Ingredients */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-500">Selected Ingredients:</h3>
              <div className="flex flex-wrap gap-2">
                {preferences.ingredients.map(ingredient => (
                  <div
                    key={ingredient}
                    className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full"
                  >
                    <span>{ingredient}</span>
                    <button
                      onClick={() => removeIngredient(ingredient)}
                      className="text-emerald-600 hover:text-emerald-800"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Strict Ingredients Checkbox */}
            <div className="mt-16 p-4 bg-amber-50/80 rounded-lg border border-amber-200 shadow-sm backdrop-blur-sm">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={preferences.strictIngredients}
                  onChange={(e) => setPreferences(prev => ({
                    ...prev,
                    strictIngredients: e.target.checked
                  }))}
                  className="mt-1 h-5 w-5 rounded border-amber-300 text-amber-600 focus:ring-amber-500 group-hover:border-amber-400 transition-colors"
                />
                <div>
                  <div className="font-medium text-amber-800">Strict Ingredients Mode</div>
                  <p className="text-sm text-amber-700 mt-1">
                    Check this box if you want recipes that use ONLY the ingredients you've listed above. We will not assume you have any kitchen staples (like salt, pepper, oil) or additional ingredients.
                  </p>
                </div>
              </label>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 text-emerald-900">Any Special Instructions?</h2>
            <p className="text-gray-600 mb-4">
              Add any specific instructions or preferences for your recipe. For example: "Make it extra spicy" or "Use fresh herbs"
            </p>
            <textarea
              value={preferences.specialInstructions}
              onChange={(e) => handleTextInput('specialInstructions', e.target.value)}
              placeholder="Enter any special instructions..."
              className="w-full p-4 rounded-lg border border-gray-300 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 min-h-[120px] resize-none"
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="fixed top-24 left-0 right-0 bg-white shadow-sm z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="max-w-2xl mx-auto">
                <div className="h-1.5 bg-gray-200 rounded-full">
                  <div
                    className="h-1.5 bg-emerald-500 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 7) * 100}%` }}
                  />
                </div>
                <div className="text-center mt-1 text-sm text-gray-600">
                  Step {currentStep} of 7
                </div>
              </div>
            </div>
          </div>

          {/* Add padding to account for fixed progress bar */}
          <div className="pt-24">
            {/* Step content */}
            <div className="bg-white rounded-xl p-8 mb-8 border border-emerald-100">
              {renderStep()}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Navigation Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-t border-emerald-100 shadow-lg z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-2xl mx-auto flex justify-between items-center">
            <button
              onClick={handleBack}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                currentStep === 1
                  ? 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  : 'bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 active:bg-emerald-700 transition-colors shadow-sm hover:shadow-md"
            >
              {currentStep === 7 ? 'Finish' : 'Continue'}
            </button>
          </div>
        </div>
      </div>

      {/* Adjust bottom padding */}
      <div className="h-24" />
    </main>
  );
} 