
import { MenuItem, GameEvent } from './types';

export const BUSINESS_INFO = {
  name: "Pigskins Bar and Grill",
  tagline: "Cold Pours & Heavy Plates Since '08",
  address: "455 Old State Rte 74, Cincinnati, OH 45244",
  phone: "(513) 555-0199",
  hours: [
    { day: "Mon - Thu", time: "11:00 AM - 12:00 AM" },
    { day: "Fri - Sat", time: "11:00 AM - 2:00 AM" },
    { day: "Sunday", time: "10:00 AM - 11:00 PM" } // Sunday opens early for NFL
  ],
  googleMapsUrl: "https://maps.app.goo.gl/FBDQo9EcfhJ8NRru9"
};

export const MENU_DATA: MenuItem[] = [
  // Appetizers
  { 
    id: 'a1', 
    name: 'Fried Pickle Chips', 
    description: 'Deep fried in beef tallow and served with house-made ranch.', 
    price: '9.00', 
    category: 'Appetizers' 
  },
  { 
    id: 'a2', 
    name: 'Cheese Curds', 
    description: 'Better than mozzarella sticks! Deep fried in tallow and served with marinara.', 
    price: '9.00', 
    category: 'Appetizers',
    popular: true 
  },
  { 
    id: 'a3', 
    name: 'Fresh Pork Rinds', 
    description: 'Freshly made to order. Choose sea salted, pickle or Grippo flavor.', 
    price: '8.00', 
    category: 'Appetizers' 
  },
  { 
    id: 'a4', 
    name: 'Bone-In Wings', 
    description: '5 or 10 fresh wings smoked then fried in tallow. Sweet BBQ, Spicy BBQ, Hot or Garlic Buffalo, Mango Habanero, Tangy Gold, Garlic Parmesan.', 
    price: '9/15', 
    category: 'Appetizers',
    popular: true 
  },
  { 
    id: 'a5', 
    name: 'Loaded Nachos', 
    description: 'Fresh tortilla chips topped with pulled pork, cheese sauce, BBQ sauce, green onions, sour cream and fresh jalapeños.', 
    price: '13.00', 
    category: 'Appetizers',
    popular: true 
  },

  // Main Dishes
  { 
    id: 'm1', 
    name: 'Brisket Platter', 
    description: 'Smoked and sliced to perfection. Served with 2 sides of your choice.', 
    price: '18.00', 
    category: 'Main Dishes',
    popular: true 
  },
  { 
    id: 'm2', 
    name: 'Pulled Pork Platter', 
    description: 'Smoked and hand pulled to perfection. Served with 2 sides of your choice.', 
    price: '16.00', 
    category: 'Main Dishes' 
  },
  { 
    id: 'm3', 
    name: 'Rib Platter', 
    description: 'Half or Full rack smoked then finished up on the grill. Served with 2 sides of your choice.', 
    price: '19/25', 
    category: 'Main Dishes',
    popular: true 
  },
  { 
    id: 'm4', 
    name: 'Sirloin Steak*', 
    description: '8 oz Angus top center cut beef cooked how you like. Served with 2 sides of your choice.', 
    price: '20.00', 
    category: 'Main Dishes' 
  },
  { 
    id: 'm5', 
    name: 'Chicken Tenderloins', 
    description: '4 grilled or fried tenderloins. Served with dipping sauce of your choice and 2 sides.', 
    price: '15.00', 
    category: 'Main Dishes' 
  },

  // Sandwiches
  { 
    id: 's1', 
    name: 'Classic Burger*', 
    description: 'Half-pound fresh beef patty, American cheese, lettuce, tomatoes, pickles, onion and mayo on a brioche bun. Served with fries, mini slaw and pickle spear.', 
    price: '15.00', 
    category: 'Sandwiches',
    popular: true 
  },
  { 
    id: 's2', 
    name: 'Pulled Pork Sandwich', 
    description: 'Smoked and pulled to perfection on a brioche bun. Served with fries, mini slaw and pickle spear.', 
    price: '14.00', 
    category: 'Sandwiches' 
  },
  { 
    id: 's3', 
    name: 'Beef Brisket Sandwich', 
    description: 'Smoked and sliced to perfection on a brioche bun. Served with fries, mini slaw and pickle spear.', 
    price: '16.00', 
    category: 'Sandwiches' 
  },

  // Salads
  { 
    id: 'sl1', 
    name: 'Big Chicken Salad', 
    description: 'Grilled or fried chicken atop mixed greens, tomato, onion, cheese, cucumbers & croutons. Dressings: House Ranch, French, 1000 Island, Blue Cheese.', 
    price: '14.00', 
    category: 'Salads' 
  },

  // Sides
  { 
    id: 'sd1', 
    name: 'Fries', 
    description: 'Your choice of skin-on shoestring or sidewinders. Add cheese sauce for $1.50.', 
    price: '4.00', 
    category: 'Sides' 
  },
  { 
    id: 'sd2', 
    name: 'Baked Beans', 
    description: 'Smoked to perfection.', 
    price: '4.00', 
    category: 'Sides' 
  },
  { 
    id: 'sd3', 
    name: 'Mac & Cheese', 
    description: 'Corkscrew pasta with a medium cheddar sauce.', 
    price: '4.00', 
    category: 'Sides',
    popular: true 
  },
  { 
    id: 'sd4', 
    name: 'Cole Slaw', 
    description: 'Cabbage blend with house made slaw dressing.', 
    price: '4.00', 
    category: 'Sides' 
  },
  { 
    id: 'sd5', 
    name: 'Side Salad', 
    description: 'Mixed greens, diced tomato, onion, cheese & croutons.', 
    price: '4.00', 
    category: 'Sides' 
  },
  { 
    id: 'sd6', 
    name: 'Loaded Potato Salad', 
    description: 'Creamy, hearty and loaded with flavor.', 
    price: '4.00', 
    category: 'Sides' 
  },

  // Dessert
  { 
    id: 'd1', 
    name: 'Cotton Candy Cheesecake', 
    description: 'Pink and blue swirled cheesecake baked on a graham crust and topped with a ring of strawberry whipped cream.', 
    price: '7.00', 
    category: 'Dessert',
    popular: true 
  },

  // Soft Drinks
  { 
    id: 'sdk1', 
    name: 'Coke Products', 
    description: 'Coke, Diet Coke, Coke Zero, Fanta, Minute Maid Lemonade, Cherry Coke, Sprite, Dr. Pepper.', 
    price: '3.00', 
    category: 'Soft Drinks' 
  },
  { 
    id: 'sdk2', 
    name: 'Iced Tea', 
    description: 'Sweetened or unsweetened.', 
    price: '3.00', 
    category: 'Soft Drinks' 
  }
];

export const UPCOMING_EVENTS: GameEvent[] = [
  { id: 'e1', title: 'BENGALS VS. BROWNS', date: 'Sunday, Oct 20', time: '1:00 PM', description: 'Battle of Ohio. Full Audio in every room. Skyline giveaway at halftime.', highlight: true },
  { id: 'e2', title: 'REDS SEASON FINALE', date: 'Tuesday, Oct 22', time: '7:10 PM', description: 'Happy hour pricing until the final out. $3 Hot Dogs.', highlight: false },
  { id: 'e3', title: 'COLLEGE GAMEDAY', date: 'Saturday, Oct 26', time: '10:00 AM', description: 'Doors open early. Bearcats on the big screen. Bloody Mary bar open until noon.', highlight: false }
];
