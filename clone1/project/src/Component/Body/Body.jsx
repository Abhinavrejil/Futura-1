import React, { useEffect, useState } from 'react'
// import k4 from './Assets/bodybg.png'
import k4 from '../Assets/bodybg.png'
import { apiData } from '../Api/AbhiraApi';


const Body = ({ valuess,setProductDetails,setActiveNav }) => {
    console.log("valuess", valuess);
    const [state, setState] = useState([]);
    // const[filteredState,setFilteredState]
    useEffect(() => {
        async function Api() {
            try {
                setState(apiData);
                // setFilteredState(apiData)
            }
            catch (error) {
                console.error('Error fetchig data:', error);
            }
        }
        Api()
        console.log(state);
    }, [])

    const handleCardClick=(item)=>{
        setProductDetails(item)
        setActiveNav(2);
    }

    return (
        <div>

            <div className='nav-abhira-main'>
                <div className='abhira-main' >
                    <div className='abhira-text'>
                        <div className='body1-1'><h1>Miskovitaroo!!..</h1></div>
                        <div className='body1-1.1'><h1>start yesterday guys!</h1></div>
                    </div>
                    <div className='body1-2'> <img src={k4} alt="" /></div>

                </div>
            </div>

            <section>
                <div className='drp1'>
                    <div className='dropdown'>
                        <button class="dropbtn">ALL COLLECTIONS</button>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Dress</button>
                        <div class="dropdown-content">
                            <a href="#">MEN</a>
                            <a href="#">WOMEN</a>
                            <a href="#">KIDS</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Electronics</button>
                        <div class="dropdown-content">
                            <a href="#">MOBILE</a>
                            <a href="#">CAMERA</a>
                            <a href="#">ACCESORIES</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <button class="dropbtn">Beauti&Helth</button>
                        <div class="dropdown-content">
                            <a href="#">MAKEUP</a>
                            <a href="#">SKIN CARE</a>
                            <a href="#">WELLNESS</a>
                        </div>
                    </div><div>

                        <div class="dropdown">
                            <button class="dropbtn">Jwellery</button>
                            <div class="dropdown-content">
                                <a href="#">EARINGS</a>
                                <a href="#">CHAIN</a>
                                <a href="#">ANKLET</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <div className='b-card-container'>
                    {apiData.map(item => (
                        <div key={item.id} className='card-items' onClick={()=>handleCardClick(item)} >
                            <img src={item.thumbnail} alt={item.name} className='card-image' />
                            <div className='card-item-details'>
                                <span className='card-item-title'>{item.title}</span>
                                <span className='card-item-description'>{item.description}</span>
                                <span>{item.price}<span className='cart-item-mrp'>MRP <span className='cart-item-value'>{item.mrp}</span></span></span>
                                <button>cart</button>
                                {/* <div>&#128;</div> */}
                                
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Body