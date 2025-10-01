import Link from 'next/link';
import React from 'react';
import OrdersList from '~/components/orders/OrdersList';

const OrderPage = () => {
  return (
    <div className="p-1">
      <div>
        <h2>Order Page</h2>

        <Link href="/orders/create">Create Order</Link>
      </div>

      <OrdersList />
    </div>
  );
};

export default OrderPage;
