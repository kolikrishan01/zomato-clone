import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import options from './components/API'
import axios from 'axios'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleProduct from './components/SingleProduct'
const App = () => {
   const [apiData, setApiData] = useState([]);
   const [product, setProduct] = useState([]);
   const [isLoading, setIsLoading] = useState(true)
  const fetchData = async () =>{
    try {
      const response = await axios.request(options);
      
      setApiData(response.data)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    fetchData()
  },[])
const medium = apiData.filter((item)=>{
 return(
  item.difficulty === "Medium"
 )
})
const handleClick = (item) =>{
  setProduct(item)
}



  return (
    <div>



<BrowserRouter>
<Header />
  <Routes>
    <Route path='/' element={<Home medium={medium} isLoading={isLoading} apiData={apiData} handleClick={handleClick}/>}/>
    <Route path='/singleProduct' element={<SingleProduct product={product}/>}/>
  </Routes>
</BrowserRouter>
    </div>
  )
}

export default App

