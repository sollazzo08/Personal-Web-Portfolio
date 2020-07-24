import React, {useState, useEffect} from 'react'
import axios from '../../../node_modules/axios';

 const useAxios = (url) => {

  const [stockInfo, setStockInfo] = useState([]);

  async function getStockData(){
    
    const data = await axios.get(url)
     .then((data) => setStockInfo(data))
  }

  useEffect(() => {
    getStockData();
  }, []);

  return stockInfo;
 }

export default useAxios;