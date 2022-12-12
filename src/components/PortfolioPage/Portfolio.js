import React from 'react';
import PortfolioGraph from './PortfolioGraph';
import PortUserPortfolio from './PortUserPortfolio';
import TransactionHistory from './TransactionHistory';
import './Portfolio.css';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div>
      <div className="PortfolioContainer">
        <div className='PortfolioGraphs'>
            <PortfolioGraph />
        </div>
        <div className='Port-User-Portfolio'>
            <PortUserPortfolio />
        </div>
        
        <div className='Portfolio-Transaction-History'>
            <TransactionHistory />
        </div>
        <div className='BuyorSellButton'>
            <Link to="/order">Buy/Sell Stocks</Link>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
