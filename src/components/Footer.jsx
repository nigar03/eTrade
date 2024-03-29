import React, { useContext } from 'react'
import { LangContext } from '../context/LangContext'

function Footer() {
  const [lang] = useContext(LangContext);
  return (
   <div className="container">
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      
      </div>
    
     <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>{lang === 'az'?'Dəstək':'Support'}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">685 Market Street, <br />
                                Las Vegas, LA 95820, <br />
                                United States.
                                </a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary"> <i class="fa-regular fa-envelope"></i> example@domain.com</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary"><i class="fa-solid fa-phone"></i>  (+01) 850-315-5862</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>{lang === 'az'?'Hesab':'Account'}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">{lang === 'az'?'Mənim Hesabım':'My Account'}</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">{lang === 'az'?'Giriş / Qeydiyyat':'Login / Register'}</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">{lang === 'az'?'Sebet':'Cart'}</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">{lang === 'az'?'İstək siyahısı':'Wishlist'}</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">{lang === 'az'?'Shop':'Shop'}</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>{lang === 'az'?'Sürətli keçid':'Quick Linktact'}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">{lang === 'az'?'Gizlilik Siyasəti':'Privacy Policy'}</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">{lang === 'az'?'İstifadə qaydaları':'Terms Of Use'}</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">{lang === 'az'?'Tez-tez verilən suallar':'FAQ'}</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">{lang === 'az'?'Əlaqə':'Contact'}</a></li>
          <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">{lang === 'az'?'Əlaqə':'Contact'}</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>{lang === 'az'?'Proqramı yükləyin':'Download App'}</h5>
          <p>{lang === 'az'?'Yalnız Proqram və Yeni İstifadəçi ilə $3 qənaət edin':'Save $3 With App & New User only'}</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/others/qr.png" alt="" />
          
                <a href="/"><img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/others/app-store.png" alt="" /></a>
                <a style={{position:'relative',top:'50px',right:'147px'}} href="/"><img src="	https://new.axilthemes.com/demo/template/etrade/assets/images/others/play-store.png" alt="" /></a>
            
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      
    </div>
  </footer>
   </div>
  )
}

export default Footer