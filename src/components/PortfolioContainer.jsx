import StockCard from './StockCard';
// import { useState } from 'react';

export default function PortfolioContainer({ portfolioStocks,sellStock }) {
 
  // const handleBoughtToggle=(stocks)=>{
  //   const addBuy = isBought(stocks) ? stocksBought.filter((s) => s.id !== stock.id) : [...stocksBought, stocks]
  //   setStocksBought(addBuy)
  // }
 
  const prices = portfolioStocks.flatMap(stock => stock.price)
  const totalPrice=prices.reduce((acc,currentValue)=>acc+currentValue,0)


  

  return (
    <div>
    <h2>My Portfolio - {totalPrice.toFixed(2)}</h2>
      <h2>My Portfolio</h2>

      {portfolioStocks.map(stock => (
        <StockCard key={stock.id} stock={stock} isBought={true}  buyAndSell={sellStock}/>
      ))}
    </div>
  );
}




