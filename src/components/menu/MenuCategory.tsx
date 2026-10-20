
import React from "react";
import { MenuItem, MenuCategory as MenuCategoryType } from "./types";
import CategoryHeader from "./CategoryHeader";
import MenuItemCard from "./MenuItemCard";

interface MenuCategoryProps {
  category: MenuCategoryType;
  items: MenuItem[];
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, items }) => {
  const isLunchCombos = category === "lunchCombos";
  const isDrinks = category === "drinks";
  
  return (
    <section className="menu-category-container" aria-labelledby={`${category}-heading`}>
      <CategoryHeader category={category} />
      
      {isLunchCombos ? (
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {/* First row - General Tao Chicken centered */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
            <div className="sm:col-start-2">
              <MenuItemCard key={items[0]?.id} item={items[0]} />
            </div>
          </div>
          {/* Second row - ABC combos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
            {items.slice(1, 4).map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
          {/* Third row - D combos */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-4xl">
            {items.slice(4).map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : isDrinks ? (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl">
            {items.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {items.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default MenuCategory;
