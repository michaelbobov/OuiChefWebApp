/**
 * Application-wide constants and configuration
 */

export const ROUTES = {
  HOME: '/',
  GENERATE: '/generate',
  SAVED: '/saved',
  PROFILE: '/profile',
  PREFERENCES: '/preferences',
  ONBOARDING: '/onboarding',
  CONTACT: '/contact',
} as const;

export const DIETARY_RESTRICTIONS = [
  'None',
  'Vegetarian',
  'Vegan',
  'Gluten-Free',
  'Dairy-Free',
  'Keto',
  'Paleo',
  'Low-Carb',
  'Low-Fat',
] as const;

export const COOKING_EXPERIENCE = [
  'Beginner',
  'Intermediate',
  'Advanced',
  'Professional',
] as const;

export const KITCHEN_EQUIPMENT = [
  'Stove',
  'Oven',
  'Microwave',
  'Blender',
  'Food Processor',
  'Slow Cooker',
  'Pressure Cooker',
  'Air Fryer',
  'Grill',
] as const;

export const CUISINES = [
  'Italian',
  'Mexican',
  'Chinese',
  'Japanese',
  'Indian',
  'French',
  'Mediterranean',
  'American',
  'Thai',
  'Korean',
] as const;

export const MEAL_PREFERENCES = [
  'Quick & Easy',
  'Healthy',
  'Budget-Friendly',
  'Gourmet',
  'One-Pot Meals',
  'Meal Prep',
  'Family-Friendly',
  'Low-Calorie',
] as const;

export const COMMON_INGREDIENTS = [
  'Chicken',
  'Beef',
  'Fish',
  'Rice',
  'Pasta',
  'Potatoes',
  'Tomatoes',
  'Onions',
  'Garlic',
  'Eggs',
  'Cheese',
  'Bread',
] as const;

export const NAV_ITEMS = [
  { href: ROUTES.HOME, label: 'Home' },
  { href: ROUTES.GENERATE, label: 'Generate' },
  { href: ROUTES.SAVED, label: 'Saved' },
  { href: ROUTES.CONTACT, label: 'Contact' },
] as const; 