
import { MenuItem } from "../types";
import { appetizers } from "./appetizers";
import { soups } from "./soups";
import { chopSuey } from "./chopSuey";
import { rice } from "./rice";
import { specialties } from "./specialties";
import { vegetarian } from "./vegetarian";
import { beef } from "./beef";
import { chicken } from "./chicken";
import { seafood } from "./seafood";
import { curry } from "./curry";
import { loMein } from "./loMein";
import { szechuan } from "./szechuan";
import { sweetSour } from "./sweetSour";
import { eggFooYoung } from "./eggFooYoung";
import { combinations } from "./combinations";
import { lunchCombos } from "./lunchCombos";
import { dinners } from "./dinners";
import { drinks } from "./drinks";
import { categoryDefaultImages } from "../menuUtils";
import { publicAsset } from "@/lib/publicAsset";

// Combine all menu items
export const menuItems: MenuItem[] = [
  ...appetizers,
  ...soups,
  ...chopSuey,
  ...rice,
  ...specialties,
  ...vegetarian,
  ...beef,
  ...chicken,
  ...seafood,
  ...curry,
  ...loMein,
  ...szechuan,
  ...sweetSour,
  ...eggFooYoung,
  ...combinations,
  ...dinners,
  ...lunchCombos,
  ...drinks
];

// Add default images to items that don't have an image
export const menuItemsWithImages: MenuItem[] = menuItems.map(item => ({
  ...item,
  image: publicAsset(item.image || categoryDefaultImages[item.category])
}));
