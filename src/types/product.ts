export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'CARBONCRAFT OBSIDIAN',
    price: 24999.00,
    image: 'https://img.freepik.com/free-vector/black-credit-card_1017-6276.jpg?t=st=1740073283~exp=1740076883~hmac=2fe5633b147c5af831f22c31b5934900074a92f74fcf0bbd933478b0d62a2c50&w=1480'
  },
  {
    id: '2',
    name: 'CARBONCRAFT SILVER',
    price: 19999.00,
    image: 'https://img.freepik.com/free-vector/black-credit-card_1017-6276.jpg?t=st=1740073283~exp=1740076883~hmac=2fe5633b147c5af831f22c31b5934900074a92f74fcf0bbd933478b0d62a2c50&w=1480'
  },
  {
    id: '3',
    name: 'CARBONCRAFT GOLD',
    price: 29999.00,
    image: 'https://img.freepik.com/free-vector/black-credit-card_1017-6276.jpg?t=st=1740073283~exp=1740076883~hmac=2fe5633b147c5af831f22c31b5934900074a92f74fcf0bbd933478b0d62a2c50&w=1480'
  },
  {
    id: '4',
    name: 'CARBONCRAFT ROSE GOLD',
    price: 29999.00,
    image: 'https://img.freepik.com/free-vector/black-credit-card_1017-6276.jpg?t=st=1740073283~exp=1740076883~hmac=2fe5633b147c5af831f22c31b5934900074a92f74fcf0bbd933478b0d62a2c50&w=1480'
  }
];