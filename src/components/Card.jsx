import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { LangContext } from '../context/LangContext'

function Card(props) {
    const {addItem}=useCart()
    const [lang]=useContext(LangContext);
    return (

     

  
         
         <div className='col col-sm-12 col-md-4'>
               <div class="card"  >
                <img src={props.photo} class="card-img-top" style={{height:'200px'}} alt="..." />
                <div class="card-body ">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.price}$</p>
                    <button onClick={()=>{addItem(props.alldata)}} className='btn btn-dark m-3 '>{lang==='az'?'Əlavə edin':'Add to Cart'}</button>
                    <Link to={`/shop/${props.id}`} className="btn btn-primary">{lang==='az'?'Daha çox':'Ream More'}</Link>
                </div>
            </div>
          </div>
   

       
   




    )
}

export default Card