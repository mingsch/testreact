
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Star, Flame } from "lucide-react";
import { MenuItem } from "./types";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <Card className="menu-item border border-gray-200 hover:shadow-md transition-shadow duration-300 overflow-hidden h-full">
      <CardContent className="p-4 flex flex-col h-full">
        <div className="flex justify-between items-start">
          <h4 className="text-lg font-semibold text-ming-black group-hover:text-ming-red transition-colors">
            {item.name}
            <div className="flex items-center mt-1 gap-1">
              {item.isPopular && (
                <span className="flex items-center text-xs text-amber-600 font-medium">
                  <Star size={14} className="mr-1 fill-amber-500 text-amber-500" /> Popular
                </span>
              )}
              {item.isSpicy && (
                <span className="flex items-center text-xs text-red-600 font-medium ml-2">
                  <Flame size={14} className="mr-1 text-red-600" /> Spicy
                </span>
              )}
            </div>
          </h4>
        </div>
        {item.description && (
          <p className="text-sm text-gray-600 mt-2 whitespace-pre-line">{item.description}</p>
        )}
        <div className="flex-grow"></div>
        <div className="flex justify-end mt-3">
          <span className="text-ming-red font-bold text-lg">{item.price}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;
