import React, { useContext } from 'react'
import { useCart } from 'react-use-cart'
import { LangContext } from '../context/LangContext'

function CartPages() {

  const { items, updateItemQuantity, removeItem, isEmpty ,cartTotal,emptyCart} = useCart()
  const [lang] =useContext(LangContext);
  return (
    <>
     <div className="addtocart" style={{height:'95vh'}}>
     {isEmpty ? <h1 className='text-center'>{lang==='az'?'Məhsul yoxdur':'No Product'}</h1> :
      
      <div className='container '>
       <div className="row">
         <h1 className='text-center text-danger'>{lang==='az'?'Səbət':'Cart'}</h1>
         <div className='col sm-12 md-9'>
           <table className="table " >
             <thead>
               <tr>
                 <th scope="col">#</th>
                 <th scope="col">{lang==='az'?'Şəkil':'Photo'}</th>
                 <th scope="col">{lang==='az'?'Başlıq':'Title'}</th>
                 <th scope="col">{lang==='az'?'Qiymət':'Price'}</th>
                 <th scope="col">{lang==='az'?'Kəmiyyət':'Quantity'}</th>
                 <th scope="col">{lang==='az'?'Sil':'Delete'}</th>
               </tr>
             </thead>
             <tbody>
               {items.map((item, count) => (
                 <tr>
                   <th scope="row">{count + 1}</th>
                   <td><img src={item.images[0]} width={100} alt='/' /></td>
                   <td>{item.title}</td>
                   <td>{item.price * item.quantity}$</td>
                   <td>
                     <button className='btn btn-danger' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                     <span className='mx-2' > {item.quantity}</span>
                     <button className='btn btn-success' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>

                   </td>
                   <td ><button onClick={() => removeItem(item.id)} className=' btn btn-danger'>X</button></td>
                 </tr>

               )

               )}





             </tbody>
           </table>


         </div>
         <div className='col sm-12 md-3' >
           <ul class="list-group">
             <li class="list-group-item"><h3>{lang==='az'?'Ümumi qiymət':'Total Price'}:</h3></li>
             <li class="list-group-item"><h4 className='text-danger'>{cartTotal}$</h4></li>
             <li class="list-group-item">
             <button onClick={()=>{emptyCart()}} className='btn btn-danger'>{lang==='az'?'Səbəti təmizləyin':'Clear Cart'}</button>
             <button  className='btn btn-success ms-3'>{lang==='az'?'Yoxla':'Checkout'}</button></li>
           </ul>


         </div>
       </div>


     </div>}
     </div>
    </>
  )
}

export default CartPages