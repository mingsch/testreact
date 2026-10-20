
import { MenuCategory } from "./types";

export const getCategoryTitle = (category: MenuCategory): string => {
  switch(category) {
    case "appetizers": return "Appetizers";
    case "soups": return "Soups";
    case "chopSuey": return "Chop Suey (Bean Sprouts)";
    case "rice": return "Rice";
    case "specialties": return "Special Suggestions";
    case "vegetarian": return "Vegetarian Delights";
    case "beef": return "Beef or Pork Dishes";
    case "chicken": return "Chicken Dishes";
    case "seafood": return "Seafood Dishes";
    case "curry": return "Curry Dishes";
    case "loMein": return "Lo Mein (Egg Noodle)";
    case "szechuan": return "Szechuan Dishes";
    case "sweetSour": return "Sweet and Sour Dishes";
    case "eggFooYoung": return "Egg Foo Young";
    case "combinations": return "Special Combination Plates";
    case "lunchCombos": return "Lunch Combo Menu";
    case "dinners": return "Full Course Dinners";
    case "drinks": return "Drinks";
    default: return "";
  }
};

export const categoryDefaultImages: Record<MenuCategory, string> = {
  appetizers: "https://images.unsplash.com/photo-1625938145744-535ec38ba124?q=80&w=800&auto=format&fit=crop",
  soups: "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
  chopSuey: "https://images.unsplash.com/photo-1617197610604-7ca0e2983b34?q=80&w=800&auto=format&fit=crop",
  rice: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44e92?q=80&w=800&auto=format&fit=crop",
  specialties: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
  vegetarian: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop",
  beef: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop",
  chicken: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
  seafood: "https://images.unsplash.com/photo-1579631542720-3a87824838ef?q=80&w=800&auto=format&fit=crop",
  curry: "https://images.unsplash.com/photo-1604857864317-f6eea37a3156?q=80&w=800&auto=format&fit=crop",
  loMein: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?q=80&w=800&auto=format&fit=crop",
  szechuan: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
  sweetSour: "https://images.unsplash.com/photo-1603622592175-65a8bea17514?q=80&w=800&auto=format&fit=crop",
  eggFooYoung: "https://images.unsplash.com/photo-1594066595373-5dd6c3b4e1c1?q=80&w=800&auto=format&fit=crop",
  combinations: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
  lunchCombos: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop",
  dinners: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=800&auto=format&fit=crop",
  drinks: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop",
};
