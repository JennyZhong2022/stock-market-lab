export default function StockCard({ stock ,isBought,buyAndSell}) {


  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.price}</p>
        <button onClick={()=>buyAndSell(stock)}>{isBought ? 'Sell' : 'Buy'}</button>
      </div>
    </div>
  );
}

