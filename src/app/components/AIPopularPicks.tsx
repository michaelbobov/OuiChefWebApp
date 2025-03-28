'use client';

import { motion } from 'framer-motion';

const categories = [
  {
    title: "Popular This Week",
    recipes: [
      {
        title: "Mediterranean Quinoa Bowl",
        image: "bg-emerald-100",
        tags: ["Quick & Easy", "Vegetarian"],
        time: "25 mins",
        description: "A healthy and flavorful bowl packed with protein-rich quinoa, fresh vegetables, and Mediterranean herbs."
      },
      {
        title: "Grilled Salmon with Asparagus",
        image: "bg-emerald-100",
        tags: ["Healthy", "Low-Carb"],
        time: "30 mins",
        description: "Perfectly grilled salmon fillet served with tender asparagus and a light lemon butter sauce."
      },
      {
        title: "Creamy Mushroom Pasta",
        image: "bg-emerald-100",
        tags: ["Comfort Food", "Family-Friendly"],
        time: "35 mins",
        description: "A rich and creamy pasta dish with sautéed mushrooms, fresh herbs, and parmesan cheese."
      },
      {
        title: "Thai Green Curry",
        image: "bg-emerald-100",
        tags: ["Spicy", "Asian"],
        time: "40 mins",
        description: "Authentic Thai green curry with coconut milk, fresh vegetables, and your choice of protein."
      }
    ]
  },
  {
    title: "Vegan Favorites",
    recipes: [
      {
        title: "Vegan Buddha Bowl",
        image: "bg-emerald-100",
        tags: ["Vegan", "High-Protein"],
        time: "20 mins",
        description: "A nutrient-packed bowl with quinoa, roasted vegetables, and tahini dressing."
      },
      {
        title: "Tofu Stir-Fry",
        image: "bg-emerald-100",
        tags: ["Quick", "Asian"],
        time: "25 mins",
        description: "Crispy tofu with fresh vegetables in a savory sauce."
      },
      {
        title: "Vegan Mac & Cheese",
        image: "bg-emerald-100",
        tags: ["Comfort Food", "Family-Friendly"],
        time: "30 mins",
        description: "Creamy vegan mac and cheese made with cashew sauce and nutritional yeast."
      }
    ]
  },
  {
    title: "Quick & Easy",
    recipes: [
      {
        title: "15-Minute Stir Fry",
        image: "bg-emerald-100",
        tags: ["Quick", "Healthy"],
        time: "15 mins",
        description: "Fast and healthy stir fry with your favorite vegetables and protein."
      },
      {
        title: "One-Pot Pasta",
        image: "bg-emerald-100",
        tags: ["Easy", "Family-Friendly"],
        time: "20 mins",
        description: "Simple one-pot pasta dish with fresh tomatoes and basil."
      },
      {
        title: "Sheet Pan Dinner",
        image: "bg-emerald-100",
        tags: ["Easy", "Healthy"],
        time: "25 mins",
        description: "Roasted vegetables and protein on a single sheet pan."
      }
    ]
  },
  {
    title: "Healthy Options",
    recipes: [
      {
        title: "Protein Power Bowl",
        image: "bg-emerald-100",
        tags: ["High-Protein", "Healthy"],
        time: "20 mins",
        description: "Protein-rich bowl with quinoa, chickpeas, and fresh vegetables."
      },
      {
        title: "Green Smoothie Bowl",
        image: "bg-emerald-100",
        tags: ["Healthy", "Quick"],
        time: "10 mins",
        description: "Nutritious smoothie bowl packed with superfoods and fresh fruits."
      },
      {
        title: "Baked Chicken & Vegetables",
        image: "bg-emerald-100",
        tags: ["Healthy", "Low-Carb"],
        time: "30 mins",
        description: "Lean protein with roasted vegetables for a balanced meal."
      }
    ]
  }
];

const AIPopularPicks = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-slate-800 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-slate-700 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            AI's Most Popular Picks
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover recipes that our AI has crafted based on trending preferences and popular ingredients
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {categories.map((category, index) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
              <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide">
                {category.recipes.map((recipe, recipeIndex) => (
                  <motion.div
                    key={recipe.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: recipeIndex * 0.1 }}
                    className="flex-none w-[320px] bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-slate-100"
                  >
                    <div className={`aspect-w-16 aspect-h-9 ${recipe.image}`}></div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        {recipe.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{recipe.title}</h4>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm">{recipe.time}</span>
                        </div>
                        <button className="text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors">
                          View Recipe →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIPopularPicks; 