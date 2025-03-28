'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  time: string;
  image: string;
}

// Temporary mock data
const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Classic Spaghetti Carbonara',
    description: 'A traditional Italian pasta dish made with eggs, cheese, pancetta, and black pepper.',
    category: 'Italian',
    time: '30 mins',
    image: '/images/carbonara.jpg'
  },
  {
    id: '2',
    title: 'Chicken Stir Fry',
    description: 'Quick and healthy Asian-inspired stir fry with fresh vegetables and tender chicken.',
    category: 'Asian',
    time: '25 mins',
    image: '/images/stir-fry.jpg'
  }
];

export default function SavedPage() {
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>(mockRecipes);

  const handleRemoveRecipe = (index: number) => {
    setSavedRecipes(prev => prev.filter((_, i) => i !== index));
  };

  const handleViewRecipe = (recipe: Recipe) => {
    // TODO: Implement recipe viewing functionality
    console.log('Viewing recipe:', recipe);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-emerald-100">
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-5xl font-bold text-emerald-900 mb-6">
                Saved Recipes
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your collection of favorite recipes, ready to cook.
              </p>
            </div>

            {savedRecipes.length === 0 ? (
              <div className="bg-white rounded-xl p-8 border border-emerald-100">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 text-emerald-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold mb-2 text-emerald-900">No Saved Recipes Yet</h2>
                  <p className="text-gray-600 mb-6">Start saving your favorite recipes to access them later.</p>
                  <Link
                    href="/generate"
                    className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Generate Recipes
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {savedRecipes.map((recipe, index) => (
                  <div key={index} className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                    <div className="flex justify-between items-start mb-4">
                      <h2 className="text-xl font-semibold text-emerald-900">{recipe.title}</h2>
                      <button
                        onClick={() => handleRemoveRecipe(index)}
                        className="text-gray-600 hover:text-red-500 transition-colors"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-700 mb-4">{recipe.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                        {recipe.category}
                      </span>
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                        {recipe.time}
                      </span>
                    </div>
                    <button
                      onClick={() => handleViewRecipe(recipe)}
                      className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-2 transition-colors"
                    >
                      View Recipe
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 