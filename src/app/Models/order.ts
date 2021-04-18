export interface Order {
  orderNumber: number;
  numberOfItems: number;
  customer: string;
  priceTotal: number;
  date: string;
  completed: boolean;
}
