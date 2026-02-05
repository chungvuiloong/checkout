// Note to self: This is a mock data file for products. It exports an array of product objects.
// FOr apple, it includes a weekly bundle offer. Available on Sunday, Monday, Tuesday

const data = [
  {
    id: 1, // Added id field to differentiate this apple from other name & types of apples
    name: "apple",
    type: "fruit",
    price: 0.30,
    quantityInStock: 5,
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
  },
    {
    id: 2,
    name: "banana",
    type: "fruit",
    price: 0.60,
    quantityInStock: 30,
    imageUrl: "https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg?auto=compress&w=800",
    offer: {
      weekly: {
        bundle: {
          quantity: 2,
          price: 0.40,
          days: [1, 3, 5]
        }
      }
    }
  },
  {
    id: 3,
    name: "carrot",
    type: "vegetable",
    price: 0.20,
    quantityInStock: 25,
    imageUrl: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&w=800",
    offer: {
      weekly: {
        bundle: {
          quantity: 4,
          price: 0.70,
          days: [2, 4]
        }
      }
    }
  },
    {
    id: 4,
    name: "potato",
    type: "vegetable",
    price: 0.18,
    quantityInStock: 40,
    imageUrl: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&w=800",
    offer: {
      weekly: {
        bundle: {
          quantity: 5,
          price: 0.63,
          days: [0, 6]
        }
      }
    }
  },
  {
    id: 5,
    name: "milk",
    type: "dairy",
    price: 0.40,
    quantityInStock: 15,
    imageUrl: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&w=800",
    offer: {
      weekly: {
        bundle: {
          quantity: 2,
          price: 0.72,
          days: [1, 2, 3]
        }
      }
    }
  },
  {
    id: 6,
    name: "cheese",
    type: "dairy",
    price: 0.60,
    quantityInStock: 12,
    imageUrl: "https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&w=800",
    offer: {
      weekly: {
        bundle: {
          quantity: 2,
          price: 1,
          days: [4, 5]
        }
      }
    }
  },
  {
    id: 7,
    name: "bread",
    type: "bakery",
    price: 0.25,
    quantityInStock: 18,
    imageUrl: "https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg?auto=compress&w=800",
    offer: {
      weekly: {
        bundle: {
          quantity: 2,
          price: 0.40,
          days: [0, 2, 6]
        }
      }
    }
  },
  {
    id: 8,
    name: "chips",
    type: "snack",
    price: 0.30,
    quantityInStock: 22,
    imageUrl: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&w=800",
    offer: {
      weekly: {
        bundle: {
          quantity: 3,
          price: 0.70,
          days: [3, 5]
        }
      }
    }
  },
  {
    id: 9,
    name: "juice",
    type: "beverage",
    price: 0.35,
    quantityInStock: 16,
    imageUrl: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&w=800",
    offer: {
      weekly: {
        bundle: {
          quantity: 2,
          price: 0.60,
          days: [1, 4, 6]
        }
      }
    }
  },
  {
    id: 10,
    name: "coffee",
    type: "beverage",
    price: 0.70,
    quantityInStock: 10,
    imageUrl: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&w=800",
    offer: {
      weekly: {
        bundle: {
          quantity: 2,
          price: 1,
          days: [3, 4, 5]
        }
      }
    }
  },
];

export default data;
