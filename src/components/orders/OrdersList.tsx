import React from 'react';
import { getOrders } from '~/utils/api/ordersAPI';

const OrdersList = () => {
  const orders = getOrders();

  console.log('orders ~~> ', orders);

  return (
    <div>
      <h2>Order List</h2>
    </div>
  );
};

export default OrdersList;
