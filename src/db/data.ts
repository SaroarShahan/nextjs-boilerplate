export const Orders = [
  {
    id: 1,
    name: 'Order 1',
    description: 'This is a test description for order 1',
    services: [
      {
        id: 1,
        name: 'Sercice A',
        concern: 'Concern',
        cause: 'Cause',
        correction: 'Correction',
        labor: [
          {
            id: 1,
            name: 'John',
            rate: 59.99,
            hours: 4,
            total_cost: 239.96,
          },
        ],
      },
    ],
  },
];
