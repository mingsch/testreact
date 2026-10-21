
export type MenuCategory = 
  | "appetizers" 
  | "soups" 
  | "chopSuey" 
  | "rice" 
  | "specialties" 
  | "vegetarian" 
  | "beef" 
  | "chicken" 
  | "seafood" 
  | "curry" 
  | "loMein" 
  | "szechuan" 
  | "sweetSour" 
  | "eggFooYoung" 
  | "combinations" 
  | "lunchCombos"
  | "dinners"
  | "drinks";

export interface MenuItem {
  id: number;
  name: string;
  description?: string;
  price: string;
  image?: string;
  category: MenuCategory;
  isPopular?: boolean;
  isSpicy?: boolean;
}
