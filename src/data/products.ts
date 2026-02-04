// Note to self: This is a mock data file for products. It exports an array of product objects.
// FOr apple, it includes a weekly bundle offer. Available on Sunday, Monday, Tuesday

const data = [
  {
    id: 1, // Added id field to differentiate this apple from other name & types of apples
    name: "apple",
    type: "fruit",
    price: 0.30,
    imageUrl: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&w=800",
    offer: {
      weekly: {
        bundle: {
          quantity: 2,
          price: 0.45,
          days: [0, 1, 2]
        }
      }
    }
  }
];

export default data;
