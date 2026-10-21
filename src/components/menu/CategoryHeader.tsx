
import React from "react";
import { Flame } from "lucide-react";
import { MenuCategory } from "./types";
import { getCategoryTitle } from "./menuUtils";

interface CategoryHeaderProps {
  category: MenuCategory;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ category }) => {
  return (
    <h3 className="text-2xl font-bold text-ming-black mb-6 text-center">
      {getCategoryTitle(category)}
      <span className="block text-sm font-normal text-ming-red mt-1">
        All prices listed are BEFORE tax<br />
        Prices subject to changes
      </span>
      {category === "lunchCombos" && (
        <span className="block text-sm font-normal text-ming-red mt-1">
          Lunch Hours 11:00 AM - 2:00 PM<br />
          Additional $1 fee will be charged on orders placed after Lunch Hours
        </span>
      )}
      {(category === "soups" || 
        category === "specialties" || 
        category === "szechuan" || 
        category === "curry" || 
        category === "seafood" || 
        category === "loMein") && (
        <span className="block text-sm font-normal text-ming-red mt-1 flex items-center justify-center">
          <Flame className="inline-block h-4 w-4 mr-1 text-red-600" /> In Red Means Hot &amp; Spicy
        </span>
      )}
      {category === "dinners" && (
        <span className="block text-sm font-normal text-ming-red mt-1">
          Fortune cookies given upon request.
        </span>
      )}
    </h3>
  );
};

export default CategoryHeader;
