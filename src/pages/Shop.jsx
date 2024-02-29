import React, { useState } from 'react'
import Card from '../components/Card';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductProvider';
import { LangContext } from '../context/LangContext';





const Shop = () => {
  const [product] = useContext(ProductContext);
  const [catProduct,setCatProduct]=useState([]);
  const handleclick =(cat)=>{
    const catData = product.filter(p=>p.category===cat);
    setCatProduct(catData)

  }



const [lang]=useContext(LangContext);
  return (
   < >

   <div className="container">
   <h2 style={{textAlign:'center'}}>{ lang ==='az'? 'Mehsullarin Siyahisi' :'Product List'}</h2>
   <div className='row'>

<div className='col col-sm-12 col-md-3 my-4' id='solid'>

   <ul style={{listStyle:"none"}}>
    <li style={{border:'1px solid black',textAlign:'center',fontWeight:'bold'}} onClick={() =>{handleclick('smartphone')}}>{lang==='az'?'Smartfon':'Smartphone'}</li>
    <li style={{border:'1px solid black',textAlign:'center',fontWeight:'bold'}} onClick={() =>{handleclick('laptops')}}>{lang==='az'?'Noutbuklar':'Laptops'}</li>
    <li style={{border:'1px solid black',textAlign:'center',fontWeight:'bold'}} onClick={() =>{handleclick('fragrance')}}>{lang==='az'?'Ətir':'Fragrance'}</li>
    <li style={{border:'1px solid black',textAlign:'center',fontWeight:'bold'}} onClick={() =>{handleclick('skincare')}}>{lang==='az'?'Dəriyə qulluq':'Skincare'}</li>
    <li style={{border:'1px solid black',textAlign:'center',fontWeight:'bold'}} onClick={() =>{handleclick('groceries')}}>{lang==='az'?'Baqqal':'Groceries'}</li>
   </ul>
   </div>
<div className='col col-sm-12 col-md-9 my-4'>

<div className="row g-5">
    {catProduct.length===0 ? product.map(item=>(
  
       <Card
         key={item.id}
         photo={item.images[0]}
         title={item.title}
         price={item.price}
         id={item.id}
         alldata={item} />
      


    )):  catProduct.map(item => (
     <Card
       key={item.id}
       photo={item.images[0]}
       title={item.title}
       price={item.price}
       id={item.id} 
       alldata={item}/>
     
   ))}


   </div>
</div>
</div>


   
   </div>



   
   </>


    






  )
}

export default Shop