import Image from 'next/image';

const recipeCategories = [
  {
    title: "Week's Favorites",
    recipes: [
      {
        id: 1,
        title: 'Mediterranean-Inspired Quinoa Bowl',
        image: '/images/onion-soup.jpg',
        category: 'Healthy',
        time: '25 mins',
        preferences: 'Vegetarian, High-Protein',
      },
      {
        id: 2,
        title: 'Spicy Thai Curry with Tofu',
        image: '/images/coq-au-vin.jpg',
        category: 'Asian',
        time: '35 mins',
        preferences: 'Vegan, Gluten-Free',
      },
      {
        id: 3,
        title: 'Quick Weeknight Pasta',
        image: '/images/creme-brulee.jpg',
        category: 'Italian',
        time: '20 mins',
        preferences: 'Quick, Family-Friendly',
      },
    ],
  },
  {
    title: "Top All Time",
    recipes: [
      {
        id: 4,
        title: 'Classic Margherita Pizza',
        image: '/images/onion-soup.jpg',
        category: 'Italian',
        time: '30 mins',
        preferences: 'Vegetarian, Classic',
      },
      {
        id: 5,
        title: 'Chocolate Lava Cake',
        image: '/images/coq-au-vin.jpg',
        category: 'Dessert',
        time: '25 mins',
        preferences: 'Sweet, Quick',
      },
      {
        id: 6,
        title: 'Grilled Salmon Bowl',
        image: '/images/creme-brulee.jpg',
        category: 'Healthy',
        time: '30 mins',
        preferences: 'High-Protein, Gluten-Free',
      },
    ],
  },
  {
    title: "Best Vegan",
    recipes: [
      {
        id: 7,
        title: 'Vegan Buddha Bowl',
        image: '/images/onion-soup.jpg',
        category: 'Healthy',
        time: '25 mins',
        preferences: 'Vegan, High-Protein',
      },
      {
        id: 8,
        title: 'Mushroom Risotto',
        image: '/images/coq-au-vin.jpg',
        category: 'Italian',
        time: '40 mins',
        preferences: 'Vegan, Creamy',
      },
      {
        id: 9,
        title: 'Tofu Stir-Fry',
        image: '/images/creme-brulee.jpg',
        category: 'Asian',
        time: '20 mins',
        preferences: 'Vegan, Quick',
      },
    ],
  },
  {
    title: "Quick & Easy",
    recipes: [
      {
        id: 10,
        title: '15-Min Pasta',
        image: '/images/onion-soup.jpg',
        category: 'Italian',
        time: '15 mins',
        preferences: 'Quick, Family-Friendly',
      },
      {
        id: 11,
        title: 'Sheet Pan Chicken',
        image: '/images/coq-au-vin.jpg',
        category: 'Main Course',
        time: '25 mins',
        preferences: 'High-Protein, Easy',
      },
      {
        id: 12,
        title: 'One-Pot Rice Bowl',
        image: '/images/creme-brulee.jpg',
        category: 'Asian',
        time: '20 mins',
        preferences: 'Quick, Healthy',
      },
    ],
  },
];

const FeaturedRecipes = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">AI-Generated for You</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          These recipes were generated based on popular preferences. Start your journey to discover personalized recipes that match your taste.
        </p>
        
        <div className="space-y-12">
          {recipeCategories.map((category) => (
            <div key={category.title} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide">
                {category.recipes.map((recipe) => (
                  <div key={recipe.id} className="flex-none w-[300px] bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-orange-500 text-sm font-semibold">{recipe.category}</span>
                      <h3 className="text-lg font-bold mt-2 mb-1 line-clamp-2">{recipe.title}</h3>
                      <p className="text-gray-600 text-sm mb-1">{recipe.preferences}</p>
                      <p className="text-gray-500 text-sm">{recipe.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRecipes; 