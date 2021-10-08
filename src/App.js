import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import axios from "axios";

function App() {

  const [product, setProduct] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/products").then(res => {
      console.log(res)
    })
  }, [])

  return (
    <ProductList product={product}/>
  );
}

export default App;
