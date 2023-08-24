import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { ProductContext } from '../context/ProductProvider';
import { useCart } from 'react-use-cart';
import { ModeContext } from '../context/ModeContext';



function Nav() {
  const [query, setQuery] = useState(null);
  const [product] = useContext(ProductContext);
  const {totalItems}=useCart();
  const [mode,setMode] = useContext(ModeContext);
  return (
    <div className="container cmn" style={{ width: '100%' }}>

      <div className='a'>


        <div className="navbar">


          <div className="logo"><img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/logo/logo.png" alt="" /></div>
          <div className="nav">
            <ul className='nana'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/pages">Pages</Link></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Blog</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          <div className="icons">
            <ul >


              <button type="button" className="btn btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i className="fa-solid fa-magnifying-glass" ></i>
              </button>


              <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog ">
                  <div className="modal-content  ">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5 " id="exampleModalLabel"> Search</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <form className="input-group mb-3 ">
                        <input onChange={e => setQuery(e.target.value)} type="text" className="form-control " placeholder="Enter product" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Search</button>
                      </form>
                      <ul className="list-group bg-dark">
                        {product.filter(p => p.title.toLowerCase().includes(query)).map(item => (
                          <Link to={`/shop/${item.id}`} key={item.id} className="list-group-item d-flex justify-content-between w-100 ">{item.title} <img width={50} src={item.images[0]} /> </Link>

                        ))}


                      </ul>
                    </div>

                  </div>
                </div>
              </div>


              <li><a href="/"><i className="fa-regular fa-heart" ></i></a></li>
              <li><a href="/">
                <Link to="/cart"  className="btn btn-warning position-relative">
                <i className="fa-solid fa-cart-shopping"></i>

                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </Link>
              </a></li>
              <li><a href="/"><i className="fa-regular fa-user"></i></a></li>
              <li><a href="/"><i 
              className="fa-solid fa-bars" id='burger' ></i></a></li>
              <button onClick={()=>{ 
                mode === 'light' ? setMode('dark') : setMode('light');
                mode === 'light' ? localStorage.setItem('mode','dark') : localStorage.setItem('mode','light') 

              }} className='btn btn-warning '>{mode ==='light' ?'Dark' : 'Light'}</button>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Nav