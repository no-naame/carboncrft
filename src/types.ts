export interface FormData {
  username: string;
  phone: string;
  email: string;
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  sameAsBilling: boolean;
  selectedProduct: Product | null;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export type Step = 'landing' | 'userInfo' | 'catalog' | 'checkout';