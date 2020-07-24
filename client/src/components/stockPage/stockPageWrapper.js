import React from 'react';
import StockList from '../stockPage/stockList';
import PieChart from '../stockPage/pieChart';
import useAxios from '../stockPage/useAxios';
import useXML from '../stockPage/useXML';
import useFetch from '../stockPage/useFetch';
require('dotenv').config();
const STOCK_API_KEY = process.env.STOCK_API_KEY;


function StockPageWrapper() {

  const data = useAxios(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${STOCK_API_KEY}`)
  const data2 = useXML(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${STOCK_API_KEY}`)
  const data3 = useFetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${STOCK_API_KEY}`)


  return (

    <div className="container-fluid">
      <div className="row">
        {/* PIE CHART */}
        <div className="col-md-6">
        {console.log(data)}
          
        </div>
        {/* LIST OF STOCKS */}
        <div className="col-md-6">
       
      </div>
    </div>
  </div>
  )
}

export default StockPageWrapper;