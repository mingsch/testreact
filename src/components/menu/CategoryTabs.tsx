
import React from "react";
import { Package } from "lucide-react";
import { MenuCategory } from "./types";

interface CategoryTabsProps {
  activeCategory: MenuCategory;
  setActiveCategory: (category: MenuCategory) => void;
}

const categories = [
  { id: "specialties", name: "Special Suggestions", icon: null },
  { id: "dinners", name: "Dinner Specials", icon: null },
  { id: "appetizers", name: "Appetizers", icon: null },
  { id: "soups", name: "Soups", icon: null },
  { id: "chopSuey", name: "Chop Suey (Bean Sprouts)", icon: null },
  { id: "rice", name: "Rice", icon: null },
  { id: "eggFooYoung", name: "Egg Foo Young", icon: null },
  { id: "vegetarian", name: "Vegetarian", icon: null },
  { id: "beef", name: "Beef & Pork", icon: null },
  { id: "chicken", name: "Chicken", icon: null },
  { id: "szechuan", name: "Szechuan", icon: null },
  { id: "sweetSour", name: "Sweet & Sour", icon: null },
  { id: "curry", name: "Curry", icon: null },
  { id: "seafood", name: "Seafood", icon: null },
  { id: "loMein", name: "Lo Mein (Egg Noodle)", icon: null },
  { id: "lunchCombos", name: "Lunch Combos", icon: Package },
  { id: "combinations", name: "Combinations", icon: null },
  { id: "drinks", name: "Drinks", icon: null },
] as const;

const CategoryTabs: React.FC<CategoryTabsProps> = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-8">
      {/* Mobile Dropdown */}
      <div className="md:hidden mb-4">
        <select
          value={activeCategory}
          onChange={(e) => setActiveCategory(e.target.value as MenuCategory)}
          className="w-full p-4 border border-gray-300 rounded-lg text-ming-black bg-white focus:outline-none focus:ring-2 focus:ring-ming-red/50 text-base"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      
      {/* Desktop Tabs */}
      <div className="hidden md:flex justify-center">
        <div className="inline-flex flex-wrap justify-center gap-2 bg-ming-light p-2 rounded-lg">
          {categories.map((category) => (
            <button 
              key={category.id}
              onClick={() => setActiveCategory(category.id as MenuCategory)}
              className={`px-4 py-2 rounded-md text-xs lg:text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                activeCategory === category.id 
                  ? category.id === "lunchCombos" 
                    ? "bg-ming-red text-white font-extrabold underline decoration-2 underline-offset-4"
                    : "bg-ming-red text-white" 
                  : "bg-transparent text-ming-dark hover:bg-ming-red/10"
              }`}
            >
              {category.name}
              {category.icon && <category.icon className="h-3 w-3 text-sky-500" strokeWidth={2.5} />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
