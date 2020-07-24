import React, {useState, useEffect} from 'react'
import NavBar from '../homepage/navbar/Navbar';
import axios from '../../../node_modules/axios';
require('dotenv').config();
const STOCK_API_KEY = process.env.STOCK_API_KEY;


 function StockList() {

  const [stockInfo, getStockInfo] = useState([]);
  const [state, changeState] = useState({
    stockInfo: []
  })
  
 useEffect(() => {
    //grab api info 

async function getStockInfo() {

  const response = await axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=${STOCK_API_KEY}`)
      .then((response) =>console.log(response))
      .catch((error) => console.log(error))  

  }

  getStockInfo();
})

  return (
    <div className="container">
      <ul className="list-group">
        <li>

        </li>
      </ul>
    </div>
  )
}

export default StockList;