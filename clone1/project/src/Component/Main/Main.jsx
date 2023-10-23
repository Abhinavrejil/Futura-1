import React, { useState } from 'react'
import './Main.css'
import { BsSearch } from 'react-icons/bs'
import { BsPerson } from 'react-icons/bs'
import { BiCart } from "react-icons/bi"
import { Link } from 'react-router-dom'
import Body from '../Body/Body'
import Details from '../Details'
import Home from '../Home/Home'
const Main = () => {
    const [productDetails,setProductDetails]=useState(null);

const [activeNav,setActiveNav]=useState(0);

const handleNavigationClick=(index)=>{
    setActiveNav(index)
}
    return (
        <div>

            <div className='nav'>
                <link href='https://fonts.googleapis.com/css?family=Sofia' rel='stylesheet'></link>

                <div className='main-div'>
                    <div className="navbar-container">
                        <div className='nav-logo'>Abhira</div>
                        <div className='nav-content'>
                            <div className="content"><button className='btn' onClick={()=>handleNavigationClick(0)} >Home</button></div>


                            <div className="content">
                                
                                <Link to='Shop'><button className='btn'>Shop</button> </Link>
                            </div>


                            <div className="content">
                                <button className='btn'>Pages</button>
                            </div>

                            <div className="content">
                                <button className='btn'>AboutUs</button>
                            </div>
                            <div className="content">
                                <button className='btn'>Looksup</button>
                            </div>
                        </div>

                        <div className='search-button'>
                            <input type="text" placeholder="Search saylor" name="search" />
                            <BsSearch />
                        </div>

                        <div className="person-cart-icon">
                            <div class="drpdown">
                                <button className="drp-button"><BsPerson style={{ fontSize: 26, color: ' black' }} className='profile-icon' /></button>
                                <div className="drpdown-content">
                                    <a href="#">SignUp</a>
                                    <a href="#">Signin</a>
                                </div>
                            </div>
                            <div className='cart-icon'>
                                <button className='cart'>
                                    <BiCart style={{ fontSize: 26, color: ' black' }} />
                                </button>
                            </div>
                        </div>


                        <div className='nav-cartprofile'></div>
                    </div>
                </div>

            </div>
            <div><Body /></div>
            {activeNav===0 && <Body setActiveNav={setActiveNav} setProductDetails={setProductDetails}/>}
            {activeNav ===2 && <Details productDetails={productDetails}/>}
        </div>
    )
}

export default Main