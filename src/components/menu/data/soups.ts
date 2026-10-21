
import { MenuItem } from "../types";

export const soupImages = {
  "8. Chicken and Rice Soup": "/lovable-uploads/8ef12fc3-a2a0-47db-bbc9-8580442ff17c.png",
  "9. Mushroom Egg Drop Soup": "/lovable-uploads/bab3ff6a-7031-4833-bae5-377151353906.png",
  "10. Chicken Noodle Soup": "/lovable-uploads/93e7be80-3848-4367-9ccb-30396e8a0a94.png",
  "11. Consomme Soup with Dry Noodle": "/lovable-uploads/e4b8b533-f459-43ce-b20b-4c1dd34eada5.png",
  "12. Wonton Soup": "/lovable-uploads/986544ab-538b-4a4e-8f62-60042136642e.png",
  "13. Hot & Sour Soup": "/lovable-uploads/36617e17-59fb-42af-9f6c-20b7a757ffab.png",
};

export const soups: MenuItem[] = [
  {
    id: 8,
    name: "8. Chicken and Rice Soup",
    price: "$4.95",
    category: "soups",
    image: soupImages["8. Chicken and Rice Soup"],
  },
  {
    id: 9,
    name: "9. Mushroom Egg Drop Soup",
    price: "$4.95",
    category: "soups",
    image: soupImages["9. Mushroom Egg Drop Soup"],
  },
  {
    id: 10,
    name: "10. Chicken Noodle Soup",
    price: "$4.95",
    category: "soups",
    image: soupImages["10. Chicken Noodle Soup"],
  },
  {
    id: 11,
    name: "11. Consomme Soup with Dry Noodle",
    price: "$4.95",
    category: "soups",
    image: soupImages["11. Consomme Soup with Dry Noodle"]
  },
  {
    id: 12,
    name: "12. Wonton Soup",
    price: "$4.95",
    category: "soups",
    isPopular: true,
    image: soupImages["12. Wonton Soup"]
  },
  {
    id: 13,
    name: "13. Hot & Sour Soup",
    price: "$4.95",
    category: "soups",
    isSpicy: true,
    isPopular: true,
    image: soupImages["13. Hot & Sour Soup"]
  },
];
