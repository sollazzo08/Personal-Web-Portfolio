import React, {useState, useEffect} from 'react'
import axios from '../../../node_modules/axios';

 const useXML = (url) => {

  const [stockInfo, setStockInfo] = useState([]);

function getStockData(){
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET',url)
    xhr.onload = () => {
     if(xhr.status === 200)
       var test = JSON.parse(xhr.responseText)
        setStockInfo(test);
    }
    xhr.send();

  }

  useEffect(() => {
    getStockData();
  }, []);

  return stockInfo;
 }

export default useXML;