import { create } from 'zustand';

const initialProducts = [
  {
    id: "001",
    name: "Camiseta",
    price: 25.99
  },
  {
    id: "002",
    name: "Calça Jeans",
    price: 39.99
  },
  {
    id: "003",
    name: "Tênis",
    price: 59.99
  },
  {
    id: "004",
    name: "Bolsa",
    price: 49.99
  },
  {
    id: "005",
    name: "Relógio",
    price: 79.99
  }
];

type Product = {
  id: string;
  name: string;
  price: number;
};

type CartStore = {
    cart: Product[];
    availableProducts: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: ( id: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
      cart: [],
      availableProducts: initialProducts,
      addToCart: (product) => {
        set((state) => ({
          cart: [...state.cart, product],
        }) as Partial<CartStore>);
      },
      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        }) as Partial<CartStore>);
      },
}));