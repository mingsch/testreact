
import { MenuItem } from "../types";

export const appetizerImages = {
  "1. Egg Roll": "/lovable-uploads/3623581a-9a24-4b58-b13b-3ba0874a0921.png",
  "2. Spring Roll": "/lovable-uploads/09a997e4-fd77-4d4a-a9c0-5062289622d8.png",
  "3. Bar Dop Chicken Wings": "/lovable-uploads/ac492fc6-d5c6-4da6-a875-30c392ce4f48.png",
  "4. B.B.Q. Pork": "/lovable-uploads/98e1f661-9f53-4a80-b18d-b5f974292f49.png",
  "5. Honey Garlic Chicken Wings": "/lovable-uploads/6820920c-00bb-4a68-9dde-da45aff4ae12.png",
  "6. Honey Garlic Spare Ribs": "/lovable-uploads/6d375b57-c26a-4cf1-a497-51574ea67696.png",
  "7. Sweet & Sour Won Ton": "/lovable-uploads/0dce49ae-2b56-4702-8684-0d315f369dd3.png",
};

export const appetizers: MenuItem[] = [
  {
    id: 1,
    name: "1. Egg Roll",
    price: "$2.25",
    category: "appetizers",
    image: appetizerImages["1. Egg Roll"],
  },
  {
    id: 2,
    name: "2. Spring Roll",
    price: "$2.50",
    category: "appetizers",
    isPopular: true,
    image: appetizerImages["2. Spring Roll"],
  },
  {
    id: 3,
    name: "3. Jar Doo Chicken Wings",
    price: "$13.95",
    category: "appetizers",
    isPopular: true,
    image: appetizerImages["3. Bar Dop Chicken Wings"],
  },
  {
    id: 4,
    name: "4. B.B.Q. Pork",
    price: "$13.95",
    category: "appetizers",
    image: appetizerImages["4. B.B.Q. Pork"],
  },
  {
    id: 5,
    name: "5. Honey Garlic Chicken Wings",
    price: "$14.95",
    category: "appetizers",
    image: appetizerImages["5. Honey Garlic Chicken Wings"],
  },
  {
    id: 6,
    name: "6. Honey Garlic Spare Ribs",
    price: "$14.95",
    category: "appetizers",
    isPopular: true,
    image: appetizerImages["6. Honey Garlic Spare Ribs"],
  },
  {
    id: 7,
    name: "7. Sweet & Sour Wonton",
    price: "$7.95",
    category: "appetizers",
    isPopular: true,
    image: appetizerImages["7. Sweet & Sour Won Ton"],
  },
];
