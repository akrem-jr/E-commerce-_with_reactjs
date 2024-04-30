import React, { useState } from 'react';
import logo from '../assets/images/logo/logo.png';

const Navitems = () => {

    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false);
        }
    });

    return (
        <header className={`header-section  style-4 ${headerFixed ? "header-fixed fadeInUp " : ""}`}>
            <div className={`header-top d-md-none ${socialToggle ? "open " : ""}`}>
                <div className='container'>
                    <div className='header-top-area'>
                        <a href="/signup" className="lab-btn me-3"><span>create account</span> </a>
                        <a href="/login">Login</a>
                    </div>
                </div>
            </div>
            {/* header buttom */}
            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>
                      {/* logo */}
                        <div className='logo-search-acte'>
                            <div className='logo'>
                                <a href={'/'}>
                                    <img src={logo} alt=''></img>
                                </a>
                            </div>
                        </div>
                        {/* menu  */}
                        <div className=' menu-area'>
                          <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                              <li>
                                <a href='#'>Home</a>
                              </li>
                              <li>
                                <a href='/shop'>Shop</a>
                              </li>
                              <li>
                                <a href='blog'>Blog</a>
                              </li>
                              <li>
                                <a href='about'>About</a>
                              </li>
                              <li>
                                <a href='contact'>Contact</a>
                              </li>
                            </ul>
                          </div>
                          {/* sign_up and login  */}
                             <a href='/sign-up' className='lab-btn me-3 d-none d-md-block'>Create account </a>
                            <a href='/login' className='d-none d-md-block'>Login</a> 
                          <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active": ""}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                            <div className='ellepsis-bar d-md-none' onClick={()=>setSocialToggle(!socialToggle)}>
                              <i className='icofont-info-square'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navitems;
