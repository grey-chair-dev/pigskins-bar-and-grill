
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Appetizers' | 'Main Dishes' | 'Sandwiches' | 'Salads' | 'Sides' | 'Dessert' | 'Soft Drinks';
  popular?: boolean;
}

export interface GameEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  highlight?: boolean;
}
