
import { MenuItem } from "../types";

export const chopSueyImages = {
  "14. Vegetable Chop Suey": "/lovable-uploads/d765c29e-de7c-404a-b603-615e6b025c84.png",
  "15. Chicken Chop Suey": "/lovable-uploads/2fd19bf1-415f-40a3-a819-d6daab13e34a.png",
  "16. Beef Chop Suey": "/lovable-uploads/43509155-365d-4116-8c00-43c19194e113.png",
  "17. B.B.Q. Pork Chop Suey": "/lovable-uploads/75b2530f-7667-40ed-abcf-b7ba4a874583.png",
  "18. Shrimps Chop Suey": "/lovable-uploads/c36207c6-11f3-4f15-a286-0c7da039cd12.png",
};

export const chopSuey: MenuItem[] = [
  {
    id: 14,
    name: "14. Vegetable Chop Suey",
    price: "$12.95",
    category: "chopSuey",
    image: chopSueyImages["14. Vegetable Chop Suey"]
  },
  {
    id: 15,
    name: "15. Chicken Chop Suey",
    price: "$13.50",
    category: "chopSuey",
    isPopular: true,
    image: chopSueyImages["15. Chicken Chop Suey"]
  },
  {
    id: 16,
    name: "16. Beef Chop Suey",
    price: "$13.95",
    category: "chopSuey",
    isPopular: true,
    image: chopSueyImages["16. Beef Chop Suey"]
  },
  {
    id: 17,
    name: "17. B.B.Q. Pork Chop Suey",
    price: "$13.95",
    category: "chopSuey",
    image: chopSueyImages["17. B.B.Q. Pork Chop Suey"]
  },
  {
    id: 18,
    name: "18. Shrimps Chop Suey",
    price: "$15.50",
    category: "chopSuey",
    isPopular: true,
    image: chopSueyImages["18. Shrimps Chop Suey"]
  },
];
