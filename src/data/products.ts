// Note to self: This is a mock data file for products. It exports an array of product objects.
// FOr apple, it includes a weekly bundle offer. Available on Sunday, Monday, Tuesday

const data = [
  {
    name: "apple",
    type: "fruit",
    price: 0.30,
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
