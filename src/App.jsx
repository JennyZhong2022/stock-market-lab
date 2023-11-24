import React, { useEffect, useState } from 'react';
import Header from './components/Header';
// import SearchBar from './components/SearchBar';
import StockContainer from './components/StockContainer';
import PortfolioContainer from './components/PortfolioContainer';
import './index.css'
import SearchBar from './components/SearchBar';

export default function App() {
  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])
  const [sortBy, setSortBy] = useState(null)
  const [types, setTypes] = useState([])
  const [originalStocks, setOriginalStocks] = useState([])
 
  
  

  useEffect(() => {
    const fetchStock =async () => {
      const result = await fetch('http://localhost:3001/stocks')
      const data = await result.json()
      setOriginalStocks(data)
      setStocks(data)
      console.log(data);
    }
    fetchStock()
  }, [])


  
  let displayStocks = [...stocks]
  


  if (sortBy === 'alphabetical') {
    displayStocks.sort((a, b) => a.name > b.name); // see the array .sort docs
  } else if (sortBy === 'price') {
    displayStocks.sort((a, b) => b.price - a.price); // superhacky but common JS
  }


  const buyStock = (stock) => {
    // Check if the stock is already in the portfolio
    if (!portfolioStocks.some(pStock => pStock.id === stock.id)) {
      // Add the selected stock to the portfolio
      setPortfolioStocks([...portfolioStocks, stock]);
    }
  };

  const sellStock = (stock) => {
      // Filter out the stock with the matching ID
    const updatedPortfolioStocks = portfolioStocks.filter(s => s.id !== stock.id)
    setPortfolioStocks(updatedPortfolioStocks)
  }
 
  const handleType = (e) => {
    setTypes(e.target.value)
    const updatedDisplayStocks=originalStocks.filter(stock=>stock.type===e.target.value)
    setStocks(updatedDisplayStocks)
    console.log('original',originalStocks);
    console.log(stocks);
  }
  


  return (
    <main>
      <Header />
      <div className="row">
        
        <div className="col-6">
          <SearchBar sortBy={sortBy} setSortBy={setSortBy} handleType={handleType} types={types} />
          <StockContainer stocks={displayStocks} buyStock={buyStock } />
        </div>
        <div className="col-6">
          <PortfolioContainer portfolioStocks={portfolioStocks} sellStock={sellStock} />
        </div>
      </div>
    </main>
  );
}



// const [filter, setFilter] = useState(null);
// const [types, setTypes] = useState([]);

// if (filter) {
//   displayStocks = displayStocks.filter((s) => s.type === filter);
// }


// return (
//   <main>
//     <Header />
//     <SearchBar sortBy={ sortBy } setSortBy={ setSortBy } types={ types } setFilter={ setFilter } />
//     <div className="row">
//       <div className="col-6">
//         <StockContainer stocks={ displayStocks } buyStock={ buyStock } />
//       </div>
//       <div className="col-6">
//         <PortfolioContainer portfolio={ portfolio } sellStock={ sellStock } />
//       </div>
//     </div>
//   </main>
// );
