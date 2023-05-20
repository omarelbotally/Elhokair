import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className='header sticky-top top-40'>

            <div className='header-content row'>
                {/* <div className='col-md-3 col-0 col-sm-0'>

                </div> */}

                <div className='col-md-5 col-12 col-sm-4 img-cont'>
                    <img src={require("../../Assets/header-chart.png")} className="img-fluid header-img" alt='header-img' />
                </div>
                <div className='col-md-1 col-12 col-sm-2'> Data delayed 15 mins </div>
                <div className='col-md-2 col-12 col-sm-2'><span >Price</span>&nbsp;<span className='currency'>SAR</span>
                    <h3>19.40</h3>
                </div>
                <div className='col-md-2 col-12 col-sm-2'><span >Change</span>&nbsp;<span className='currency'>SAR</span>
                    <h3>-8.00</h3>
                </div>
                <div className='col-md-2 col-12 col-sm-2'><span >%</span>
                    <h3>-4.76</h3>
                </div>


            </div>


        </div>
    )
}

export default Header