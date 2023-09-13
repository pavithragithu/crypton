import React from 'react';
import data from '../data.json'
import OrderStat from './Orders';

const Ordersdata = () => {
  return (
    <>
  
      <div className="widget-order-stats">
        {data.map((stat, index) => (
          <OrderStat
            key={index}
            title={stat.title}
            percentage={stat.percentage}
            amount={stat.amount}
            value={stat.value}
          />
        ))}
      </div>
    </>
  );
};

export default Ordersdata;