/**
 * Common types used throughout the application
 */

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  cookingTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  servings: number;
  imageUrl?: string;
}

export interface ProfileData {
  dietaryRestrictions: string[];
  cookingExperience: string;
  kitchenEquipment: string[];
  preferredCuisines: string[];
  mealPreferences: string[];
  allergies: string[];
  username: string;
}

export interface PreferenceCategory {
  dietaryRestrictions: string[];
  cookingExperience: string;
  kitchenEquipment: string[];
  preferredCuisines: string[];
  mealPreferences: string[];
  allergies: string[];
  commonIngredients: string[];
}

export type NavItem = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

/**
 * Shared style constants
 */
export const styles = {
  gradientText: "bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent",
  hoverGradient: "hover:from-emerald-500 hover:to-emerald-300",
  transition: "transition-all duration-300",
  container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  button: {
    primary: "bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-300 rounded-full",
    secondary: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors duration-300 rounded-lg",
  }
} as const; 