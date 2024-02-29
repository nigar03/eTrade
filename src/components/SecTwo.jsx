import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext'

function SecTwo() {
    const [lang]=useContext(LangContext);
    return (
        <div className="container">
            <div className="sectwo">
                <div className="category"  >
                    <i class="fa-solid fa-tag" style={{ color: '#ff497c', fontSize: '20px' }}></i><span style={{ color: '#ff497c', fontWeight: '500' }} > {lang ==="az"?'Kateqoriyalar':'Categories'}</span>
                    <h2 style={{ fontSize: '40px', padding: '20px 0 20px' }}>{lang ==='az'?'Kateqoriyaya görə gözdən keçirin':'Browse by Category'}</h2>
                </div>
                <div className="electronic" style={{ height: '300px' }}>
                    <div className="phone">
                        <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-4.png" alt="" />
                        <p>{lang ==='az'?'Telefonlar':'Phones'}</p>
                    </div>
                    <div className="phone">
                        <img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-5.png" alt="" />
                        <p>{lang ==='az'?'Kompüterlər':'Computers'}</p>
                    </div>
                    <div className="phone">
                        <img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-11.png" alt="" />
                        <p>{lang === 'az'?'Aksesuarlar':'Accessories'}</p>
                    </div>
                    <div className="phone">
                        <img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-6.png" alt="" />
                        <p>{lang ==='az'?'Noutbuklar':'Laptops'}</p>
                    </div>
                    <div className="phone">
                        <img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-2.png" alt="" />
                        <p>{lang ==='az'?'Monitorlar':'Monitors'}</p>
                    </div>
                    <div className="phone">
                        <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-7.png" alt="" />
                        <p>{lang ==='az'?'Şəbəkə':'Networking'}</p>
                    </div>
                    <div className="phone">
                        <img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/product/categories/elec-8.png" alt="" />
                        <p>{lang ==="az"?'PC Oyunu':'PC Gaming'}</p>
                    </div>

                </div>
                <div className="third"  >

                    <div className="dontmiss" style={{ padding: '0px 80px 0px', width: '40%' }}>
                        <span><i style={{ color: '#ff497c' }} class="fa-solid fa-headphones"></i></span>
                        <span style={{ color: '#ff497c' }}>{lang ==="az"?'Qaçırmayın!!':'Don’t Miss!!'} </span>
                        <h2 style={{ fontSize: '45px' }}>{lang ==="az"?'Musiqi Təcrübənizi Təkmilləşdirin!!':'Enhance Your Music Experience'}</h2>
                        <div className="circle">
                            <div className="c-one">
                                <div>
                                    <div style={{ fontWeight: 'bold' }} className="number">0</div>
                                    <div className="unit">{lang ==="az"?'Gün':'Day'}</div>

                                </div>


                            </div>
                            <div className="c-one">
                                <div>
                                    <div style={{ fontWeight: 'bold' }} className="number">00</div>
                                    <div className="unit">{lang ==="az"?'Saat':'Hrs'}</div>

                                </div>

                            </div>
                            <div className="c-one">
                                <div>
                                    <div style={{ fontWeight: 'bold' }} className="number">00</div>
                                    <div className="unit">{lang ==="az"?'Dəqiqə':'Min'}</div>
                                </div>

                            </div>
                            <div className="c-one">
                                <div>
                                    <div style={{ fontWeight: 'bold' }} className="number">00</div>
                                    <div className="unit">{lang ==="az"?'Saniyə':'Sec'}</div>
                                </div>
                            </div>

                        </div>
                        <div className="check" style={{ width: '150px', height: '60px', backgroundColor: '#3577f0', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px', borderRadius: '5px' }}><a style={{ textDecoration: 'none', color: 'white' }} href="/">{lang ==="az"?'Yoxlamaq':'Check it Out'}</a></div>

                    </div>
                    <div className="headphode">
                        <img style={{ position: 'relative', top: '-50px', right: '50px' }} src="	https://new.axilthemes.com/demo/template/etrade/assets/images/product/poster/poster-03.png" alt="" />


                    </div>










                </div>
            </div>



        </div>

    )
}

export default SecTwo