
export type Product = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  profitMargin: number;
  discount: number;
  stock: number;
  isActive: boolean;
};

export const productsData: Product[] = [
  {
    id: "PROD-001",
    name: "Classic Black Tee",
    imageUrl: "/placeholder.svg",
    price: 24.99,
    profitMargin: 50, // in percent
    discount: 10, // in percent
    stock: 120,
    isActive: true,
  },
  {
    id: "PROD-002",
    name: "SwiftFrame Hoodie",
    imageUrl: "/placeholder.svg",
    price: 59.99,
    profitMargin: 45,
    discount: 0,
    stock: 75,
    isActive: true,
  },
  {
    id: "PROD-003",
    name: "Lovable Hat",
    imageUrl: "/placeholder.svg",
    price: 19.99,
    profitMargin: 60,
    discount: 15,
    stock: 200,
    isActive: false,
  },
  {
    id: "PROD-004",
    name: "AI-Enhanced Socks",
    imageUrl: "/placeholder.svg",
    price: 12.50,
    profitMargin: 70,
    discount: 0,
    stock: 0,
    isActive: true,
  },
  {
    id: "PROD-005",
    name: "The Editor's Mug",
    imageUrl: "/placeholder.svg",
    price: 15.00,
    profitMargin: 55,
    discount: 5,
    stock: 50,
    isActive: true,
  },
];
