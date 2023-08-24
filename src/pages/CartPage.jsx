import React from 'react'
import { useCart } from 'react-use-cart'

function CartPages() {

  const { items, updateItemQuantity, removeItem, isEmpty ,cartTotal,emptyCart} = useCart()
  return (
    <>
     <div className="addtocart" style={{height:'95vh'}}>
     {isEmpty ? <h1 className='text-center'>No Product</h1> :
      
      <div className='container '>
       <div className="row">
         <h1 className='text-center text-danger'>Cart</h1>
         <div className='col sm-12 md-9'>
           <table className="table " >
             <thead>
               <tr>
                 <th scope="col">#</th>
                 <th scope="col">Photo</th>
                 <th scope="col">Title</th>
                 <th scope="col">Price</th>
                 <th scope="col">Quantity</th>
                 <th scope="col">Delete</th>
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
             <li class="list-group-item"><h3>Total Price:</h3></li>
             <li class="list-group-item"><h4 className='text-danger'>{cartTotal}$</h4></li>
             <li class="list-group-item">
             <button onClick={()=>{emptyCart()}} className='btn btn-danger'>Clear Cart</button>
             <button  className='btn btn-success ms-3'>Checkout</button></li>
           </ul>


         </div>
       </div>


     </div>}
     </div>
    </>
  )
}

export default CartPages