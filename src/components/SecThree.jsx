import React from 'react'

function SecThree() {
    return (
        <div className='container'>
            <div className="secthree">
                <span><i style={{ color: '#8c71db', fontSize: '18px' }} class="fa-solid fa-basket-shopping"></i> <span style={{ color: '#8c71db' }}>
                    Our Products
                </span>

                </span>
                <h2>Explore our Products</h2>
                <div className="products " >
                    <div class="card ">
                        <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-01.png" class="card-img-top" alt="..." />
                        <div className="lala" >
                            <ul style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
                                <li style={{ listStyle: 'none', backgroundColor: 'white', fontSize: '20px', margin: "12px" }}><i class="fa-solid fa-eye"></i></li>
                                <li style={{ listStyle: 'none', backgroundColor: '#ff497c', height: '30px', borderRadius: '5px' }}> <a style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }} href="/" >Add to Card</a> </li>
                                <li style={{ listStyle: 'none', backgroundColor: 'white', fontSize: '20px', margin: "12px" }}><i class="fa-regular fa-heart"></i></li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <span class="card-title"><i style={{ color: '#ffdc60' }} class="fa-solid fa-star"></i><i style={{ color: '#ffdc60' }} class="fa-solid fa-star"></i><i style={{ color: '#ffdc60' }} class="fa-solid fa-star"></i><i style={{ color: '#ffdc60' }} class="fa-solid fa-star"></i><i style={{ color: '#ffdc60' }} class="fa-solid fa-star"></i> (64)</span>
                            <p style={{ color: 'gray' }} class="card-text">Yantiti Leather & Canvas Bags</p>
                            <span style={{ fontWeight: "bold" }}>$29.99</span> <span style={{ color: '#d6d6d6', textDecoration: 'line-through' }}>$49.99</span>
                        </div>
                    </div>
                    <div class="card" style={{ width: "300px", height: '300px', border: '1px solid white' }}>
                        <img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-02.png" class="card-img-top" alt="..." />
                        <div className="lala" >
                            <ul style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
                                <li style={{ listStyle: 'none', backgroundColor: 'white', fontSize: '20px', margin: "12px" }}><i class="fa-solid fa-eye"></i></li>
                                <li style={{ listStyle: 'none', backgroundColor: '#ff497c', height: '30px', borderRadius: '5px' }}> <a style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }} href="/" >Add to Card</a> </li>
                                <li style={{ listStyle: 'none', backgroundColor: 'white', fontSize: '20px', margin: "12px" }}><i class="fa-regular fa-heart"></i></li>
                            </ul>
                        </div>
                        <div class="card-body">

                            <p class="card-text" style={{ color: 'gray' }} >Level 20 RGB Cherry</p>
                            <span style={{ fontWeight: "bold" }}>$29.99</span> <span style={{ color: '#d6d6d6', textDecoration: 'line-through' }}>$49.99</span>

                        </div>
                    </div>
                    <div class="card" style={{ width: "300px", height: '300px', border: '1px solid white' }}>
                        <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-03.png" class="card-img-top" alt="..." />
                        <div className="lala" >
                            <ul style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
                                <li style={{ listStyle: 'none', backgroundColor: 'white', fontSize: '20px', margin: "12px" }}><i class="fa-solid fa-eye"></i></li>
                                <li style={{ listStyle: 'none', backgroundColor: '#ff497c', height: '30px', borderRadius: '5px' }}> <a style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }} href="/" >Add to Card</a> </li>
                                <li style={{ listStyle: 'none', backgroundColor: 'white', fontSize: '20px', margin: "12px" }}><i class="fa-regular fa-heart"></i></li>
                            </ul>
                        </div>
                        <div class="card-body">

                            <p class="card-text" style={{ color: 'gray' }}>Logitech Streamcam</p>
                            <span style={{ fontWeight: "bold" }}>$29.99</span> <span style={{ color: '#d6d6d6', textDecoration: 'line-through' }}>$49.99</span>

                        </div>
                    </div>
                    <div class="card" style={{ width: "300px", height: '300px', border: '1px solid white' }}>
                        <img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-04.png" class="card-img-top" alt="..." />
                        <div className="lala" >
                            <ul style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
                                <li style={{ listStyle: 'none', backgroundColor: 'white', fontSize: '20px', margin: "12px" }}><i class="fa-solid fa-eye"></i></li>
                                <li style={{ listStyle: 'none', backgroundColor: '#ff497c', height: '30px', borderRadius: '5px' }}> <a style={{ textDecoration: 'none', color: 'white', fontSize: '15px' }} href="/" >Add to Card</a> </li>
                                <li style={{ listStyle: 'none', backgroundColor: 'white', fontSize: '20px', margin: "12px" }}><i class="fa-regular fa-heart"></i></li>
                            </ul>
                        </div>
                        <div class="card-body">
                            <span class="card-title"><i style={{ color: '#ffdc60' }} class="fa-solid fa-star"></i><i style={{ color: '#ffdc60' }} class="fa-solid fa-star"></i><i style={{ color: '#ffdc60' }} class="fa-solid fa-star"></i><i style={{ color: '#ffdc60' }} class="fa-solid fa-star"></i><i style={{ color: '#ffdc60' }} class="fa-solid fa-star"></i> (44)</span>
                            <p class="card-text" style={{ color: 'gray' }} >3D™ wireless headset</p>
                            <span style={{ fontWeight: "bold" }}>$29.99</span> <span style={{ color: '#d6d6d6', textDecoration: 'line-through' }}>$49.99</span>

                        </div>
                    </div>


                </div>

            </div>
            

        </div>
    )
}

export default SecThree