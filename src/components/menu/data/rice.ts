
import { MenuItem } from "../types";

export const riceImages = {
  "19. Steamed Rice": "/lovable-uploads/84644b3a-f4c7-44e8-89bc-2f1e90af241f.png",
  "20. Vegetable Fried Rice": "/lovable-uploads/a9466950-9c24-40aa-a156-b882e4a2d6ab.png",
  "21. Mushroom Fried Rice": "/lovable-uploads/53c9e820-3038-456c-9952-74e951590112.png",
  "22. Chicken Fried Rice": "/lovable-uploads/e1cfc9b0-1801-43c0-8a49-95158748cd85.png",
  "23. Beef Fried Rice": "/lovable-uploads/31a0bf8b-48e8-4e88-b053-6d58500f846e.png",
  "24. Pork Fried Rice": "/lovable-uploads/85a1c94c-710c-474a-906a-405ca58ef2e3.png",
  "25. Shrimp Fried Rice": "/lovable-uploads/453833ad-0fe5-44c9-be6a-72c39fdd1b78.png",
  "26. Special Fried Rice": "/lovable-uploads/55ee1ce3-e51c-4745-a451-69516522398a.png",
};

export const rice: MenuItem[] = [
  {
    id: 19,
    name: "19. Steamed Rice",
    price: "$2.95",
    category: "rice",
    image: riceImages["19. Steamed Rice"]
  },
  {
    id: 20,
    name: "20. Vegetable Fried Rice",
    price: "$11.50",
    category: "rice",
    image: riceImages["20. Vegetable Fried Rice"]
  },
  {
    id: 21,
    name: "21. Mushroom Fried Rice",
    price: "$11.50",
    category: "rice",
    image: riceImages["21. Mushroom Fried Rice"]
  },
  {
    id: 22,
    name: "22. Chicken Fried Rice",
    price: "$11.50",
    category: "rice",
    isPopular: true,
    image: riceImages["22. Chicken Fried Rice"]
  },
  {
    id: 23,
    name: "23. Beef Fried Rice",
    price: "$11.50",
    category: "rice",
    image: riceImages["23. Beef Fried Rice"]
  },
  {
    id: 24,
    name: "24. Pork Fried Rice",
    price: "$11.50",
    category: "rice",
    image: riceImages["24. Pork Fried Rice"]
  },
  {
    id: 25,
    name: "25. Shrimp Fried Rice",
    price: "$13.95",
    category: "rice",
    image: riceImages["25. Shrimp Fried Rice"]
  },
  {
    id: 26,
    name: "26. Special Fried Rice",
    price: "$13.95",
    category: "rice",
    isPopular: true,
    image: riceImages["26. Special Fried Rice"]
  },
];
