import React, { useState } from 'react'
import ModalANT from './ModalANT';

const ProductData = () => {

    const [dataAPI, setDataAPI] = useState([])

    const callAPI = async ()=>{
        try{
            const url = await fetch(`https://fakestoreapi.com/products?limit=5`);
            const data = await url.json();
            console.log(data)
            setDataAPI(data)
        }catch(error){error, "error detected"}
    }
   
  return (
    <div>
        
        <h3>Listado de productos</h3>
        <ModalANT dataAPI={dataAPI} callAPI={callAPI}></ModalANT>

    </div>
  )
}

export default ProductData