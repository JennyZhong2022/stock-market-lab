import React from 'react';
import StockCard from './StockCard';

export default function StockContainer({stocks,buyStock}) {
  return (
    <div>
      <h2>Stocks</h2>
      { /* render the list of stocks here using the StockCard component */
        stocks.map((stock) => (
          <StockCard key={stock.id} stock={stock} isBought={false } buyAndSell={buyStock} />
        ))
      }
    </div>
  );
}
