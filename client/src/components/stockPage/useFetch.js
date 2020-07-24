import React, {useState, useEffect} from 'react'
import axios from '../../../node_modules/axios';

 const useFetch = (url) => {

  const [stockInfo, setStockInfo] = useState([]);

function getStockData(){
    fetch(url)
    .then(response => setStockInfo(response.json()))
  }

  useEffect(() => {
    getStockData();
  }, []);

  return stockInfo;
 }

export default useFetch;