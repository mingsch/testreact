
import { useState } from "react";
import { MenuCategory } from "./menu/types";
import CategoryTabs from "./menu/CategoryTabs";
import MenuCategoryComponent from "./menu/MenuCategory";
import { menuItemsWithImages } from "./menu/data";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("specialties");

  const filteredItems = menuItemsWithImages.filter(item => item.category === activeCategory);
  
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">Explore our authentic Chinese dishes made with fresh ingredients</p>
        </div>
        
        <CategoryTabs 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        <MenuCategoryComponent 
          category={activeCategory}
          items={filteredItems}
        />
      </div>
    </section>
  );
};

export default Menu;
